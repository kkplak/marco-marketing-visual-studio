import { cn } from '@/lib/utils';
import type { SelectHTMLAttributes, ReactNode } from 'react';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
  error?: string;
}

export function Select({ className, error, children, ...props }: SelectProps) {
  const baseStyles = 'block w-full rounded-md border bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-accent disabled:opacity-50';
  const variant = error ? 'border-red-500 text-red-600 focus:ring-red-500' : 'border-gray-300';
  return (
    <select className={cn(baseStyles, variant, className)} {...props}>
      {children}
    </select>
  );
}