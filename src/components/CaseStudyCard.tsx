import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

export interface CaseStudyMeta {
  title: string;
  slug: string;
  coverImage: string;
  date: string;
  metrics?: Record<string, any>;
  industries?: string[];
}

export function CaseStudyCard({ caseStudy, locale }: { caseStudy: CaseStudyMeta; locale: string }) {
  return (
    <Link href={`/${locale}/portfolio/${caseStudy.slug}`} className="block">
      <Card className="p-0 overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative aspect-video w-full">
          <Image src={caseStudy.coverImage} alt={caseStudy.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
        <div className="p-4">
          <h3 className="mb-1 text-lg font-semibold text-brand">{caseStudy.title}</h3>
          {caseStudy.industries && (
            <p className="mb-1 text-xs uppercase tracking-wide text-gray-500">{caseStudy.industries.join(', ')}</p>
          )}
          <p className="text-xs text-gray-400">{new Date(caseStudy.date).toLocaleDateString(locale === 'de' ? 'de-CH' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
        </div>
      </Card>
    </Link>
  );
}