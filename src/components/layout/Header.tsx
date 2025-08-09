"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/lib/useTranslation';

export interface HeaderProps {
  locale: string;
}

/**
 * Top navigation bar that is shared across all pages. It contains
 * links to the main sections of the site and a simple locale switcher.
 */
export function Header({ locale }: HeaderProps) {
  const t = useTranslation(locale);
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Determine the current path without locale prefix. e.g. /en/services -> /services
  const pathWithoutLocale = pathname?.replace(/^\/(de|en)/, '') || '/';

  const buildHref = (segment: string) => {
    if (segment === '/') return `/${locale}`;
    return `/${locale}${segment}`;
  };

  const links = [
    { href: '/', label: t('nav.home') },
    { href: '/services', label: t('nav.services') },
    { href: '/portfolio', label: t('nav.portfolio') },
    { href: '/blog', label: t('nav.blog') },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      {/* Skip link for keyboard users */}
      <a href="#main-content" className="sr-only focus:not-sr-only absolute left-2 top-2 z-50 rounded-md bg-brand-accent px-2 py-1 text-white">
        {t('nav.home')} – Skip to content
      </a>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href={`/${locale}`} className="text-lg font-semibold">
          {t('brandName')}
        </Link>
        {/* Desktop nav */}
        <nav className="hidden space-x-6 md:flex">
          {links.map((link) => {
            const href = buildHref(link.href);
            const isActive = pathWithoutLocale === (link.href === '/' ? '/' : link.href);
            return (
              <Link
                key={link.href}
                href={href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  isActive ? 'text-brand-accent' : 'text-gray-700 hover:text-brand-accent'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        {/* Locale switcher */}
        <div className="hidden md:block">
          <LocaleSwitcher locale={locale} pathWithoutLocale={pathWithoutLocale} />
        </div>
        {/* Mobile menu button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="sr-only">Toggle navigation</span>
          {/* Hamburger icon */}
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden">
          <nav className="space-y-1 border-t border-gray-200 bg-white px-4 py-4">
            {links.map((link) => {
              const href = buildHref(link.href);
              const isActive = pathWithoutLocale === (link.href === '/' ? '/' : link.href);
              return (
                <Link
                  key={link.href}
                  href={href}
                  className={cn(
                    'block rounded-md px-3 py-2 text-base font-medium',
                    isActive ? 'bg-brand-accent/10 text-brand-accent' : 'text-gray-700 hover:bg-gray-50'
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            {/* Locale switch on mobile */}
            <div className="mt-2 flex space-x-4">
              <LocaleSwitcher locale={locale} pathWithoutLocale={pathWithoutLocale} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

interface LocaleSwitcherProps {
  locale: string;
  pathWithoutLocale: string;
}

function LocaleSwitcher({ locale, pathWithoutLocale }: LocaleSwitcherProps) {
  // Build links to switch languages without losing current path
  const otherLocale = locale === 'de' ? 'en' : 'de';
  const otherHref = `/${otherLocale}${pathWithoutLocale}`;
  return (
    <div className="flex items-center space-x-2 text-sm font-medium">
      <Link href={`/${locale}${pathWithoutLocale}`} className={cn(locale === 'de' ? 'text-brand-accent' : 'text-gray-500 hover:text-brand-accent')}>DE</Link>
      <span>|</span>
      <Link href={otherHref} className={cn(locale === 'en' ? 'text-brand-accent' : 'text-gray-500 hover:text-brand-accent')}>EN</Link>
    </div>
  );
}