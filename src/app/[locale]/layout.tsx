import type { ReactNode } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ToastProvider } from '@/components/ui/toast';
import { CookieBanner } from '@/components/layout/CookieBanner';

export default function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  return (
    <>
      <Header locale={locale} />
      <ToastProvider>
        <main id="main-content" className="mx-auto max-w-7xl px-4 py-8">
          {children}
        </main>
      </ToastProvider>
      <Footer locale={locale} />
      {/* Pass locale to cookie banner for localisation */}
      <CookieBanner locale={locale} />
    </>
  );
}
