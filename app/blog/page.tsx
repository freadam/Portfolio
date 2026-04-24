import Link from "next/link"
import { ArrowLeft, Calendar } from "lucide-react"
import { getAllPosts } from "@/lib/blog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Blog — Freadam Abebe",
  description: "Game development blog by Freadam Abebe. Dev logs, design deep dives, and tutorials.",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container py-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Portfolio
              </Button>
            </Link>
          </div>

          <h1 className="text-4xl font-bold tracking-tighter mb-2 md:text-5xl">Blog</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Thoughts on game development, design, and everything in between.
          </p>

          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No posts yet. Stay tuned!</p>
            </div>
          ) : (
            <div className="grid gap-6">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <Card className="overflow-hidden transition-all hover:shadow-lg hover:border-primary/20">
                    <div className="flex flex-col md:flex-row">
                      {post.coverImage && (
                        <div className="md:w-64 aspect-video md:aspect-square overflow-hidden shrink-0">
                          <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-1">
                            <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{post.date}</span>
                          </div>
                          <CardTitle className="group-hover:text-primary transition-colors">
                            {post.title}
                          </CardTitle>
                          {post.excerpt && (
                            <CardDescription className="text-base mt-1">
                              {post.excerpt}
                            </CardDescription>
                          )}
                        </CardHeader>
                        <CardContent>
                          <span className="text-sm text-primary font-medium group-hover:underline">
                            Read more →
                          </span>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-xs font-mono text-muted-foreground md:text-left">
            © 2024 ENGINE_CORE. ALL SYSTEMS OPERATIONAL.
          </p>
          <div className="flex items-center gap-6 text-xs font-mono tracking-widest text-muted-foreground">
            <Link href="https://github.com/freadam" className="hover:text-primary transition-colors uppercase">
              Github
            </Link>
            <Link href="#" className="hover:text-primary transition-colors uppercase">
              LinkedIn
            </Link>
            <Link href="#" className="hover:text-primary transition-colors uppercase">
              ArtStation
            </Link>
            <Link href="mailto:freadamabebe@gmail.com" className="hover:text-primary transition-colors uppercase">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
