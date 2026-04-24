'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface BlogContentProps {
  content: string
}

export function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none
      prose-headings:font-bold prose-headings:tracking-tight
      prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
      prose-p:leading-7 prose-p:text-muted-foreground
      prose-a:text-primary prose-a:underline hover:prose-a:text-primary/80
      prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground
      prose-strong:text-foreground
      prose-li:text-muted-foreground
      prose-img:rounded-lg prose-img:shadow-md
      prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
      prose-pre:bg-muted prose-pre:border
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
                <video src={href} controls className="rounded-lg w-full my-4">
                  Your browser does not support the video tag.
                </video>
              )
            }
            return (
              <a {...props} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                {children}
              </a>
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
