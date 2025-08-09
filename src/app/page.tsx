/**
 * Root page for the application. Instead of automatically redirecting
 * visitors to the default locale, we display a simple language
 * selection screen. This avoids redirect loops and allows users to
 * explicitly choose their preferred language. Links point to the
 * `[locale]` dynamic route for each supported locale.
 */
import Link from 'next/link';

export default function LanguageSelectionPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-brand">Marco Marketing Visual Studio</h1>
      <p className="text-lg text-gray-700">Bitte wählen Sie Ihre Sprache / Please select your language</p>
      <div className="flex gap-6">
        <Link href="/de" className="rounded-md bg-brand-accent px-6 py-3 text-lg font-semibold text-white hover:bg-orange-500">
          Deutsch
        </Link>
        <Link href="/en" className="rounded-md bg-brand-accent px-6 py-3 text-lg font-semibold text-white hover:bg-orange-500">
          English
        </Link>
      </div>
    </div>
  );
}