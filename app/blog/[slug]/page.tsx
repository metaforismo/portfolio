'use client'

import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

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
  const post = posts[params.slug as keyof typeof posts]

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          className="mb-8 hover:bg-purple-500/10"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <article className="max-w-4xl mx-auto">
          <div className="relative w-full h-64 mb-8">
            <Image 
              src={post.image} 
              alt={post.title} 
              fill
              className="object-cover rounded-lg"
            />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex items-center text-gray-400 mb-8">
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <span>{new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>

            <div className="prose prose-invert max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-300">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  )
} 