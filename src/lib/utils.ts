import clsx from 'clsx';

/**
 * Utility to compose Tailwind class names conditionally. It wraps the
 * popular `clsx` library to provide a consistent API across our
 * components. See https://github.com/lukeed/clsx for details.
 *
 * Example usage:
 *   const classes = cn('p-4', isActive && 'bg-brand-accent');
 */
export function cn(...inputs: any[]) {
  return clsx(inputs);
}

/**
 * Flatten nested translation objects by a dot‑separated path.
 * Given a key like "nav.home" and an object `{ nav: { home: 'Startseite' } }`
 * this helper will return "Startseite". If the key does not exist
 * the key itself is returned as a fallback, which makes missing
 * translations easy to spot during development.
 */
export function getTranslation(key: string, dict: Record<string, any>): string {
  return key.split('.').reduce((acc: any, part: string) => {
    return acc && acc[part] != null ? acc[part] : key;
  }, dict);
}