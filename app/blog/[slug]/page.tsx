import Link from "next/link"
import { ArrowLeft, Calendar } from "lucide-react"
import { notFound } from "next/navigation"
import { getAllPosts, getPostBySlug } from "@/lib/blog"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { BlogContent } from "./blog-content"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Post Not Found" }
  return {
    title: `${post.title} — Freadam Abebe`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block text-sm font-bold sm:text-base md:text-lg">Freadam Abebe</span>
            </Link>
          </div>
          <MainNav />
        </div>
      </header>

      <main className="container py-10">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <Link href="/blog">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>

          <article>
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <time className="text-sm text-muted-foreground">{post.date}</time>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter mb-4 md:text-5xl">
                {post.title}
              </h1>
              {post.excerpt && (
                <p className="text-xl text-muted-foreground">{post.excerpt}</p>
              )}
            </div>

            {post.coverVideo && (
              <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
                <video
                  src={post.coverVideo}
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {post.coverImage && !post.coverVideo && (
              <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <BlogContent content={post.content} />
          </article>
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Freadam Abebe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
