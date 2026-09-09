import { unstable_cache } from "next/cache"

import type { Activity } from "@/components/contribution-graph"

const loadContributions = unstable_cache(
  async (username: string): Promise<Activity[]> => {
    const res = await fetch(
      `${process.env.GITHUB_CONTRIBUTIONS_API_URL || "https://github-contributions-api.jogruber.de"}/v4/${encodeURIComponent(username)}?y=last`,
      { signal: AbortSignal.timeout(5000) }
    )
    if (!res.ok) throw new Error(`Contribution provider returned ${res.status}`)
    const data = await res.json()
    if (!Array.isArray(data.contributions) || !data.contributions.length ||
        data.contributions.length > 366 || !data.contributions.every((entry: Activity) =>
          entry && typeof entry.date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(entry.date) &&
          Number.isFinite(Date.parse(entry.date)) && Number.isInteger(entry.count) && entry.count >= 0 &&
          Number.isInteger(entry.level) && entry.level >= 0 && entry.level <= 4
        )) throw new Error("Invalid contribution provider response")
    return data.contributions
  },
  ["github-contributions"],
  { revalidate: 86400 }
)

export async function getCachedContributions(username: string): Promise<Activity[] | null> {
  try {
    return await loadContributions(username)
  } catch {
    // Optional visualization must not take down the portfolio. Failed responses
    // are caught outside the cache so an outage is not cached as zero activity.
    return null
  }
}
