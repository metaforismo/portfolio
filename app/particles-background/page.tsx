import { ThemeToggle } from "@/components/ui/theme-toggle"
import { ParticlesBackground } from "@/components/ui/particles-background"
import { ParticlesNav } from "@/components/ui/particles-nav"

export default function ParticlesBackgroundPage() {
  return (
    <ParticlesBackground>
      <div className="container mx-auto py-10">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Full-Page Particles Background</h1>
          <ThemeToggle />
        </div>
        <ParticlesNav />
        <p className="mb-8 text-lg">
          This demo shows a full-page particles background that changes color based on the current theme.
          The particles are white in dark mode and black in light mode.
          Use the theme toggle in the top right to switch between light and dark mode.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-background/50 p-6 backdrop-blur-sm">
            <h2 className="mb-4 text-xl font-semibold">Content Card 1</h2>
            <p>
              This card has a semi-transparent background with backdrop blur,
              allowing the particles to be visible through it while maintaining readability.
            </p>
          </div>
          <div className="rounded-lg border bg-background/50 p-6 backdrop-blur-sm">
            <h2 className="mb-4 text-xl font-semibold">Content Card 2</h2>
            <p>
              The particles react to mouse movement, creating an interactive and engaging background
              that enhances the user experience without distracting from the content.
            </p>
          </div>
        </div>
      </div>
    </ParticlesBackground>
  )
} 