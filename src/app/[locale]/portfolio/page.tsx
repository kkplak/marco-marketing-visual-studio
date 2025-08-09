import { Tabs } from '@/components/ui/tabs';
import { GalleryGrid, type GalleryItem } from '@/components/GalleryGrid';

export default function PortfolioPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  // Define gallery items; in a real project these would be loaded from
  // the filesystem or a CMS. Images must exist in the public/portfolio folder.
  const photos: GalleryItem[] = [
    { id: 'photo1', type: 'image', src: '/portfolio/photo1.jpg', alt: 'Studio portrait' },
    { id: 'photo2', type: 'image', src: '/portfolio/photo2.jpg', alt: 'Product shot' },
    { id: 'photo3', type: 'image', src: '/portfolio/photo3.jpg', alt: 'Event photography' },
    { id: 'photo4', type: 'image', src: '/portfolio/photo4.jpg', alt: 'Lifestyle scene' }
  ];
  const videos: GalleryItem[] = [
    { id: 'video1', type: 'video', src: '/portfolio/video1.mp4', alt: 'Sample reel' }
  ];
  const web: GalleryItem[] = [
    { id: 'web1', type: 'image', src: '/portfolio/web1.jpg', alt: 'Landing page design' },
    { id: 'web2', type: 'image', src: '/portfolio/web2.jpg', alt: 'Micro site screenshot' }
  ];
  const tabs = [
    { id: 'photos', title: locale === 'de' ? 'Fotografie' : 'Photography', content: <GalleryGrid items={photos} /> },
    { id: 'videos', title: 'Video', content: <GalleryGrid items={videos} /> },
    { id: 'web', title: locale === 'de' ? 'Web' : 'Web', content: <GalleryGrid items={web} /> }
  ];
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-brand mb-4">{locale === 'de' ? 'Portfolio' : 'Portfolio'}</h1>
      <Tabs tabs={tabs} />
    </div>
  );
}