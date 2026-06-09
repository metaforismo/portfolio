# Writing articles (from X) + side-dot navigation

## Goal

Two additions to the one-page portfolio:

1. **Writing section** lists curated articles that link out to posts/threads on X,
   instead of the current "Articles coming soon" placeholder. Adding a new article
   is a one-line edit to a data array.
2. **Side-dot navigation**: a fixed vertical column of dots that highlights the
   active section while scrolling and lets the visitor jump to any section.

## Non-goals

- No automatic fetching from the X API (paid, fragile). Articles are curated by hand.
- No on-site article reader. Cards link out to X.

## Feature 1 — Writing articles

### Data (`lib/data.ts`)

```ts
export type Article = {
  title: string;
  href: string;    // X post / thread URL
  date: string;    // ISO "YYYY-MM-DD"
  blurb?: string;  // one-line summary
  source?: string; // badge label, e.g. "Thread" | "Post" (default "X")
};

export const articles: Article[] = [
  {
    title: "Personal Finance for Beginners: How to Build a Better Future with Your Money",
    href: "https://x.com/fragiannicola/status/2064069685662884021",
    date: "2026-06-08",
    blurb: "Before you invest, the most important thing isn't finding the perfect product — it's understanding yourself.",
    source: "Thread",
  },
];
```

### Component (`components/sections/writing.tsx`)

- If `articles` is non-empty: render a list of cards in the existing `notion-row`
  style — mono date + source badge, serif/semibold title, optional blurb,
  `ArrowUpRight` icon. Each card is a `Link` to `article.href`
  (`target="_blank" rel="noopener"`), with an accessible label.
- If `articles` is empty: keep the existing yellow "coming soon" `Callout` as fallback.
- Dates render via `date-fns` (already a dependency) as e.g. "Jun 8, 2026".

### Cleanup

- Remove `app/blog/[slug]/page.tsx` (unused placeholder). Articles now point to X,
  so the internal blog route is dead code.

## Feature 2 — Side-dot navigation

### Component (`components/section-nav.tsx`, client)

- Fixed vertical column of dots, centered vertically on the left edge.
- Visible only on `lg+` screens (hidden on mobile/tablet to avoid clutter).
- Source of truth: the existing `navAnchors` array in `lib/data.ts`.
- Active section tracked with `IntersectionObserver`; the active dot is filled with
  the accent color and slightly larger, inactive dots are small hollow dots.
- Each dot is a link to `#<id>` with a Radix `Tooltip` showing the section label;
  `aria-current="true"` on the active one; wrapped in a `<nav aria-label>` landmark.
- Click scrolls smoothly to the section, unless `prefers-reduced-motion` is set
  (then it jumps).

### Wiring

- Add `id="home"` to the `<header>` in `components/page-header.tsx` so the "home"
  anchor resolves (all other anchor ids already exist on their sections).
- Render `<SectionNav />` from `app/page.tsx` (specific to the one-page home, not the
  global layout which also wraps other routes).

## Testing

- `npm run build` and `npm run lint` pass.
- Manual: dots highlight correctly while scrolling; clicking jumps to the section;
  article card links open the X post; layout unaffected on mobile.
