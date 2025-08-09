import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export interface PricingTier {
  name: string;
  price: number;
  description: string;
  features: string[];
}

export function PricingCard({ tier, locale }: { tier: PricingTier; locale: string }) {
  return (
    <Card className="flex h-full flex-col justify-between border-gray-300 p-6">
      <div>
        <h3 className="mb-2 text-xl font-semibold text-brand">{tier.name}</h3>
        <p className="mb-4 text-sm text-gray-600">{tier.description}</p>
        <ul className="mb-4 list-disc space-y-1 pl-4 text-sm text-gray-700">
          {tier.features.map((feat, idx) => (
            <li key={idx}>{feat}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4 flex items-baseline justify-between">
        <span className="text-2xl font-bold text-brand">CHF {tier.price.toLocaleString('de-CH')}</span>
        <Button variant="primary">{locale === 'de' ? 'Buchen' : 'Book'}</Button>
      </div>
    </Card>
  );
}