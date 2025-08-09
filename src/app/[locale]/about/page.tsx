export default function AboutPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const isDe = locale === 'de';
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-brand">{isDe ? 'Über uns' : 'About'}</h1>
      <section>
        <h2 className="mb-2 text-2xl font-semibold text-brand">{isDe ? 'Bio' : 'Bio'}</h2>
        <p className="text-gray-700">
          {isDe
            ? 'Marco ist ein leidenschaftlicher Fotograf und Mediengestalter aus Olten. Mit über zehn Jahren Erfahrung bringt er Marken zum Strahlen.'
            : 'Marco is a passionate photographer and media creator based in Olten. With over ten years of experience he makes brands shine.'}
        </p>
      </section>
      <section>
        <h2 className="mb-2 text-2xl font-semibold text-brand">{isDe ? 'Unsere Werte' : 'Our Values'}</h2>
        <ul className="list-disc space-y-1 pl-5 text-gray-700">
          <li>{isDe ? 'Klarheit' : 'Clarity'}</li>
          <li>{isDe ? 'Ästhetik' : 'Aesthetics'}</li>
          <li>{isDe ? 'Wirkung' : 'Impact'}</li>
        </ul>
      </section>
      <section>
        <h2 className="mb-2 text-2xl font-semibold text-brand">{isDe ? 'Unser Prozess' : 'Our Process'}</h2>
        <ol className="list-decimal space-y-2 pl-5 text-gray-700">
          <li>{isDe ? 'Analyse & Konzeption' : 'Analysis & concept'}</li>
          <li>{isDe ? 'Produktion & Umsetzung' : 'Production & execution'}</li>
          <li>{isDe ? 'Optimierung & Betreuung' : 'Optimisation & support'}</li>
        </ol>
      </section>
      <section>
        <h2 className="mb-2 text-2xl font-semibold text-brand">{isDe ? 'Ausrüstung' : 'Gear'}</h2>
        <p className="text-gray-700">
          {isDe
            ? 'Wir arbeiten mit moderner Kamera‑, Licht- und Tontechnik, um maximale Qualität sicherzustellen.'
            : 'We work with modern camera, lighting and audio equipment to ensure maximum quality.'}
        </p>
      </section>
      <section>
        <h2 className="mb-2 text-2xl font-semibold text-brand">{isDe ? 'Presse' : 'Press'}</h2>
        <p className="text-gray-700">
          {isDe
            ? 'Unsere Arbeiten wurden in diversen Fachmagazinen und Blogs vorgestellt.'
            : 'Our work has been featured in various trade magazines and blogs.'}
        </p>
      </section>
      <div>
        <a
          href={`/${locale}/contact`}
          className="inline-flex items-center rounded-md bg-brand-accent px-4 py-2 text-white hover:bg-orange-500"
        >
          {isDe ? 'Kostenloses Erstgespräch' : 'Free Intro Call'}
        </a>
      </div>
    </div>
  );
}