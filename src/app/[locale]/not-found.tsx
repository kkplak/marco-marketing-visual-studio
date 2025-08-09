import Link from 'next/link';

export default function NotFound({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const isDe = locale === 'de';
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <h1 className="text-5xl font-bold text-brand">404</h1>
      <p className="mt-4 text-lg text-gray-700">{isDe ? 'Seite nicht gefunden' : 'Page not found'}</p>
      <Link href={`/${locale}`} className="mt-6 rounded-md bg-brand-accent px-4 py-2 text-white hover:bg-orange-500">
        {isDe ? 'Zur Startseite' : 'Back to home'}
      </Link>
    </div>
  );
}