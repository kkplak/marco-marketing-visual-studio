/**
 * Tailwind CSS configuration for Marco Marketing Visual Studio.
 *
 * We extend the default theme slightly to include a neutral palette
 * appropriate for a photography/visual studio brand. Tailwind's
 * JIT engine will tree-shake unused styles at build time, ensuring
 * our bundle remains lean.
 */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,md,mdx}',
    './content/**/*.{md,mdx,json}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0F172A', // dark blue tone for text
          light: '#334155',
          lighter: '#CBD5E1',
          accent: '#FB923C' // orange accent for calls to action
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};