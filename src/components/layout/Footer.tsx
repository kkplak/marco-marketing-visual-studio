'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/useTranslation';

export interface FooterProps {
  locale: string;
}

/**
 * Site footer containing contact information, social links and legal
 * documents. All strings are translated based on the current locale.
 */
export function Footer({ locale }: FooterProps) {
  const t = useTranslation(locale);
  return (
    <footer className="mt-12 border-t border-gray-200 bg-white py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h3 className="mb-2 font-semibold">{t('brandName')}</h3>
          <p className="text-sm text-gray-600">{t('footer.address')}</p>
          <p className="mt-1 text-sm text-gray-600">info@marco-marketing.ch</p>
        </div>
        <div>
          <h4 className="mb-2 font-semibold">Links</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>
              <Link href={`/${locale}/impressum`} className="hover:underline">
                {t('footer.legal')}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/datenschutz`} className="hover:underline">
                {t('footer.privacy')}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 font-semibold">Social</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 font-semibold">{t('footer.newsletter')}</h4>
          <NewsletterForm locale={locale} />
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-500">© {new Date().getFullYear()} Marco Marketing Visual Studio</div>
    </footer>
  );
}

// Minimal newsletter form; does not actually integrate with a service yet.
function NewsletterForm({ locale }: { locale: string }) {
  const t = useTranslation(locale);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: integrate with newsletter service
        alert('Danke für Ihre Anmeldung!');
      }}
      className="flex w-full max-w-sm items-center space-x-2"
    >
      <input
        type="email"
        required
        placeholder="you@example.com"
        className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-accent"
      />
      <button type="submit" className="rounded-md bg-brand-accent px-3 py-2 text-sm font-medium text-white hover:bg-orange-500">
        {t('cta.learnMore')}
      </button>
    </form>
  );
}