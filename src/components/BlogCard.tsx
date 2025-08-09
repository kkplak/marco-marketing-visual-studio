import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

export interface BlogPostMeta {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  coverImage: string;
  tags?: string[];
  readingTime: string;
}

export function BlogCard({ post, locale }: { post: BlogPostMeta; locale: string }) {
  return (
    <Link href={`/${locale}/blog/${post.slug}`} className="block">
      <Card className="p-0 overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative aspect-video w-full">
          <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
        </div>
        <div className="p-4">
          <h3 className="mb-1 text-lg font-semibold text-brand">{post.title}</h3>
          <p className="mb-2 text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{new Date(post.date).toLocaleDateString(locale === 'de' ? 'de-CH' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}