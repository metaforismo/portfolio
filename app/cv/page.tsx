'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Download, Sun, Moon, Mail, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function CV() {
  const [darkMode, setDarkMode] = useState(true)

  const sections = [
    {
      title: "Education",
      items: [
        "University of Calabria — BSc in Computer Science & Artificial Intelligence",
        "Cosenza, Italy | Sep 2024 – Expected Graduation: 2027",
        "Member of teaching quality committee"
      ]
    },
    {
      title: "Side Projects",
      items: [
        "TarsGPT - Robotic system with 95% TARS functionality",
        "DeVoSy - Decentralized voting platform",
        "Football Analysis - Enhanced object detection system"
      ]
    },
    {
      title: "Extra Activities",
      items: [
        "Social Media Manager (18,000+ Instagram, 50,000+ TikTok followers)",
        "Hackathon Participant - Codemotion & Poligrafico Italiano",
        "Volunteer - E.N.S.A.",
        "Volunteer - ASS.A.P.L.I."
      ]
    },
    {
      title: "Certifications",
      items: [
        "Boolean Coding Week - Arcade Collection",
        "OII (Italian Olympiad in Informatics)",
        "Epicode Tech Camp - 9th Edition",
        "ICDL Full Standard",
        "MIUR - Cultura d'Impresa ed Orientamento"
      ]
    },
    {
      title: "Skills",
      items: [
        "Technical: Python, JavaScript, Solidity, HTML, CSS, AI/ML, Blockchain, OpenCV",
        "Tools: Git, Docker, React, Node.js",
        "Soft Skills: Strategic Thinking, Problem Solving",
        "Languages: Italian (Native), English (B1), French (Basic), Spanish (Basic)"
      ]
    }
  ]

  return (
    <div className={`min-h-screen ${
      darkMode 
        ? 'bg-[#121212] text-white' 
        : 'bg-white text-gray-900'
    }`}>
      {/* Header */}
      <header className="fixed top-0 w-full backdrop-blur-sm z-50 transition-all duration-300 border-b border-gray-200/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <Button variant="ghost" size="icon" className="mr-4">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full p-2"
          >
            {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
          Curriculum Vitae
        </h1>

        <p className="text-center max-w-2xl mx-auto mb-12 text-gray-400">
          This CV was crafted using Google Docs, emphasizing clarity and professionalism. 
          It represents my journey in technology and education, showcasing my projects, skills, 
          and achievements in a structured format.
        </p>

        <div className="flex justify-center mb-12">
          <Button 
            onClick={() => window.open('/cv try (1).pdf', '_blank')}
            className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2"
          >
            <Download className="h-5 w-5" />
            Download CV
          </Button>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {sections.map((section, index) => (
              <div key={index} className="mb-12 relative">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                  <div className="ml-4 text-xl font-bold">{section.title}</div>
                </div>
                {index < sections.length - 1 && (
                  <div className="absolute left-[7px] top-4 w-0.5 h-full bg-purple-600/30"></div>
                )}
                <div className="ml-8 space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      • {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`w-full py-6 px-4 bg-transparent backdrop-blur-sm border-t ${darkMode ? 'border-white/12' : 'border-gray-200'}`}>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col items-start space-y-4">
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:scale-110 transition-transform duration-300"
                onClick={() => window.open('mailto:francescogiannicola1@gmail.com', '_blank')}
              >
                <Mail className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:scale-110 transition-transform duration-300"
                onClick={() => window.open('https://github.com/metaforismo', '_blank')}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:scale-110 transition-transform duration-300"
                onClick={() => window.open('https://www.linkedin.com/in/francescogiannicola/', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
            <a 
              href="mailto:francescogiannicola1@gmail.com" 
              className="text-sm hover:text-purple-400 transition-colors duration-300"
            >
              francescogiannicola1@gmail.com
            </a>
          </div>
          <div className="text-sm">
            Made with ❤️ by metaforismo
          </div>
        </div>
      </footer>
    </div>
  )
} 