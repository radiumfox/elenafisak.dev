import { loadBlogPost } from '@/lib/sanity/loadData';

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await loadBlogPost(slug);

  if (!post) {
    return <p>Not found</p>;
  }

  return <h1>{post.title}</h1>;
}
