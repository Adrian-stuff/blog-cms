# Project Context: Nobelium (Blog CMS)

## 1. Project Overview
**Nobelium** is a static blog generator built with **Next.js** that uses **Notion** as a headless CMS. It allows users to manage content entirely within Notion and publish it as a fast, responsive, and SEO-friendly website without needing a separate backend or database management.

## 2. Tech Stack
- **Framework**: [Next.js 14](https://nextjs.org/) (Page Router approach)
- **Language**: JavaScript
- **Styling**: [Tailwind CSS 3.3](https://tailwindcss.com/)
- **Data Source**: Notion (via `notion-client` and `react-notion-x`)
- **Rendering**: Static Site Generation (SSG) with Incremental Static Regeneration (ISR).
- **Icons/Assets**: FontAwesome (via `react-fontawesome` if used) or SVG assets.

## 3. Architecture & Data Flow
1.  **Content Management**: The user writes and publishes posts in a specific **Notion Database**.
2.  **Data Fetching**:
    - Build time (or ISR): Next.js fetches the Notion page structure using `notion-client` -> `lib/notion`.
    - `blog.config.js` defines the `notionPageId` which serves as the root.
3.  **Rendering**:
    - The data is passed to `react-notion-x` components in `pages/[slug].js` (for posts) or `pages/index.js` (for the list).
    - Custom styles are applied via Tailwind.

## 4. Key Directory Structure
- **`/`**: Root contains configuration files.
  - `blog.config.js`: **MAIN CONFIGURATION**. Controls title, author, SEO, Notion ID, social links, and feature flags. This is the single source of truth for site settings.
  - `package.json`: Note the `patchedDependencies`—the project uses patched versions of `react-notion-x` and `notion-utils`.
- **`/pages`**: Next.js Routes.
  - `index.js`: The homepage/blog feed.
  - `[slug].js`: Dynamic route for individual blog posts.
  - `feed.js`: Generates RSS/Atom feeds.
  - `_app.js` / `_document.js`: Global Next.js wrappers.
- **`/components`**: React components.
  - Reusable UI elements (Header, Footer, Tags, etc.).
- **`/lib`**: Backend/Utility logic.
  - `notion/`: Core logic for interacting with the Notion API.
  - `blockMap.js`, `notion.js`: Helpers for processing Notion blocks.
- **`/public`**: Static assets (favicons, verification files).

## 5. Critical Configuration
The application relies heavily on **`blog.config.js`**.
- **`notionPageId`**: MUST match the ID of the public Notion page acting as the database.
- **`notionAccessToken`**: Partial support for private pages (not recommended for public blogs).
- **`lang`**, **`appearance`**: Appearance settings.

## 6. Important Notes for Agents
- **Patches**: The project uses `pnpm` patch feature for `react-notion-x`. Be careful when updating dependencies; ensure patches still apply or are no longer needed.
- **Routing**: It uses the filesystem-based router (`pages/`). There is no `src/` directory.
- **Environment**: Does not strictly require a backend server; designed for serverless deployment (Vercel).
- **Styling**: All styling should be done via **Tailwind utility classes**. Avoid custom CSS files unless necessary (`styles/` contains global globals).

## 7. Common Workflows
- **Add/Edit Content**: Do this in **Notion**, not the code.
- **Change Site Meta**: Edit `blog.config.js`.
- **Modify Layout**: Edit `layouts/` or `components/`.
- **Debug Fetching**: Check `lib/notion` and `pages/[slug].js` `getStaticProps`.

## 8. Audit Findings (Current State)
- **Dependencies**: React 18, Next 14.
- **Linter**: Standard ESLint config.
- **Formatting**: EditorConfig and Prettier (likely) in place.
- **Structure**: Clean, standard Next.js structure. No immediate structural issues found.
