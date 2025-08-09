import { getBlogPosts } from '@/lib/content';
import { BlogListClient } from '@/components/BlogListClient';

export default async function BlogPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const posts = await getBlogPosts();
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-brand">{locale === 'de' ? 'Blog & Insights' : 'Blog & Insights'}</h1>
      <BlogListClient posts={posts as any} locale={locale} />
    </div>
  );
}