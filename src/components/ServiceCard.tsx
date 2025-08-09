import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export interface ServiceItem {
  slug: string;
  title_de: string;
  title_en: string;
  summary_de: string;
  summary_en: string;
  features: string[];
  priceCHF: number;
  duration: string;
  ctaText_de: string;
  ctaText_en: string;
}

export function ServiceCard({
  service,
  locale
}: {
  service: ServiceItem;
  locale: string;
}) {
  const title = locale === 'en' ? service.title_en : service.title_de;
  const summary = locale === 'en' ? service.summary_en : service.summary_de;
  const ctaText = locale === 'en' ? service.ctaText_en : service.ctaText_de;
  return (
    <Card className="flex flex-col h-full justify-between">
      <div>
        <h3 className="mb-2 text-xl font-semibold text-brand">{title}</h3>
        <p className="mb-4 text-sm text-gray-600">{summary}</p>
        <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-gray-700">
          {service.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
        <p className="mt-2 text-lg font-bold text-brand">
          CHF {service.priceCHF.toLocaleString('de-CH')}
        </p>
        <p className="text-sm text-gray-500">{service.duration}</p>
      </div>
      <div className="mt-4">
        <Button variant="primary" onClick={undefined}>
          {ctaText}
        </Button>
      </div>
    </Card>
  );
}
