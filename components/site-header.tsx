'use client'

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  
  const isBlog = pathname?.startsWith('/blog')
  const isPortfolio = !isBlog

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        
        {/* Left: Branding & Links */}
        <div className="flex items-center md:gap-8">
          <Link href="/" className="flex items-center mr-4">
            <span className="font-mono font-bold text-primary tracking-widest text-lg">ENGINE_CORE</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link 
              href="/" 
              className={`transition-colors hover:text-foreground/80 ${isPortfolio ? 'text-foreground border-b-2 border-primary py-1' : 'text-foreground/60'}`}
            >
              Portfolio
            </Link>
            <Link 
              href="/blog" 
              className={`transition-colors hover:text-foreground/80 ${isBlog ? 'text-foreground border-b-2 border-primary py-1' : 'text-foreground/60'}`}
            >
              Blog
            </Link>
          </nav>
        </div>

        {/* Right: Hire Me Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link href="mailto:freadamabebe@gmail.com" className="hidden md:block">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono font-bold rounded-sm h-9 px-6 text-xs tracking-wider">
              Hire Me
            </Button>
          </Link>

          <Button 
            variant="ghost" 
            onClick={() => setIsOpen(!isOpen)} 
            className="block md:hidden border-none px-2"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 flex flex-col bg-background border-b p-4 space-y-4 md:hidden">
          <Link 
            href="/" 
            className={`text-sm font-medium ${isPortfolio ? 'text-primary' : 'text-foreground/60'}`}
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <Link 
            href="/blog" 
            className={`text-sm font-medium ${isBlog ? 'text-primary' : 'text-foreground/60'}`}
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link href="mailto:freadamabebe@gmail.com" onClick={() => setIsOpen(false)}>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-mono font-bold rounded-sm tracking-wider">
              Hire Me
            </Button>
          </Link>
        </div>
      )}
    </header>
  )
}
