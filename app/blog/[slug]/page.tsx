import Link from "next/link"
import { ArrowLeft, Calendar } from "lucide-react"
import { notFound } from "next/navigation"
import { getAllPosts, getPostBySlug } from "@/lib/blog"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
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
      <SiteHeader />

      <main className="container py-10 relative">
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Column */}
          <article className="lg:col-span-8">
            <div className="mb-10">
              {post.tags && post.tags.length > 0 && (
                 <div className="flex gap-2 mb-6">
                    {post.tags.map((t) => (
                      <span key={t} className="text-[10px] uppercase font-mono tracking-widest px-2 py-1 border border-[#b2ff05] text-[#b2ff05] bg-[#b2ff05]/5">
                        {t}
                      </span>
                    ))}
                 </div>
              )}
              <h1 className="text-4xl font-bold tracking-tighter mb-6 md:text-5xl lg:text-6xl text-foreground">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-6 text-xs font-mono tracking-widest text-muted-foreground mb-8">
                <div>{post.date}</div>
                <div className="h-1 w-1 bg-muted-foreground rounded-full"></div>
                <div>12 MIN READ</div>
              </div>
              
              {post.excerpt && (
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">{post.excerpt}</p>
              )}
            </div>

            {post.coverVideo && (
              <div className="aspect-video w-full overflow-hidden mb-12 border border-border/50">
                <video
                  src={post.coverVideo}
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {post.coverImage && !post.coverVideo && (
              <div className="aspect-video w-full overflow-hidden mb-12 border border-border/50">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <BlogContent content={post.content} />
          </article>

          {/* Right Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
             {/* Transmissions Widget */}
             <Card className="border-border/30 bg-card/20 p-6">
                <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-2">
                   <div className="h-2 w-2 rounded-none bg-primary"></div>
                   Transmissions
                </h3>
                <div className="space-y-6">
                   {/* Mock Transmission 1 */}
                   <div className="flex gap-4 group cursor-pointer">
                      <div className="h-14 w-14 bg-muted/20 border border-border/40 shrink-0 flex items-center justify-center">
                         <span className="text-[8px] font-mono text-muted-foreground/30">IMG</span>
                      </div>
                      <div>
                         <div className="text-[10px] font-mono text-muted-foreground mb-1">Oct 12, 2024</div>
                         <h4 className="text-sm font-semibold tracking-tight leading-tight group-hover:text-primary transition-colors">Implementing a Data-Driven Entity Component System</h4>
                      </div>
                   </div>
                   {/* Mock Transmission 2 */}
                   <div className="flex gap-4 group cursor-pointer">
                      <div className="h-14 w-14 bg-muted/20 border border-border/40 shrink-0 flex items-center justify-center">
                         <span className="text-[8px] font-mono text-muted-foreground/30">IMG</span>
                      </div>
                      <div>
                         <div className="text-[10px] font-mono text-muted-foreground mb-1">Sep 28, 2024</div>
                         <h4 className="text-sm font-semibold tracking-tight leading-tight group-hover:text-primary transition-colors">Memory Management: Custom Allocators in C++</h4>
                      </div>
                   </div>
                </div>
             </Card>

             {/* Initialize Connection Widget */}
             <Card className="border-primary/20 bg-primary/5 p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                <h3 className="text-lg font-bold tracking-tight mb-2 text-foreground">Initialize Connection</h3>
                <p className="text-sm text-muted-foreground mb-6">Get notified when new tech deep-dives drop into the databanks.</p>
                <div className="flex gap-2">
                   <Input placeholder="ENTER_EMAIL" className="font-mono text-xs bg-background/50 border-border/50 h-9" />
                   <Button className="h-9 font-mono text-xs font-bold tracking-widest bg-primary/20 text-primary border border-primary/30 hover:bg-primary hover:text-black">SYNC</Button>
                </div>
             </Card>
          </aside>
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
