# Marco Marketing Visual Studio

This repository contains the source code for **Marco Marketing Visual Studio**, a bilingual (DE/EN) marketing and visual content portfolio. It is built with the Next.js App Router, TypeScript, Tailwind CSS and a handful of modern libraries to provide a solid foundation for a small marketing studio.

## Features

* **Bilingual content** – German is the default language with English translations available via the locale switcher.
* **Modular content system** – Services are defined in JSON (`content/services.json`) and case studies and blog articles live as MDX files inside `content/cases` and `content/blog`.
* **Custom UI kit** – Reusable button, card and form components modelled on shadcn/ui and styled with Tailwind.
* **Animations** – Selected elements animate into view using Framer Motion (respecting the user’s reduced motion preference).
* **Responsive gallery** – A filterable gallery with a simple lightbox for photos and videos.
* **Accessible forms** – Contact form built with react‑hook‑form and zod validation; success/error toasts are displayed via a lightweight toast provider.
* **Cookie consent** – GDPR/FADP‑aware opt‑in banner stored in localStorage.
* **Deployment ready** – Includes `vercel.json`, static `robots.txt` and `sitemap.xml`, plus an example `.env` file.

## Getting started

1. **Install dependencies**

   ```bash
   pnpm install
   ```

2. **Run in development**

   ```bash
   pnpm dev
   ```

   The app will be available at `http://localhost:3000`. Navigating to `/` will redirect to `/de` by default. Append `/en` to access the English site.

3. **Build for production**

   ```bash
   pnpm build
   pnpm start
   ```

## Editing content

* **Services** – Update `content/services.json`. Each service entry contains German and English fields; feel free to adjust pricing, features and CTA texts.
* **Case studies** – Add MDX files to `content/cases/`. The frontmatter must include `title`, `slug`, `coverImage`, `date` and optionally `industries` and `metrics`.
* **Blog posts** – Add MDX files to `content/blog/`. Frontmatter requires `title`, `slug`, `excerpt`, `date`, `tags` and `coverImage`.

After editing content you can run `pnpm run content:validate` to ensure required fields are present.

## Internationalisation

Language strings live in `public/locales/de/common.json` and `public/locales/en/common.json`. Update these files to change navigation labels, form labels, etc. The custom `useTranslation` hook resolves dotted keys and falls back to the key when a translation is missing.

## SEO & Metadata

The project sets sensible defaults for SEO: Open Graph and Twitter card support can be configured via the page components. A simple sitemap and robots file are provided. For richer schema.org structured data you can extend the metadata functions in each page.

## Deployment

The repository is configured to deploy on Vercel. After pushing to a Git repository connected to Vercel, set the `NEXT_PUBLIC_CALENDLY_URL` environment variable in the Vercel dashboard to embed your booking widget. The default redirect from `/` to `/de` is defined in `vercel.json`.

## TODO

* Integrate a proper mailing service for the newsletter and lead capture (e.g. Mailchimp or MailerLite).
* Replace placeholder assets in `public/portfolio/` and `public/clients/` with your own photos, videos and logos.
* Extend the content validation script to check MDX frontmatter consistency and slug uniqueness.

## License

This project is provided as a starting point and can be freely modified for commercial or personal use.