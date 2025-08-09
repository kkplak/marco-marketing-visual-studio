"use client";

import { useState } from 'react';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export interface Tab {
  id: string;
  title: string;
  content: ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  defaultTabId?: string;
}

/**
 * Simple uncontrolled tabs component. It stores the active tab in local
 * state and renders the corresponding panel. The tabs are rendered as
 * a horizontal list of buttons.
 */
export function Tabs({ tabs, defaultTabId }: TabsProps) {
  const [active, setActive] = useState<string>(defaultTabId || tabs[0].id);
  return (
    <div>
      <div className="mb-4 flex space-x-4 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={cn(
              'px-4 py-2 text-sm font-medium transition-colors',
              active === tab.id
                ? 'border-b-2 border-brand-accent text-brand-accent'
                : 'text-gray-500 hover:text-brand-accent'
            )}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div>
        {tabs.map((tab) => (
          <div key={tab.id} hidden={tab.id !== active}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}