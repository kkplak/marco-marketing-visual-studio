import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { remark } from 'remark';
import html from 'remark-html';

const contentRoot = path.join(process.cwd(), 'content');

/**
 * Read and return the services definitions from the JSON file in
 * `content/services.json`. Each service includes information for both
 * German and English locales.
 */
export async function getServices() {
  const file = await fs.readFile(path.join(contentRoot, 'services.json'), 'utf-8');
  return JSON.parse(file);
}

/**
 * Read all MDX files from the given directory (cases or blog) and return
 * their frontmatter along with derived values such as slug and reading
 * time. Only metadata is returned here; content must be loaded separately
 * via getCaseStudyBySlug or getPostBySlug.
 */
async function getContentList(subDir: string) {
  const dir = path.join(contentRoot, subDir);
  const files = await fs.readdir(dir);
  const items = await Promise.all(
    files.filter((f) => f.endsWith('.mdx')).map(async (filename) => {
      const filePath = path.join(dir, filename);
      const file = await fs.readFile(filePath, 'utf-8');
      const { data, content } = matter(file);
      const slug = filename.replace(/\.mdx$/, '');
      // Compute reading time for blog posts only
      const time = readingTime(content).text;
      return {
        ...data,
        slug,
        readingTime: time
      };
    })
  );
  return items;
}

export async function getCaseStudies() {
  return getContentList('cases');
}

export async function getBlogPosts() {
  return getContentList('blog');
}

/**
 * Given a slug, read the corresponding MDX file from the cases directory
 * and return its frontmatter and compiled HTML content. The MDX is
 * converted to HTML on the server using remark; clients receive raw
 * HTML to render within a `<div dangerouslySetInnerHTML>`. For a
 * production system you might wish to convert MDX to React components
 * instead.
 */
export async function getCaseStudyBySlug(slug: string) {
  const filePath = path.join(contentRoot, 'cases', `${slug}.mdx`);
  const file = await fs.readFile(filePath, 'utf-8');
  const { data, content } = matter(file);
  const htmlContent = (await remark().use(html).process(content)).toString();
  return { metadata: { ...data, slug }, content: htmlContent };
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(contentRoot, 'blog', `${slug}.mdx`);
  const file = await fs.readFile(filePath, 'utf-8');
  const { data, content } = matter(file);
  const htmlContent = (await remark().use(html).process(content)).toString();
  const reading = readingTime(content).text;
  return { metadata: { ...data, slug, readingTime: reading }, content: htmlContent };
}