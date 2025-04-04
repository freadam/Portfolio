'use client'

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ResumeButton } from "@/components/resume-button"

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      {/* Mobile burger menu */}
      <Button 
        variant="ghost" 
        onClick={() => setIsOpen(!isOpen)} 
        className="block md:hidden"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
      
      {/* Mobile menu */}
      <div className={`${
        isOpen ? 'flex' : 'hidden'
      } absolute top-16 left-0 right-0 flex-col bg-background border-b p-4 space-y-3 md:hidden`}>
        <Link href="#about" className="px-3 py-2 text-sm font-medium hover:text-primary">
          About
        </Link>
        <Link href="#experience" className="px-3 py-2 text-sm font-medium hover:text-primary">
          Experience
        </Link>
        <Link href="#projects" className="px-3 py-2 text-sm font-medium hover:text-primary">
          Projects
        </Link>
        <Link href="#skills" className="px-3 py-2 text-sm font-medium hover:text-primary">
          Skills
        </Link>
        <Link href="#contact" className="px-3 py-2 text-sm font-medium hover:text-primary">
          Contact
        </Link>
        <ResumeButton />
      </div>

      {/* Desktop menu */}
      <nav className="hidden md:flex items-center space-x-4">
        <Link href="#about" className="px-3 py-2 text-sm font-medium hover:text-primary">
          About
        </Link>
        <Link href="#experience" className="px-3 py-2 text-sm font-medium hover:text-primary">
          Experience
        </Link>
        <Link href="#projects" className="px-3 py-2 text-sm font-medium hover:text-primary">
          Projects
        </Link>
        <Link href="#skills" className="px-3 py-2 text-sm font-medium hover:text-primary">
          Skills
        </Link>
        <Link href="#contact" className="px-3 py-2 text-sm font-medium hover:text-primary">
          Contact
        </Link>
        <ResumeButton />
      </nav>
    </div>
  )
}