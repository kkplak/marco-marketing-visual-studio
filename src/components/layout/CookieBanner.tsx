'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * Cookie consent banner. It appears at the bottom of the page until
 * the visitor grants consent. Consent is stored in localStorage to
 * respect Swiss FADP requirements. Text should be updated to your
 * privacy notice.
 */
export interface CookieBannerProps {
  /**
   * Current locale ("de" or "en"). Determines the language of the
   * banner text and button label. Defaults to "de" when not provided.
   */
  locale?: string;
}

export function CookieBanner({ locale = 'de' }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const consent = typeof window !== 'undefined' && localStorage.getItem('cookieConsent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setVisible(false);
  };

  if (!visible) return null;
  const message =
    locale === 'en'
      ? 'This website uses cookies to improve your experience. By using it you agree to our use of cookies.'
      : 'Diese Website verwendet Cookies, um Ihr Erlebnis zu verbessern. Mit der Nutzung stimmen Sie der Verwendung von Cookies zu.';
  const buttonLabel = locale === 'en' ? 'Accept' : 'Einverstanden';
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-between gap-2 bg-gray-50 px-4 py-3 shadow-md md:flex-row md:gap-4">
      <p className="text-sm text-gray-700">{message}</p>
      <button
        className="rounded-md bg-brand-accent px-4 py-2 text-sm font-medium text-white hover:bg-orange-500"
        onClick={accept}
      >
        {buttonLabel}
      </button>
    </div>
  );
}