import { ArticleCard } from '@/components/ArticleCard';
import { loadBlogPostCards } from '@/lib/sanity/loadData';

export default async function BlogPage() {
  const blogPosts = await loadBlogPostCards();

  return (
    <main className="mt-6 w-full min-w-0 space-y-6 pb-20 lg:pb-60">
      <h1 className="text-title xs:text-heading font-bold tracking-tight">Blog</h1>
      {blogPosts.length === 0 ? (
        <p className="w-full text-center text-3xl font-medium text-muted">No posts yet</p>
      ) : (
        <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-10">
          {blogPosts.map((blogPost) => (
            <ArticleCard
              key={blogPost._id}
              image={blogPost.image}
              title={blogPost.title}
              description={blogPost.description}
              category={blogPost.category}
              timeToRead={`${blogPost.time} minutes`}
              date={new Date(blogPost._createdAt)}
              href={`/blog/${blogPost.slug.current}`}
            />
          ))}
        </div>
      )}
    </main>
  );
}
