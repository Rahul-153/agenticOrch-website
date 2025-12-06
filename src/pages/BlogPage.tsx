import { useState, useMemo } from 'react';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { BlogCard } from '@/components/blog/BlogCard';
import { getBlogPostsByCategory, type BlogPost } from '@/data/blogPosts';

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter posts based on category and search
  const filteredPosts = useMemo(() => {
    let posts = getBlogPostsByCategory(selectedCategory);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(
        (post: BlogPost) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags.some((tag: string) => tag.toLowerCase().includes(query))
      );
    }

    return posts;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      {/* Blog Header */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <BlogHeader
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          {/* Results Count */}
          <div className="text-center mb-8 text-muted-foreground">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
          </div>

          {/* Blog Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post: BlogPost) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
