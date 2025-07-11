'use client'

import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ResumeButton() {
  return (
    <Button
      size="sm"
      onClick={() => window.open('https://rxresu.me/freadamabebe/freadam-abebe-resume-2025', '_blank')}
    >
      <ArrowUpRight className="mr-2 h-4 w-4" />
      Resume
    </Button>
  )
}