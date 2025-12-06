import { useParams, Navigate } from 'react-router-dom';
import { getBlogPostBySlug } from '@/data/blogPosts';
import { BlogContent } from '@/components/blog/BlogContent';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const blogPost = getBlogPostBySlug(slug);

  if (!blogPost) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The blog post you're looking for doesn't exist.
          </p>
          <a
            href="/blog"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Back to Blog
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <BlogContent post={blogPost} />
    </div>
  );
}
