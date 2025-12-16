import type { BlogPost } from '@/data/blogPosts';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

interface BlogContentProps {
  post: BlogPost;
}

export function BlogContent({ post }: BlogContentProps) {
  const navigate = useNavigate();
  return (
    <article className="max-w-4xl mx-auto">
      {/* Back Button */}
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Blog
      </Link>

      {/* Header */}
      <header className="mb-8">
        {/* Category */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-sm font-semibold bg-primary/10 text-primary rounded-full">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <span className="font-medium text-foreground">{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map(tag => (
            <span key={tag} className="flex items-center gap-1 px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>

        {/* Featured Image */}
        {post.imageUrl && (
          <div className="aspect-video overflow-hidden rounded-lg mb-8">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </header>

      {/* Content */}
      <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
        <ReactMarkdown
          components={{
            h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
            h2: ({ children }) => <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>,
            h3: ({ children }) => <h3 className="text-xl font-bold mt-4 mb-2">{children}</h3>,
            p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
            ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
            ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
            li: ({ children }) => <li className="leading-relaxed">{children}</li>,
            code: ({ className, children }) => {
              const isBlock = className?.includes('language-');
              return isBlock ? (
                <code className="block bg-primary/10 p-4 rounded-lg overflow-x-auto text-sm mb-4">
                  {children}
                </code>
              ) : (
                <code className="bg-primary/10 px-1.5 py-0.5 rounded text-sm">{children}</code>
              );
            },
            a: ({ href, children }) => {
              // Check if it's an internal link to contact
              if (href === '/contact' || href === '#contact') {
                return (
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/');
                      setTimeout(() => {
                        const element = document.querySelector('#contact');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }, 300);
                    }}
                    className="text-primary hover:underline cursor-pointer"
                  >
                    {children}
                  </a>
                );
              }
              return (
                <a href={href} className="text-primary hover:underline" target={href?.startsWith('http') ? '_blank' : undefined} rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  {children}
                </a>
              );
            },
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>

      {/* CTA */}
      <div className="mt-12 p-8 bg-primary/10 rounded-lg border border-primary/20">
        <h3 className="text-2xl font-bold mb-2">Ready to Build Your Orchestration System?</h3>
        <p className="text-muted-foreground mb-4">
          Let's discuss how we can help you implement LangChain, Google ADK, or MCP solutions.
        </p>
        <button
          onClick={() => {
            navigate('/');
            setTimeout(() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }, 300);
          }}
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors cursor-pointer"
        >
          Get in Touch
        </button>
      </div>
    </article>
  );
}
