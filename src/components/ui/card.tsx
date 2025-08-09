import { cn } from '@/lib/utils';
import type { HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/**
 * Simple card component providing border, padding and a subtle shadow.
 */
export function Card({ className, children, ...props }: CardProps) {
  return (
    <div className={cn('rounded-lg border border-gray-200 bg-white p-6 shadow-sm', className)} {...props}>
      {children}
    </div>
  );
}