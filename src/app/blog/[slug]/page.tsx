import Image from 'next/image';
import { PortableText, urlFor } from '@/lib/sanity';
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

  return (
    <article className="space-y-10 py-20">
      <p className="uppercase">{post.category}</p>
      <div className="space-y-2">
        <h2 className="text-title">{post.title}</h2>
        <p className="text-muted">{post.description}</p>

        <div className="flex items-center gap-2 text-sm text-faint">
          <p>{new Date(post._createdAt).toLocaleDateString('en-US')}</p>
          <span className="h-4 w-px bg-line" aria-hidden="true" />
          <p>{post.time} min read</p>
        </div>
      </div>



      {post.image && (
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-line">
          <Image
            src={urlFor(post.image).width(1600).height(900).fit('crop').url()}
            alt={post.image.alt ?? post.title}
            fill
            unoptimized
            className="object-cover"
          />
        </div>
      )}

      <PortableText value={post.content} />
    </article>
  );
}
