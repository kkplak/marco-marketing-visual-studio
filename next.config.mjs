import nextI18NextConfig from './next-i18next.config.js';
import mdx from '@next/mdx';

// Initialise MDX plugin. Because @next/mdx is a CommonJS module, we import
// the default export and call it to obtain the withMDX function. See
// https://nextjs.org/docs/pages/building-your-application/configuring/mdx#app-directory-support
const withMDX = mdx({
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
});

/**
 * Next.js configuration for the project. We enable the app router,
 * MDX support and internationalisation support via next-i18next.
 */
const nextConfig = {
  // Extend recognised page extensions to include MDX files
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  // We intentionally omit the `i18n` configuration for Next.js. When
  // using the app router with a dynamic `[locale]` segment we handle
  // locales via routes rather than Next's built-in locale router. This
  // prevents automatic locale detection and redirect loops when using
  // custom redirects.
  // Configure webpack to handle additional file types if needed
  webpack: (config) => {
    return config;
  }
  ,
  // Skip ESLint during production builds. The project includes a
  // standalone lint script (npm run lint) that can be executed
  // separately. Ignoring ESLint during build prevents build failures
  // if a plugin (e.g., eslint-config-prettier) is not installed.
  eslint: {
    ignoreDuringBuilds: true
  }
  ,
  // No server-level redirects are defined here. The root route (`/`)
  // renders a language selection page (see `src/app/page.tsx`). Keeping
  // redirects out of Next.js config avoids unintended redirect loops.
};

export default withMDX(nextConfig);