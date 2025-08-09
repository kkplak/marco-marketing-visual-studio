import { getServices, getCaseStudies } from '@/lib/content';
import { getDictionary } from '@/lib/useTranslation';
import { Hero } from '@/components/Hero';
import { ServiceCard } from '@/components/ServiceCard';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { ClientLogoStrip } from '@/components/ClientLogoStrip';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { LeadCapture } from '@/components/LeadCapture';

// Generate page metadata for SEO and social sharing
export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const title = `${dict.brandName} – ${dict.tagline}`;
  const description = locale === 'de'
    ? 'Visual‑Content & Micro‑Marketing für Unternehmen aus der Schweiz. Professionelle Fotografie, Videos und Microsites aus einer Hand.'
    : 'Visual content & micro marketing for Swiss businesses. Professional photography, videos and micro sites from a single source.';
  const url = `https://www.marco-marketing.ch/${locale}`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png']
    }
  };
}

export default async function HomePage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const services = await getServices();
  const cases = await getCaseStudies();
  const dict = getDictionary(locale);

  return (
    <div className="space-y-16">
      {/* Hero */}
      <Hero locale={locale} />
      {/* Services overview */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-brand">{locale === 'de' ? 'Unsere Leistungen' : 'Our Services'}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service: any) => (
            <ServiceCard key={service.slug} service={service} locale={locale} />
          ))}
        </div>
      </section>
      {/* Featured case studies slider */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-brand">{locale === 'de' ? 'Erfolgsstories' : 'Success Stories'}</h2>
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4" style={{ scrollSnapType: 'x mandatory' }}>
            {cases.slice(0, 3).map((cs: any) => (
              <div key={cs.slug} className="min-w-[250px] max-w-xs flex-shrink-0" style={{ scrollSnapAlign: 'start' }}>
                <CaseStudyCard caseStudy={cs} locale={locale} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Client logos */}
      <ClientLogoStrip />
      {/* Testimonials */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-brand">{locale === 'de' ? 'Kundenstimmen' : 'Testimonials'}</h2>
        <TestimonialCarousel />
      </section>
      {/* Lead capture */}
      <LeadCapture locale={locale} />
    </div>
  );
}