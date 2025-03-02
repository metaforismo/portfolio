import { ParticlesDemo } from "@/components/ui/particles-demo"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { ParticlesNav } from "@/components/ui/particles-nav"

export default function ParticlesPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Particles Background Demo</h1>
        <ThemeToggle />
      </div>
      <ParticlesNav />
      <p className="mb-8 text-lg">
        This demo shows a particles background that changes color based on the current theme.
        The particles are white in dark mode and black in light mode.
        Use the theme toggle in the top right to switch between light and dark mode.
      </p>
      <ParticlesDemo />
    </div>
  )
} 