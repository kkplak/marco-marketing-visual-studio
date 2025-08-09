// Import translation dictionaries from the public folder. We use
// relative imports instead of `@/../public` because Next.js does not
// allow importing outside the src directory when using the alias. The
// relative path resolves from this file (`src/lib`) up two levels to
// reach the project root and then into `public/locales`.
import de from '../locales/de.json';
import en from '../locales/en.json';
import { getTranslation } from '@/lib/utils';

/**
 * A minimal translation hook used throughout the project. It accepts a locale
 * string ("de" or "en") and returns a function that can be used to
 * resolve translation keys to their corresponding values. If a key is not
 * found in the dictionary the key itself is returned as a fallback.
 */
export function useTranslation(locale: string) {
  const dict = locale === 'en' ? (en as any) : (de as any);
  return (key: string): string => getTranslation(key, dict);
}

/**
 * Returns the raw dictionary for a given locale. This is useful in
 * server components where hooks cannot be used.
 */
export function getDictionary(locale: string) {
  return locale === 'en' ? (en as any) : (de as any);
}