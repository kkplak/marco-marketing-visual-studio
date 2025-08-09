import { getServices } from '@/lib/content';
import { ServiceCard } from '@/components/ServiceCard';
import { PricingCard, PricingTier } from '@/components/PricingCard';
import { Accordion } from '@/components/ui/accordion';

export default async function ServicesPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const services = await getServices();
  // Sample FAQ content – replace with real questions
  const faqs = [
    {
      id: 'faq1',
      title: locale === 'de' ? 'Wie läuft ein Shooting ab?' : 'How does a shoot work?',
      content:
        locale === 'de'
          ? 'Wir beginnen mit einem Vorgespräch, planen das Konzept und setzen es anschliessend im Studio oder on‑location um.'
          : 'We start with a discovery call, plan the concept and then execute it in the studio or on location.'
    },
    {
      id: 'faq2',
      title: locale === 'de' ? 'Welche Rechte erhalte ich an den Bildern?' : 'Which rights do I get to the images?',
      content:
        locale === 'de'
          ? 'Sie erhalten zeitlich und räumlich uneingeschränkte Nutzungsrechte für die vereinbarten Zwecke.'
          : 'You receive unlimited usage rights for the agreed purposes.'
    },
    {
      id: 'faq3',
      title: locale === 'de' ? 'Gibt es Rabatte bei langfristiger Zusammenarbeit?' : 'Are there discounts for long‑term cooperation?',
      content:
        locale === 'de'
          ? 'Ja, für Retainer‑Pakete bieten wir attraktive Konditionen.'
          : 'Yes, we offer attractive conditions for retainer packages.'
    }
  ];

  // Define generic pricing tiers independent of specific service. The price
  // will be scaled based on the base price of each service.
  function buildTiers(basePrice: number): PricingTier[] {
    return [
      {
        name: locale === 'de' ? 'Starter' : 'Starter',
        price: Math.round(basePrice),
        description: locale === 'de' ? 'Für kleine Projekte und erste Schritte.' : 'For small projects and first steps.',
        features: [
          locale === 'de' ? 'Grundshooting' : 'Basic shoot',
          locale === 'de' ? '5 Bilder/Videos' : '5 images/videos',
          locale === 'de' ? '1 Revision' : '1 revision'
        ]
      },
      {
        name: locale === 'de' ? 'Pro' : 'Pro',
        price: Math.round(basePrice * 1.5),
        description: locale === 'de' ? 'Umfangreiches Paket für ambitionierte Marken.' : 'Comprehensive package for ambitious brands.',
        features: [
          locale === 'de' ? 'Erweitertes Shooting' : 'Extended shoot',
          locale === 'de' ? '15 Bilder/Videos' : '15 images/videos',
          locale === 'de' ? '2 Revisionen' : '2 revisions'
        ]
      },
      {
        name: locale === 'de' ? 'Retainer' : 'Retainer',
        price: Math.round(basePrice * 2),
        description: locale === 'de' ? 'Monatliche Betreuung für konstante Präsenz.' : 'Monthly support for consistent presence.',
        features: [
          locale === 'de' ? 'Monatliche Produktionen' : 'Monthly productions',
          locale === 'de' ? '30 Bilder/Videos' : '30 images/videos',
          locale === 'de' ? 'Unbegrenzte Revisionen' : 'Unlimited revisions'
        ]
      }
    ];
  }

  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold text-brand mb-4">{locale === 'de' ? 'Leistungen' : 'Services'}</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service: any) => (
          <ServiceCard key={service.slug} service={service} locale={locale} />
        ))}
      </div>
      {/* Pricing section */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-brand">{locale === 'de' ? 'Pakete' : 'Packages'}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service: any) => {
            const tiers = buildTiers(service.priceCHF);
            return tiers.map((tier, idx) => (
              <PricingCard key={`${service.slug}-${idx}`} tier={tier} locale={locale} />
            ));
          })}
        </div>
      </section>
      {/* What's included checklist */}
      <section>
        <h2 className="mb-4 text-2xl font-bold text-brand">{locale === 'de' ? 'Was ist enthalten?' : 'What’s included?'}</h2>
        <ul className="list-disc space-y-1 pl-5 text-gray-700">
          <li>{locale === 'de' ? 'Individuelles Konzept und Storyboard' : 'Individual concept and storyboard'}</li>
          <li>{locale === 'de' ? 'Professionelles Equipment' : 'Professional equipment'}</li>
          <li>{locale === 'de' ? 'Schnitt und Nachbearbeitung' : 'Editing and post production'}</li>
          <li>{locale === 'de' ? 'Optimierte Dateien für Web & Social' : 'Optimised files for web & social'}</li>
        </ul>
      </section>
      {/* FAQ */}
      <section>
        <h2 className="mb-4 text-2xl font-bold text-brand">FAQ</h2>
        <Accordion items={faqs} />
      </section>
    </div>
  );
}