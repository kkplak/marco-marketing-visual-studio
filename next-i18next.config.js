/**
 * i18n configuration for next-i18next. Because the project uses ES modules
 * (see the "type": "module" in package.json), this file must also
 * use ESM syntax. We export the configuration as the default export so
 * that Next.js can import it in next.config.mjs.
 */

const config = {
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    // Disable automatic locale detection to avoid Next.js build warnings. We
    // manage locale detection manually via explicit locale segments in the
    // URL (e.g. /de and /en).
    localeDetection: false
  },
  // With the app router we use dynamic [locale] segments instead of
  // subpath routing; enabling this will cause next-i18next to reload
  // translations when rendering server components.
  reloadOnPrerender: true
};

export default config;