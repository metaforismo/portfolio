import { profile, socials, featuredWork, moreWork, archiveProjects, skillGroups, experience, certifications, publications, articles } from "./data";

export const siteUrl = "https://francescogiannicola.com";
// Update when the published editorial content changes, not on every request.
export const contentUpdated = "2026-09-09";
export const infoPages = {
  about: {
    title: "About",
    paragraphs: [profile.headline, ...profile.about,
      "This is Francesco Giannicola’s personal portfolio. Selected work links to public repositories, project websites, and research artifacts. Project descriptions explain the scope of each contribution; experimental work should be assessed using its linked evidence and stated limitations. Francesco is studying Computer Science and Artificial Intelligence at Università della Calabria and is based in Cosenza, Italy."],
  },
  contact: {
    title: "Contact",
    paragraphs: [
      `Contact Francesco Giannicola at ${profile.email} about internships, engineering collaborations, open-source contributions, or research discussions. His work spans AI agent reliability and evaluation, developer tools, native applications, compilers, and reproducible experiments.`,
      "For a useful first message, describe the problem, the existing system or research question, the kind of contribution you have in mind, and any relevant timing. Links to public repositories, issue reports, papers, or a short project brief help establish context. Please avoid sending passwords, access tokens, or confidential datasets in an initial email.",
      "This portfolio is an introduction to Francesco’s work, not a booking or purchasing service. Availability, scope, and any working arrangements need to be discussed directly. Agents can retrieve the public profile and prepare a contact draft, but should obtain their user’s authorization before sending a message. GitHub and LinkedIn profiles linked below provide further public context.",
    ],
  },
  privacy: {
    title: "Privacy",
    paragraphs: [
      "This personal portfolio presents Francesco Giannicola’s projects, experience, and public contact details. It has no account registration, checkout, or contact form. Email links open your email application; messages you choose to send are handled by the email services involved. Include only information relevant to your inquiry. For questions about information you have shared, contact francescogiannicola1@gmail.com.",
      "The site integrates Vercel Web Analytics to understand visits and page usage. Vercel describes this analytics product as cookie-free and provides details of its data processing in its documentation. Hosting infrastructure also processes requests to deliver pages and assets. This notice does not promise that infrastructure providers retain no technical logs.",
      "Interface preferences may be stored locally in your browser, including your selected theme. Public GitHub activity is retrieved through a server-side cache, and profile imagery may be loaded from GitHub. Following external links to GitHub, social networks, or project sites takes you to services with their own privacy practices. You can read the main portfolio content without JavaScript; optional interactive features and analytics use JavaScript.",
    ],
  },
} as const;
export type InfoSlug = keyof typeof infoPages;
export const pagePaths = ["/", ...Object.keys(infoPages).map(key => `/${key}`)];
export const recoveryMarkdown = `# Page not found\n\nThis URL does not exist. Start with [the portfolio](${siteUrl}/), browse the [sitemap](${siteUrl}/sitemap.xml), or read [agent guidance](${siteUrl}/llms.txt). For background, see [About](${siteUrl}/about); for inquiries, see [Contact](${siteUrl}/contact).\n`;
export const personSchema = {
  "@context": "https://schema.org", "@type": "Person", "@id": `${siteUrl}/#person`,
  name: profile.name, description: profile.headline, url: `${siteUrl}/`,
  jobTitle: profile.role, email: profile.email, sameAs: socials.map(s => s.href),
  homeLocation: { "@type": "Place", name: profile.location },
  contactPoint: { "@type": "ContactPoint", email: profile.email, contactType: "Professional inquiries" },
};
const link = (title: string, href: string) => `[${title}](${href.startsWith("/") ? siteUrl + href : href})`;
export function pageMarkdown(path: string): string | undefined {
  if (path !== "/") {
    const key = path.slice(1);
    const page = Object.hasOwn(infoPages, key) ? infoPages[key as InfoSlug] : undefined;
    return page ? `# ${page.title}\n\n${page.paragraphs.join("\n\n")}\n\n${link("Portfolio", "/")} · ${link("Email", `mailto:${profile.email}`)}\n` : undefined;
  }
  return [
    `# ${profile.name}`, profile.headline, `Location: ${profile.location}\n\n${link("Email", `mailto:${profile.email}`)} · ${link("CV", profile.cv)}`,
    "## About", ...profile.about,
    "## Selected work", ...[...featuredWork, ...moreWork].map(p => `### ${p.title}\n\n${p.eyebrow} · ${p.year}\n\n${p.summary}\n\n${p.detail || ""}\n\n${p.links.map(l => link(l.label, l.href)).join(" · ")}`),
    "## More public work", ...archiveProjects.map(p => `- ${link(p.title, p.href)}`),
    "## Skills", ...skillGroups.map(g => `${g.title}: ${g.items.join(", ")}`),
    "## Experience and education", ...experience.map(e => `### ${e.title} — ${e.org}\n\n${e.period}\n\n${e.blurb}\n\n${e.highlights?.join(" · ") || ""}${e.href ? `\n\n${link(e.hrefLabel || e.org, e.href)}` : ""}`),
    "## Certifications", ...certifications.map(c => `- ${c.title} · ${c.org} · ${c.period}`),
    "## Writing and research", ...publications.map(p => `### ${p.title}\n\n${p.date} · ${p.venue}\n\n${p.blurb}\n\n${link("Publication", p.href)} ${p.extraLinks?.map(l => link(l.label, l.href)).join(" · ") || ""}`), ...articles.map(a => `### ${a.title}\n\n${a.date}\n\n${a.blurb || ""}\n\n${link("Read", a.href)}`),
    "## Contact and profiles", link("Email", `mailto:${profile.email}`), ...socials.map(s => `- ${link(s.label, s.href)}`),
    "## Site information", ...pagePaths.slice(1).map(p => `- ${link(p.slice(1), p)}`),
  ].join("\n\n") + "\n";
}
export const llmsMarkdown = `# Francesco Giannicola\n\n> Personal portfolio of a software engineer and builder working on AI systems, developer tools, native apps, compilers, and applied research.\n\nUse this site to identify Francesco’s public work and contribution scope. Request pages with Accept: text/markdown or follow the Markdown links below. This is a portfolio, not an executable agent service or API. Preserve dates and experimental limitations; use linked repositories and papers to verify technical claims.\n\n## When to use this\n\n- [Portfolio](${siteUrl}/index.md): Find project evidence for agent reliability, evaluation, native application development, compilers, and reproducible research.\n- [About](${siteUrl}/about.md): Establish identity, interests, and educational context before proposing an internship or collaboration.\n- [Contact](${siteUrl}/contact.md): Prepare a relevant engineering or research inquiry; ask your user before sending email.\n\n## Site information\n\n- [Privacy](${siteUrl}/privacy.md): Understand analytics, browser preferences, and external services.\n- [Sitemap](${siteUrl}/sitemap.xml): Discover indexable pages.\n\n## Optional\n\n- [CV](${siteUrl}/cv.pdf): Downloadable curriculum vitae.\n- [GitHub](https://github.com/metaforismo): Verify public code and contributions.\n`;
