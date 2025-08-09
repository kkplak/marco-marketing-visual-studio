import Image from 'next/image';

// Array of client logo image sources. These images are stored in
// public/clients/. You can replace them with your own client logos.
const logos = [
  '/clients/client1.png',
  '/clients/client2.png',
  '/clients/client3.png',
  '/clients/client4.png'
];

export function ClientLogoStrip() {
  return (
    <div className="mx-auto my-8 flex max-w-5xl flex-wrap items-center justify-center gap-6 opacity-75">
      {logos.map((src, i) => (
        <Image key={i} src={src} alt={`Client ${i + 1}`} width={120} height={60} className="object-contain grayscale" />
      ))}
    </div>
  );
}