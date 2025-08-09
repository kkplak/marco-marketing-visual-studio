import { notFound } from 'next/navigation';
import { getCaseStudyBySlug } from '@/lib/content';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default async function CaseStudyPage({
  params
}: {
  params: { locale: string; slug: string };
}) {
  const { locale, slug } = params;
  let caseData;
  try {
    caseData = await getCaseStudyBySlug(slug);
  } catch (err) {
    notFound();
  }
  if (!caseData) notFound();
  // Cast the case study data to any. The MDX frontmatter is untyped so
  // TypeScript cannot infer fields like coverImage or title without a
  // manual type. Using `any` suppresses type errors during build.
  const { metadata, content } = caseData as any;
  return (
    <div className="space-y-8">
      <div className="relative aspect-video w-full overflow-hidden rounded-md">
        <Image
          src={metadata.coverImage}
          alt={metadata.title}
          fill
          className="object-cover"
        />
      </div>
      <h1 className="text-3xl font-bold text-brand">{metadata.title}</h1>
      {metadata.industries && (
        <p className="uppercase text-xs tracking-wider text-gray-500">
          {metadata.industries.join(', ')}
        </p>
      )}
      {/* Metrics */}
      {metadata.metrics && (
        <div className="grid grid-cols-2 gap-4 max-w-sm text-center">
          {Object.entries((metadata as any).metrics).map(([key, value]) => (
            <div key={key} className="rounded-md bg-brand-accent/10 p-4">
              <p className="text-2xl font-bold text-brand">{String(value)}</p>
              <p className="text-xs uppercase text-gray-600">{key}</p>
            </div>
          ))}
        </div>
      )}
      <article
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div>
        <Button variant="primary" onClick={undefined}>
          {locale === 'de'
            ? 'Kostenloses Erstgespräch'
            : 'Book a free intro call'}
        </Button>
      </div>
    </div>
  );
}
