import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style variant. Primary buttons are filled and used for
   * main actions, secondary buttons are outlined or ghosted.
   */
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

/**
 * Reusable button component based off of shadcn/ui's button. It maps
 * variants to sensible Tailwind styles and forwards native button
 * attributes. You can override or extend styling via the className prop.
 */
export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent';
  const variantStyles =
    variant === 'primary'
      ? 'bg-brand-accent text-white hover:bg-orange-500'
      : 'bg-transparent border border-brand-accent text-brand-accent hover:bg-brand-accent/10';
  return (
    <button className={cn(baseStyles, variantStyles, className)} {...props}>
      {children}
    </button>
  );
}