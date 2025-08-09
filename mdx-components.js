/**
 * This helper is required when using the `@next/mdx` package with the
 * Next.js app router. Without this file, Next will throw an error
 * complaining that a default `useMDXComponents` export could not be found.
 *
 * The function simply returns the provided components unchanged. If you
 * decide to customise how Markdown/MDX elements are rendered (for
 * example, to wrap images or blockquotes in custom components), you can
 * override them here. See the Next.js MDX documentation for details.
 *
 * @param {Record<string, React.ComponentType<any>>} components
 * @returns {Record<string, React.ComponentType<any>>}
 */
export function useMDXComponents(components) {
  return {
    // Extend or override built‑in components here. For example:
    // h1: ({ children }) => <h1 className="text-3xl font-bold"/>,
    ...components,
  };
}