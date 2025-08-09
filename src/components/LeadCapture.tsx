"use client";
import { useState } from 'react';
import { Button, Input } from '@/components/ui';
import { useTranslation } from '@/lib/useTranslation';

export interface LeadCaptureProps {
  locale: string;
}

/**
 * A simple lead capture section used on the home page. It offers a
 * free resource or newsletter signup. Captured emails are not stored
 * persistently in this demo but the hook for integrating with an
 * external service is provided.
 */
export function LeadCapture({ locale }: LeadCaptureProps) {
  const t = useTranslation(locale);
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with MailerLite/Mailchimp
    alert('Thank you for subscribing!');
    setEmail('');
  };
  return (
    <section className="mt-12 rounded-md bg-brand-accent/10 p-6 text-center">
      <h2 className="mb-2 text-2xl font-semibold text-brand">{t('cta.learnMore')}</h2>
      <p className="mb-4 text-gray-700">{locale === 'de' ? 'Erhalten Sie regelmässig Tipps zu Foto, Video und Mikro‑Marketing direkt in Ihr Postfach.' : 'Get regular tips on photo, video and micro‑marketing straight to your inbox.'}</p>
      <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col items-center gap-3 sm:flex-row">
        <Input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
        />
        <Button type="submit" variant="primary">
          {locale === 'de' ? 'Anmelden' : 'Subscribe'}
        </Button>
      </form>
    </section>
  );
}