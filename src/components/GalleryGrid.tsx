"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Dialog } from '@/components/ui/dialog';

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  alt: string;
}

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<GalleryItem | null>(null);
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative cursor-pointer overflow-hidden rounded-md"
            onClick={() => setActive(item)}
          >
            {item.type === 'image' ? (
              <Image src={item.src} alt={item.alt} width={400} height={300} className="h-full w-full object-cover transition-transform hover:scale-105" />
            ) : (
              <div className="relative h-0 overflow-hidden pt-[56.25%]">
                <video src={item.src} className="absolute inset-0 h-full w-full rounded-md object-cover" muted loop playsInline></video>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Lightbox */}
      <Dialog
        isOpen={active !== null}
        onClose={() => setActive(null)}
      >
        {active && (
          <div>
            {active.type === 'image' ? (
              <Image src={active.src} alt={active.alt} width={800} height={600} className="mx-auto max-h-[80vh] w-auto rounded-md" />
            ) : (
              <video src={active.src} controls autoPlay className="mx-auto max-h-[80vh] w-auto rounded-md" />
            )}
            <p className="mt-2 text-center text-sm text-gray-600">{active.alt}</p>
          </div>
        )}
      </Dialog>
    </div>
  );
}