
# AI Engineer Portfolio Website (Community)

A React + Vite portfolio landing page built from a Figma community design. This project is optimized for a sleek AI/ML engineer showcase with animated hero sections, featured projects, tech stack highlights, credibility panels, and contact UI.

## Key Features

- Modern React + Vite app structure
- Tailwind CSS v4 styling via `@tailwindcss/vite`
- Custom Figma asset resolver plugin in `vite.config.ts`
- Dark neon UI with motion animation effects
- Sections included: Hero, Expertise, Projects, Engineering Approach, Tech Stack, Credibility, About, Contact
- Fully client-side portfolio template with reusable component-based UI

## Tech Stack

- Vite
- React
- Tailwind CSS
- Radix UI components
- Motion animation (`motion/react`)
- Lucide icons
- `@mui/material` icons support
- `next-themes` theming support

## Getting Started

Recommended package manager: `pnpm`

```bash
pnpm install
pnpm run dev
```

If you prefer npm, install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Then open the local server URL shown in the terminal.

## Build

```bash
npm run build
```

## Project Structure

- `src/main.tsx` — application bootstrap and root render
- `src/app/App.tsx` — main page layout and section composition
- `src/app/components/` — portfolio sections and UI components
- `src/styles/` — global styles, theme, and Tailwind imports
- `vite.config.ts` — Vite configuration, plugin setup, and path alias
- `index.html` — HTML template and metadata

## Notes

- `src/app/App.tsx` forces dark mode by adding `dark` to `document.documentElement`.
- `vite.config.ts` includes a custom resolver for `figma:asset/` imports.
- The project includes `ATTRIBUTIONS.md` and a `guidelines/` folder for reference content.

## License

This repository is a community-sourced portfolio template and should be used according to any applicable attribution or license terms from the source design.
  