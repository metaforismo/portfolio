'use client'

import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { ParticlesBackground } from '@/components/ui/particles-background'
import { ThemeToggle } from '@/components/ui/theme-toggle'

const posts = {
  'future-of-ai-robotics': {
    title: "The Future of AI in Robotics",
    content: `
      Artificial Intelligence is revolutionizing the field of robotics in ways we could only dream of a few years ago. Through my work on the TARS project, I&apos;ve witnessed firsthand how AI can enhance robotic systems&apos; capabilities and response times.

      The integration of ChatGPT and Whisper has been particularly groundbreaking. These technologies have enabled more natural human-robot interactions and significantly improved response times. The 30% improvement in response time we achieved wasn&apos;t just a number - it represented a fundamental shift in how robots can interact with humans in real-time.

      Key Innovations:
      - Natural Language Processing improvements
      - Real-time response optimization
      - Enhanced mobility control systems
      - Adaptive learning capabilities

      The future holds even more promise. As we continue to develop these technologies, we&apos;re seeing possibilities for applications in healthcare, disaster response, and space exploration. The key will be maintaining the balance between capability and reliability while ensuring these systems remain safe and controllable.
    `,
    image: "/blog/ai-robotics.jpg",
    date: "2024-01-15",
    author: "Francesco Giannicola"
  },
  'blockchain-voting-systems': {
    title: "Blockchain Voting Systems",
    content: `
      The DeVoSy project represents a significant step forward in securing democratic processes through blockchain technology. By implementing a decentralized voting platform, we&apos;ve demonstrated how blockchain can enhance electoral security while maintaining accessibility.

      Our system achieved a 40% improvement in security metrics while handling over 10,000 simultaneous voters with minimal latency. This wasn&apos;t just about adding blockchain to existing systems - it required rethinking the entire voting process from the ground up.

      Key Features:
      - Immutable vote recording
      - Real-time vote verification
      - Distributed consensus mechanisms
      - Privacy-preserving protocols

      The implications for democratic processes are profound. With blockchain voting systems, we can potentially eliminate many of the traditional concerns about election integrity while making voting more accessible to everyone.
    `,
    image: "/blog/blockchain-voting.jpg",
    date: "2024-01-10",
    author: "Francesco Giannicola"
  },
  'football-analytics-revolution': {
    title: "Football Analytics Revolution",
    content: `
      The intersection of sports and technology has always fascinated me, and our recent work in football analytics demonstrates just how powerful this combination can be. By implementing YOLO for player and ball tracking, we&apos;ve achieved a 20% improvement in object detection accuracy.

      This enhanced accuracy isn&apos;t just about better numbers - it&apos;s about providing coaches and analysts with more reliable data to make strategic decisions. The optimization of tactical insight extraction has led to 3x faster data processing, making real-time analysis during matches a reality.

      Technical Achievements:
      - Advanced computer vision implementation
      - Real-time tracking systems
      - Automated tactical analysis
      - Performance prediction models

      The future of football analytics looks incredibly promising. As we continue to refine these technologies, we&apos;re opening up new possibilities for understanding and improving the beautiful game.
    `,
    image: "/blog/football-analytics.jpg",
    date: "2024-01-05",
    author: "Francesco Giannicola"
  }
}

export default function BlogPost() {
  const params = useParams()
  const slug = params.slug as string
  const post = posts[slug as keyof typeof posts]
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) return null

  if (!post) {
    return (
      <ParticlesBackground>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Post not found</h1>
          <Link href="/">
            <Button 
              variant="outline" 
              className={`flex items-center space-x-2 ${
                theme === 'dark' 
                  ? 'border-white/50 bg-transparent hover:bg-white/10 text-white' 
                  : 'border-gray-300 bg-transparent hover:bg-gray-100'
              }`}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span>Back to Home</span>
            </Button>
          </Link>
        </div>
      </ParticlesBackground>
    )
  }

  return (
    <ParticlesBackground>
      <div className="min-h-screen">
        {/* Header */}
        <header className="fixed top-0 w-full backdrop-blur-sm z-50 transition-all duration-300">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="icon" className="rounded-full p-2">
                  <ArrowLeft className="h-6 w-6" />
                </Button>
              </Link>
              <h1 className="text-2xl font-bold">Blog</h1>
            </div>
            <ThemeToggle />
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 pt-32 pb-16">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 bg-background/50 backdrop-blur-sm rounded-lg border border-gray-200/20 p-6">
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center text-sm text-gray-400 mb-6">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.author}</span>
              </div>
              {post.image && (
                <div className="relative w-full h-[300px] mb-8 rounded-lg overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className={`prose prose-lg max-w-none ${theme === 'dark' ? 'prose-invert' : ''}`}>
                {post.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph.trim()}</p>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className={`w-full py-6 px-4 bg-transparent backdrop-blur-sm border-t ${theme === 'dark' ? 'border-white/12' : 'border-gray-200'}`}>
          <div className="container mx-auto text-center">
            <div className="text-sm">
              Made with 🧡 by metaforismo
            </div>
          </div>
        </footer>
      </div>
    </ParticlesBackground>
  )
} 