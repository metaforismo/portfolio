'use client'

import { useState } from 'react'
import { Sun, Moon, Github, Mail, Linkedin, Youtube } from 'lucide-react'
import { FaSquareXTwitter } from "react-icons/fa6"
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const projects = [
    {
      title: "TarsGPT",
      description: "A robotic system replicating TARS' functionalities using ChatGPT and Whisper for language processing and mobility. Achieved 30% faster response time enabling real-time interactions.",
      repoUrl: "https://github.com/username/tarsgpt"
    },
    {
      title: "DeVoSy",
      description: "A decentralized voting platform enhancing electoral security by 40%. Built with blockchain technology to handle 10,000+ simultaneous voters with minimal latency.",
      repoUrl: "https://github.com/username/devosy"
    },
    {
      title: "Football Analysis",
      description: "Enhanced object detection accuracy by 20% using YOLO for player and ball tracking. Optimized tactical insight extraction with 3x faster data processing.",
      repoUrl: "https://github.com/username/football-analysis"
    }
  ]

  return (
    <div className={`min-h-screen relative ${
      darkMode 
        ? 'bg-[rgb(10,10,10)] text-white' 
        : 'bg-white text-gray-900'
    }`}>
      <div className="relative">
        {/* Header */}
        <header className="fixed top-0 w-full backdrop-blur-sm z-50 transition-all duration-300">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold">FG</div>
            <nav className="flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-purple-400 transition-colors duration-300"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="hover:text-purple-400 transition-colors duration-300"
              >
                Projects
              </button>
              <Link 
                href="/cv"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                CV
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="rounded-full p-2"
              >
                {!darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
              </Button>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <main className="container mx-auto px-4 pt-32 text-center">
          <div className="mb-8 animate-fadeIn">
            <div className="relative w-[150px] h-[150px] mx-auto mb-6">
              <Image 
                src="/images/inazuma.jpg"
                alt="Francesco Giannicola"
                fill
                className={`object-cover border-4 hover:scale-105 transition-transform duration-300 ${
                  darkMode ? 'border-white/30' : 'border-black/30'
                }`}
                style={{ borderRadius: '50%' }}
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi 👋, I'm Francesco Giannicola
            </h1>
            <h2 className="text-xl md:text-2xl mb-6">
              BSc student - Computer Science & Artificial Intelligence
              <br />
              Università della Calabria
            </h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                <span className="mr-1.5 h-2 w-2 rounded-full bg-green-500"></span>
                Available for Jobs
              </span>
            </div>
            <div className="flex justify-center space-x-4">
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
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:scale-110 transition-transform duration-300"
                onClick={() => window.open('https://x.com/metaforismoo?s=21', '_blank')}
              >
                <FaSquareXTwitter className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:scale-110 transition-transform duration-300"
                onClick={() => window.open('mailto:francescogiannicola1@gmail.com', '_blank')}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* About Section */}
          <section id="about" className="max-w-2xl mx-auto my-32 scroll-mt-20">
            <div className="relative py-4 mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-purple-300/20"></div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">About Me</h3>
            <div className="space-y-4 text-lg">
              <p>
                Passionate self-learner with a knack for dissecting the world around me. 
                I am deeply interested in a variety of fields including film 🍿, space 🔭, 
                sports ⚽️ (especially football), history 📖, and of course, AI 🤖. 
                Constantly pushing boundaries by building projects from scratch and 
                embracing new challenges.
              </p>
              <p>
                I have a particular fondness for the anime <strong>DragonBall</strong> 🐉, 
                which has been a significant part of my entertainment journey. When it comes 
                to films, <strong>Interstellar</strong> 🌌 stands out as my favorite, but I 
                appreciate all of Christopher Nolan's works for their intricate storytelling 
                and thought-provoking themes.
              </p>
              <p>
                Beyond my interests, I have a deep love for organization and maintaining 
                control over my environment. This trait not only helps me stay productive 
                but also ensures that I can manage multiple projects efficiently and effectively.
              </p>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-32 scroll-mt-20">
            <div className="relative py-4 mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-purple-300/20"></div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-8">Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="bg-transparent backdrop-blur-sm border border-gray-200/20 hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {project.title}
                    </h4>
                  </CardHeader>
                  <CardContent>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {project.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className={`w-full hover:scale-105 transition-transform duration-300 ${
                        darkMode 
                          ? 'border-white/50 bg-transparent hover:bg-white/10 text-white' 
                          : 'border-gray-300 bg-transparent hover:bg-gray-100'
                      }`}
                      onClick={() => window.open(project.repoUrl, '_blank')}
                    >
                      View Repository
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-32">
            <div className="relative py-4 mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className={`w-full border-t ${darkMode ? 'border-purple-300/20' : 'border-gray-400/50'}`}></div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-8">Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "Solidity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
                { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
                { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
              ].map((skill, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-lg bg-transparent backdrop-blur-sm border border-gray-200/20 flex flex-col items-center justify-center hover:scale-110 transition-all duration-300"
                >
                  <Image 
                    src={skill.icon} 
                    alt={skill.name} 
                    width={48}
                    height={48}
                    className="mb-2" 
                  />
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </section>
        </main>

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
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:scale-110 transition-transform duration-300"
                  onClick={() => window.open('https://x.com/metaforismoo?s=21', '_blank')}
                >
                  <FaSquareXTwitter className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:scale-110 transition-transform duration-300"
                  onClick={() => window.open('https://www.youtube.com/channel/UCYaWvTE2XvKI2u-9mqJysdw', '_blank')}
                >
                  <Youtube className="h-5 w-5" />
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
    </div>
  )
}
