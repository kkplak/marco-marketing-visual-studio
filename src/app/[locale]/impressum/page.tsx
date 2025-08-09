export default function Impressum({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const isDe = locale === 'de';
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-brand">{isDe ? 'Impressum' : 'Impressum'}</h1>
      <p className="text-sm text-gray-700">
        {isDe
          ? 'Marco Marketing Visual Studio\nBachstrasse 12\n4600 Olten\nSchweiz\ninfo@marco-marketing.ch'
          : 'Marco Marketing Visual Studio\nBachstrasse 12\n4600 Olten\nSwitzerland\ninfo@marco-marketing.ch'}
      </p>
      <p className="text-sm text-gray-700">
        {isDe
          ? 'Verantwortlich für den Inhalt dieser Website ist Marco Marketing Visual Studio. Alle Rechte vorbehalten.'
          : 'Marco Marketing Visual Studio is responsible for the content of this website. All rights reserved.'}
      </p>
    </div>
  );
}