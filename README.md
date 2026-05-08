# Portfolio

Personal portfolio of [Francesco Giannicola](https://github.com/metaforismo), built as a single Notion-style page.

Live: <https://francescogiannicola.com>

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS 3** + **shadcn/ui** components
- **next-themes** for light/dark
- **Lucide** icons
- **@vercel/analytics**
- GitHub contributions widget by [@ncdai](https://chanhdai.com/components/github-contributions)

## Run locally

```bash
npm install
npm run dev
# http://localhost:3000
```

```bash
npm run build   # production build
npm run lint    # eslint
```

## Project layout

```
app/
  layout.tsx          # root layout, fonts, providers
  page.tsx            # composes the Notion-style page
  globals.css         # theme tokens (light + dark) + Notion callouts
  blog/[slug]         # placeholder blog page

components/
  page-header.tsx     # title, properties list, social row
  copy-email-button.tsx
  copy-email-listener.tsx
  github-contributions.tsx
  contribution-graph.tsx
  github-theme-picker.tsx
  section-heading.tsx
  theme-provider.tsx
  theme-toggle.tsx
  sections/           # one file per page section
  ui/                 # shadcn/ui primitives

lib/
  data.ts             # all content lives here
  utils.ts            # cn()
  get-cached-contributions.ts
  hooks/use-copy-email.ts

public/
  cv.pdf
  images/
```

## Edit content

All copy lives in `lib/data.ts`: profile, projects, services, skills, experience,
certifications, social links. No CMS, just edit the file and redeploy.

## Themes

- **Light / Dark** toggle in the page header (default: dark, Notion-style).
- A separate **GitHub contributions theme picker** sits next to the contribution
  graph and offers GitHub Default · Winter · Halloween palettes. It only
  re-colours the heatmap cells; the rest of the page stays neutral.

## License

MIT
