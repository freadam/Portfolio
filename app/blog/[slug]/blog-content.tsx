'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface BlogContentProps {
  content: string
}

export function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none
      prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
      prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
      prose-p:leading-relaxed prose-p:text-muted-foreground
      prose-a:text-primary prose-a:underline hover:prose-a:text-primary/80
      prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-blockquote:bg-primary/5 prose-blockquote:px-4 prose-blockquote:py-1 prose-blockquote:rounded-r-md
      prose-strong:text-foreground
      prose-li:text-muted-foreground
      prose-img:rounded-lg prose-img:shadow-md
      prose-pre:p-0 prose-pre:bg-transparent prose-pre:m-0
    ">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ node, ...props }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img {...props} alt={props.alt || ''} className="rounded-lg shadow-md max-w-full" loading="lazy" />
          ),
          a: ({ node, children, ...props }) => {
            const href = props.href || ''
            // Check if link points to a video file
            if (/\.(mp4|webm|ogg)(\?|$)/i.test(href)) {
              return (
                <div className="relative border border-border/50 rounded-lg overflow-hidden my-8 group bg-black">
                   <video src={href} controls className="w-full" preload="metadata">
                     Your browser does not support the video tag.
                   </video>
                   {/* Centered play button overlay for custom aesthetic (if not playing) */}
                   <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:bg-black/10 transition-colors">
                      <div className="h-12 w-16 bg-background/80 border border-primary text-primary flex items-center justify-center rounded-sm opacity-80 shadow-lg">
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3"/></svg>
                      </div>
                   </div>
                </div>
              )
            }
            return (
              <a {...props} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                {children}
              </a>
            )
          },
          pre: ({ node, children, ...props }) => {
            return <div className="not-prose my-8">{children}</div>
          },
          code: ({ node, className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || '')
            const inline = !match;
            const lang = match && match[1] ? match[1] : 'text'
            
            if (!inline) {
              return (
                <div className="rounded-md border border-border/50 overflow-hidden bg-background">
                  <div className="flex items-center justify-between px-4 py-2 bg-muted/30 border-b border-border/50">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">{lang}</span>
                    <button className="text-muted-foreground hover:text-primary transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                    </button>
                  </div>
                  <div className="p-4 bg-black/40 overflow-x-auto">
                    <code className="text-xs font-mono text-muted-foreground leading-loose" {...props}>
                      {children}
                    </code>
                  </div>
                </div>
              )
            }
            return (
              <code className="bg-primary/10 text-primary border border-primary/20 px-1.5 py-0.5 rounded text-[0.8em] font-mono mx-1" {...props}>
                {children}
              </code>
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
