import { notFound } from 'next/navigation';
import { getPostBySlug, getBlogPosts } from '@/lib/content';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default async function BlogPostPage({ params }: { params: { locale: string; slug: string } }) {
  const { locale, slug } = params;
  let post;
  try {
    post = await getPostBySlug(slug);
  } catch (err) {
    notFound();
  }
  if (!post) notFound();
  // Cast metadata to any to avoid type errors from untyped MDX frontmatter.
  const { metadata, content } = post as any;
  // Determine next/prev posts based on sorted dates
  const allPosts = await getBlogPosts();
  const index = allPosts.findIndex((p: any) => p.slug === slug);
  // Cast prev/next posts to any so that TypeScript does not complain about
  // missing frontmatter fields such as `title`. The content functions
  // return untyped objects merged from MDX frontmatter.
  const prev: any = index > 0 ? allPosts[index - 1] : null;
  const next: any = index < allPosts.length - 1 ? allPosts[index + 1] : null;
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-brand">{metadata.title}</h1>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{new Date(metadata.date).toLocaleDateString(locale === 'de' ? 'de-CH' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        <span>{metadata.readingTime}</span>
      </div>
      {metadata.coverImage && (
        <div className="relative aspect-video w-full overflow-hidden rounded-md">
          <Image src={metadata.coverImage} alt={metadata.title} fill className="object-cover" />
        </div>
      )}
      <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
      {/* Share buttons */}
      <div className="flex space-x-4">
        <Button variant="secondary" onClick={() => {
          if (typeof navigator !== 'undefined' && navigator.share) {
            navigator.share({ title: metadata.title, url: window.location.href });
          } else {
            navigator.clipboard.writeText(window.location.href);
            alert(locale === 'de' ? 'Link kopiert!' : 'Link copied!');
          }
        }}>
          {locale === 'de' ? 'Teilen' : 'Share'}
        </Button>
      </div>
      {/* Prev/next navigation */}
      <nav className="flex justify-between border-t pt-4">
        {prev ? (
          <Link href={`/${locale}/blog/${prev.slug}`} className="text-sm text-brand hover:underline">
            ← {prev.title}
          </Link>
        ) : <span></span>}
        {next ? (
          <Link href={`/${locale}/blog/${next.slug}`} className="text-sm text-brand hover:underline">
            {next.title} →
          </Link>
        ) : <span></span>}
      </nav>
    </div>
  );
}