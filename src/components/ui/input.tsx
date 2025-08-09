import { cn } from '@/lib/utils';
import type { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

/**
 * Basic text input styled to align with the overall design. When an
 * error message is passed the input border and text colour change to
 * indicate a validation error.
 */
export function Input({ className, error, ...props }: InputProps) {
  const baseStyles = 'block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-accent disabled:opacity-50';
  const variant = error ? 'border-red-500 text-red-600 placeholder-red-400 focus:ring-red-500' : 'border-gray-300';
  return (
    <input className={cn(baseStyles, variant, className)} {...props} />
  );
}