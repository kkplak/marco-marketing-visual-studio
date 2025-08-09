import { ContactForm } from '@/components/ContactForm';
import { BookingWidget } from '@/components/BookingWidget';

export default function ContactPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-brand mb-4">{locale === 'de' ? 'Kontakt' : 'Contact'}</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <ContactForm locale={locale} />
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-brand">{locale === 'de' ? 'Termin buchen' : 'Book a meeting'}</h2>
          <BookingWidget url={calendlyUrl} />
        </div>
      </div>
    </div>
  );
}