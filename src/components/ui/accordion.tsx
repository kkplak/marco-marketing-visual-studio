import type { ReactNode } from 'react';

export interface AccordionItem {
  id: string;
  title: ReactNode;
  content: ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
}

/**
 * Simple accordion using native `<details>` and `<summary>` elements.
 * Each item can be opened or closed independently. Styling is done
 * through Tailwind classes on the summary and details elements.
 */
export function Accordion({ items }: AccordionProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details key={item.id} className="rounded-md border border-gray-200">
          <summary className="cursor-pointer select-none list-none p-4 font-medium marker:hidden focus:outline-none">
            {item.title}
          </summary>
          <div className="px-4 pb-4 pt-2 text-sm text-gray-700">
            {item.content}
          </div>
        </details>
      ))}
    </div>
  );
}