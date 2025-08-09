import { cn } from '@/lib/utils';
import type { TextareaHTMLAttributes } from 'react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export function Textarea({ className, error, rows = 4, ...props }: TextareaProps) {
  const baseStyles = 'block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-accent disabled:opacity-50';
  const variant = error ? 'border-red-500 text-red-600 placeholder-red-400 focus:ring-red-500' : 'border-gray-300';
  return (
    <textarea className={cn(baseStyles, variant, className)} rows={rows} {...props} />
  );
}