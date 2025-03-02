"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function ParticlesNav() {
  const pathname = usePathname()

  return (
    <nav className="mb-8 flex space-x-4">
      <Link
        href="/particles"
        className={cn(
          "rounded-md px-4 py-2 transition-colors",
          pathname === "/particles"
            ? "bg-primary text-primary-foreground"
            : "hover:bg-muted"
        )}
      >
        Component Demo
      </Link>
      <Link
        href="/particles-background"
        className={cn(
          "rounded-md px-4 py-2 transition-colors",
          pathname === "/particles-background"
            ? "bg-primary text-primary-foreground"
            : "hover:bg-muted"
        )}
      >
        Full-Page Background
      </Link>
    </nav>
  )
} 