import { Link } from 'react-router-dom';
import type { BlogPost } from '@/data/blogPosts';
import { Calendar, Clock, Tag } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link to={`/blog/${post.slug}`} className="group">
      <article className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        {/* Image */}
        {post.imageUrl && (
          <div className="aspect-video overflow-hidden">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Category Badge */}
          <div className="mb-3">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
            {post.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {post.tags.slice(0, 3).map(tag => (
              <span key={tag} className="flex items-center gap-1 text-xs text-muted-foreground">
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
