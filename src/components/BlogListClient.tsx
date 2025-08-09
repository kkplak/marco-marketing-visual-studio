"use client";
import { useState, useMemo } from 'react';
import { BlogCard, BlogPostMeta } from '@/components/BlogCard';
import { Input } from '@/components/ui/input';

export function BlogListClient({ posts, locale }: { posts: BlogPostMeta[]; locale: string }) {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const q = query.toLowerCase();
      return (
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        (post.tags || []).some((tag) => tag.toLowerCase().includes(q))
      );
    });
  }, [posts, query]);
  return (
    <div className="space-y-6">
      <Input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={locale === 'de' ? 'Suche Artikel…' : 'Search articles…'}
        className="max-w-sm"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <BlogCard key={post.slug} post={post} locale={locale} />
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-gray-600">{locale === 'de' ? 'Keine Artikel gefunden.' : 'No articles found.'}</p>
        )}
      </div>
    </div>
  );
}