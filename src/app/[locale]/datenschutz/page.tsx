export default function Datenschutz({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const isDe = locale === 'de';
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-brand">{isDe ? 'Datenschutz' : 'Privacy'}</h1>
      <p className="text-sm text-gray-700">
        {isDe
          ? 'Wir halten uns an das schweizerische Datenschutzgesetz (DSG/FADP) und gehen sorgfältig mit Ihren Daten um. Ihre Angaben werden ausschliesslich zur Bearbeitung Ihrer Anfrage verwendet.'
          : 'We comply with the Swiss Federal Act on Data Protection (FADP) and handle your data carefully. Your details are used solely to process your enquiry.'}
      </p>
      <p className="text-sm text-gray-700">
        {isDe
          ? 'Mit der Nutzung dieser Website erklären Sie sich mit der Erhebung, Verarbeitung und Nutzung von Daten gemäss der nachfolgenden Beschreibung einverstanden.'
          : 'By using this website you agree to the collection, processing and use of data as described below.'}
      </p>
      <p className="text-sm text-gray-700">
        {isDe
          ? 'Weitere Informationen über Ihre Rechte finden Sie in unserer vollständigen Datenschutzerklärung (Platzhalter).'
          : 'Further information about your rights can be found in our full privacy policy (placeholder).'}
      </p>
    </div>
  );
}