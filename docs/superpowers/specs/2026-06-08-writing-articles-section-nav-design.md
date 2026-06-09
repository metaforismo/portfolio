# Writing articles (from X) + ⌘K command-palette navigation

## Goal

Two additions to the one-page portfolio:

1. **Writing section** lists curated articles that link out to posts/threads on X,
   instead of the current "Articles coming soon" placeholder. Adding a new article
   is a one-line edit to a data array.
2. **⌘K command palette**: a searchable menu (keyboard shortcut + floating
   trigger) to jump to any section. Responsive on mobile.

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

## Feature 2 — ⌘K command palette

### Component (`components/command-palette.tsx`, client)

- Floating trigger pill, fixed bottom-left (icon-only on mobile, icon + "Jump to…"
  + platform-aware `⌘K`/`Ctrl K` hint on `sm+`).
- Opens with `⌘K` / `Ctrl+K` (global listener) or by clicking the trigger.
- Source of truth: the existing `navAnchors` array in `lib/data.ts`.
- Modal dialog: search input filters sections by label; `↑`/`↓` move the
  highlight, `Enter` jumps, `Esc` / backdrop click closes. Body scroll locked
  while open; input autofocused.
- Jumping scrolls smoothly to the section unless `prefers-reduced-motion` is set.
- a11y: `role="dialog"` + `aria-modal`, `role="listbox"`/`option` with
  `aria-selected`; platform hint set after mount to avoid hydration mismatch.
- Fully responsive: modal is `max-w-[460px]`, full-width-minus-padding on mobile.

### Wiring

- Add `id="home"` to the `<header>` in `components/page-header.tsx` so the "home"
  anchor resolves (all other anchor ids already exist on their sections).
- Render `<CommandPalette />` from `app/page.tsx`.

## Testing

- `npm run build`, `npm run lint`, `tsc --noEmit` pass.
- Manual: palette opens via ⌘K and the trigger; filtering + arrow/Enter work;
  jumping scrolls to the section; article card links open the X post; verified
  responsive at 1280px and 390px.
