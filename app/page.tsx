'use client'

import { useEffect, useState, useRef } from 'react'
import { Github, Mail, Linkedin, Youtube, GraduationCap, Briefcase, Award, Menu } from 'lucide-react'
import { FaSquareXTwitter, FaFlutter, FaInstagram } from "react-icons/fa6"
import { FaSwift, FaPython, FaReact, FaNodeJs, FaHtml5, FaGitSquare, FaDocker } from "react-icons/fa"
import { SiExpo, SiSolidity, SiTensorflow } from "react-icons/si"
import { IoLogoJavascript } from "react-icons/io5"
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export default function Home() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
    
    // Add scroll event listener to track active section
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'cv']
      const scrollPosition = window.scrollY + 100 // offset for header

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop && 
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
          }
        }
      })
    }

    // Add click event listener to close mobile menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      })
    }
  }

  const projects = [
    {
      title: "TarsGPT",
      description: "A robotic system replicating TARS from Interstellar; functionalities using ChatGPT and Whisper for language processing and mobility. Achieved 30% faster response time enabling real-time interactions.",
      repoUrl: "https://github.com/metaforismo/TarsGPT"
    },
    {
      title: "DeVoSy",
      description: "A decentralized voting platform enhancing electoral security by 40%. Built with blockchain technology to handle 10,000+ simultaneous voters with minimal latency.",
      repoUrl: "https://github.com/metaforismo/DeVoSy"
    },
    {
      title: "Football Analysis",
      description: "Enhanced object detection accuracy by 20% using YOLO for player and ball tracking. Optimized tactical insight extraction with 3x faster data processing.",
      repoUrl: "https://github.com/username/football-analysis"
    }
  ]

  const timelineItems = [
    {
      title: "Education",
      icon: <GraduationCap className="h-6 w-6" />,
      items: [
        {
          title: "University of Calabria",
          subtitle: "BSc in Computer Science & Artificial Intelligence",
          date: "Sep 2024 – Expected Graduation: 2027",
          description: "Member of teaching quality committee"
        }
      ]
    },
    {
      title: "Projects",
      icon: <Briefcase className="h-6 w-6" />,
      items: [
        {
          title: "TarsGPT",
          subtitle: "Robotic system with 95% TARS functionality",
          date: "2023",
          description: "Developed a robotic system replicating TARS from Interstellar with ChatGPT and Whisper integration"
        },
        {
          title: "DeVoSy",
          subtitle: "Decentralized voting platform",
          date: "2022",
          description: "Built a blockchain-based voting system enhancing electoral security by 40%"
        }
      ]
    },
    {
      title: "Activities",
      icon: <Award className="h-6 w-6" />,
      items: [
        {
          title: "Tech Events Volunteer",
          subtitle: "Local tech community",
          date: "2021 - Present",
          description: "Volunteered at local tech events and hackathons"
        },
        {
          title: "Mentorship",
          subtitle: "University of Calabria",
          date: "2022 - Present",
          description: "Mentored junior students in programming and AI concepts"
        }
      ]
    }
  ]

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) return null

  return (
    <div className="min-h-screen relative">
      <div className="relative">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md shadow-sm">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="text-xl font-bold text-black dark:text-white">FG</div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <button 
                onClick={() => scrollToSection('home')} 
                className={`text-black dark:text-white hover:text-[#ffd13e] dark:hover:text-[#ffd13e] transition-colors ${activeSection === 'home' ? 'text-[#ffd13e] dark:text-[#ffd13e]' : ''}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className={`text-black dark:text-white hover:text-[#ffd13e] dark:hover:text-[#ffd13e] transition-colors ${activeSection === 'about' ? 'text-[#ffd13e] dark:text-[#ffd13e]' : ''}`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className={`text-black dark:text-white hover:text-[#ffd13e] dark:hover:text-[#ffd13e] transition-colors ${activeSection === 'projects' ? 'text-[#ffd13e] dark:text-[#ffd13e]' : ''}`}
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('skills')} 
                className={`text-black dark:text-white hover:text-[#ffd13e] dark:hover:text-[#ffd13e] transition-colors ${activeSection === 'skills' ? 'text-[#ffd13e] dark:text-[#ffd13e]' : ''}`}
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('cv')} 
                className={`text-black dark:text-white hover:text-[#ffd13e] dark:hover:text-[#ffd13e] transition-colors ${activeSection === 'cv' ? 'text-[#ffd13e] dark:text-[#ffd13e]' : ''}`}
              >
                CV
              </button>
            </nav>
            
            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <button 
                className="md:hidden text-black dark:text-white hover:text-[#ffd13e] dark:hover:text-[#ffd13e]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation Dropdown */}
          {mobileMenuOpen && (
            <div 
              ref={mobileMenuRef}
              className="md:hidden bg-white dark:bg-[#252121] shadow-md animate-slideDown"
            >
              <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
                <button 
                  onClick={() => {
                    scrollToSection('home')
                    setMobileMenuOpen(false)
                  }} 
                  className={`text-black dark:text-white hover:text-[#ffd13e] dark:hover:text-[#ffd13e] transition-colors text-left py-2 ${activeSection === 'home' ? 'text-[#ffd13e] dark:text-[#ffd13e]' : ''}`}
                >
                  Home
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('about')
                    setMobileMenuOpen(false)
                  }} 
                  className={`text-black dark:text-white hover:text-[#ffd13e] dark:hover:text-[#ffd13e] transition-colors text-left py-2 ${activeSection === 'about' ? 'text-[#ffd13e] dark:text-[#ffd13e]' : ''}`}
                >
                  About
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('projects')
                    setMobileMenuOpen(false)
                  }} 
                  className={`text-black dark:text-white hover:text-[#ffd13e] dark:hover:text-[#ffd13e] transition-colors text-left py-2 ${activeSection === 'projects' ? 'text-[#ffd13e] dark:text-[#ffd13e]' : ''}`}
                >
                  Projects
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('skills')
                    setMobileMenuOpen(false)
                  }} 
                  className={`text-black dark:text-white hover:text-[#ffd13e] dark:hover:text-[#ffd13e] transition-colors text-left py-2 ${activeSection === 'skills' ? 'text-[#ffd13e] dark:text-[#ffd13e]' : ''}`}
                >
                  Skills
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('cv')
                    setMobileMenuOpen(false)
                  }} 
                  className={`text-black dark:text-white hover:text-[#ffd13e] dark:hover:text-[#ffd13e] transition-colors text-left py-2 ${activeSection === 'cv' ? 'text-[#ffd13e] dark:text-[#ffd13e]' : ''}`}
                >
                  CV
                </button>
              </div>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <main className="container mx-auto px-4 pt-24 sm:pt-32 text-center">
          <div id="home" className="mb-8 animate-fadeIn">
            <div className="relative w-[150px] h-[150px] mx-auto mb-6 group">
              <Image 
                src="/images/inazuma.png"
                alt="Francesco Giannicola"
                fill
                className="object-cover border-2 hover:scale-105 transition-transform duration-300 border-[#ffd13e] dark:border-[#ffd13e] rounded-full animate-pulse-border"
                style={{ borderRadius: '50%' }}
              />
              <div className="absolute inset-0 rounded-full animate-pulse-glow"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi 👋, I&apos;m Francesco Giannicola
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
            <div className="flex justify-center space-x-3 sm:space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:scale-110 transition-transform duration-300 group"
                onClick={() => window.open('https://github.com/metaforismo', '_blank')}
              >
                <Github className="h-5 w-5 text-[#7c786b] dark:text-[#7c786b] group-hover:text-[#ffd13e]" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:scale-110 transition-transform duration-300 group"
                onClick={() => window.open('https://www.linkedin.com/in/francescogiannicola/', '_blank')}
              >
                <Linkedin className="h-5 w-5 text-[#7c786b] dark:text-[#7c786b] group-hover:text-[#ffd13e]" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:scale-110 transition-transform duration-300 group"
                onClick={() => window.open('https://x.com/metaforismoo?s=21', '_blank')}
              >
                <FaSquareXTwitter className="h-5 w-5 text-[#7c786b] dark:text-[#7c786b] group-hover:text-[#ffd13e]" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:scale-110 transition-transform duration-300 group"
                onClick={() => window.open('mailto:francescogiannicola1@gmail.com', '_blank')}
              >
                <Mail className="h-5 w-5 text-[#7c786b] dark:text-[#7c786b] group-hover:text-[#ffd13e]" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:scale-110 transition-transform duration-300 group"
                onClick={() => window.open('https://www.youtube.com/channel/UCYaWvTE2XvKI2u-9mqJysdw', '_blank')}
              >
                <Youtube className="h-5 w-5 text-[#7c786b] dark:text-[#7c786b] group-hover:text-[#ffd13e]" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:scale-110 transition-transform duration-300 group"
                onClick={() => window.open('https://www.instagram.com/francescogiannicolaa/', '_blank')}
              >
                <FaInstagram className="h-5 w-5 text-[#7c786b] dark:text-[#7c786b] group-hover:text-[#ffd13e]" />
              </Button>
            </div>
          </div>

          {/* About Section */}
          <section id="about" className="max-w-2xl mx-auto my-32 scroll-mt-20">
            <div className="relative py-4 mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#7c786b]/20"></div>
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
                appreciate all of Christopher Nolan&apos;s works for their intricate storytelling 
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
                <div className="w-full border-t border-[#7c786b]/20"></div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-8">Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="bg-white dark:bg-[#252121] border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
                  </CardContent>
                  <CardFooter>
                    <a 
                      href={project.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-sm border border-[#7c786b] dark:border-[#ffd13e] text-[#7c786b] dark:text-white px-3 py-1 rounded-md hover:bg-[#7c786b]/10 dark:hover:bg-[#ffd13e]/10 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span>View Repository</span>
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-32 scroll-mt-20">
            <div className="relative py-4 mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className={`w-full border-t ${theme === 'dark' ? 'border-[#7c786b]/20' : 'border-gray-400/50'}`}></div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-8">Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                { name: "Python", customIcon: <FaPython size={48} className="text-[#7c786b] group-hover:text-[#ffd13e] transition-colors duration-300" /> },
                { name: "JavaScript", customIcon: <IoLogoJavascript size={48} className="text-[#7c786b] group-hover:text-[#ffd13e] transition-colors duration-300" /> },
                { name: "React", customIcon: <FaReact size={48} className="text-[#7c786b] group-hover:text-[#ffd13e] transition-colors duration-300" /> },
                { name: "Node.js", customIcon: <FaNodeJs size={48} className="text-[#7c786b] group-hover:text-[#ffd13e] transition-colors duration-300" /> },
                { name: "Solidity", customIcon: <SiSolidity size={48} className="text-[#7c786b] group-hover:text-[#ffd13e] transition-colors duration-300" /> },
                { name: "HTML5", customIcon: <FaHtml5 size={48} className="text-[#7c786b] group-hover:text-[#ffd13e] transition-colors duration-300" /> },
                { name: "TensorFlow", customIcon: <SiTensorflow size={48} className="text-[#7c786b] group-hover:text-[#ffd13e] transition-colors duration-300" /> },
                { name: "Git", customIcon: <FaGitSquare size={48} className="text-[#7c786b] group-hover:text-[#ffd13e] transition-colors duration-300" /> },
                { name: "Docker", customIcon: <FaDocker size={48} className="text-[#7c786b] group-hover:text-[#ffd13e] transition-colors duration-300" /> },
                { name: "Expo", customIcon: <SiExpo size={48} className="text-[#7c786b] group-hover:text-[#ffd13e] transition-colors duration-300" /> },
                { name: "Swift", customIcon: <FaSwift size={48} className="text-[#7c786b] group-hover:text-[#ffd13e] transition-colors duration-300" /> },
                { name: "Flutter", customIcon: <FaFlutter size={48} className="text-[#7c786b] group-hover:text-[#ffd13e] transition-colors duration-300" /> }
              ].map((skill, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-lg bg-transparent backdrop-blur-sm border border-gray-200/20 flex flex-col items-center justify-center hover:scale-110 transition-all duration-300 hover:border-[#ffd13e] hover:bg-[#ffd13e]/10 group"
                >
                  <div className="flex justify-center items-center h-12 mb-2">
                    {skill.customIcon}
                  </div>
                  <span className="text-sm text-center w-full group-hover:text-[#ffd13e] transition-colors duration-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CV Timeline Section */}
          <section id="cv" className="mb-32 scroll-mt-20">
            <div className="relative py-4 mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className={`w-full border-t ${theme === 'dark' ? 'border-[#7c786b]/20' : 'border-gray-400/50'}`}></div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-8">Curriculum Vitae</h3>
            
            <div className="flex justify-center mb-8">
              <a 
                href="/cv.pdf" 
                download="Francesco_Giannicola_CV.pdf"
                className="inline-flex items-center px-6 py-3 rounded-md text-base font-medium transition-colors border border-[#7c786b] hover:border-[#ffd13e] hover:text-[#ffd13e] hover:bg-[#ffd13e]/10"
              >
                <span>Download Full CV</span>
              </a>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8 sm:space-y-12">
                {timelineItems.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="relative">
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-full bg-[#ffd13e]/20 text-[#ffd13e] mr-4 shadow-md">
                        {section.icon}
                      </div>
                      <h4 className="text-xl font-bold">{section.title}</h4>
                    </div>
                    
                    {/* Timeline container with continuous line */}
                    <div className="ml-6 relative">
                      {/* Continuous vertical line */}
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#ffd13e]"></div>
                      
                      <div className="space-y-8">
                        {section.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="relative pl-8 pb-8">
                            {/* Timeline dot - larger and with glow effect */}
                            <div 
                              className="absolute left-[-8px] top-0 h-4 w-4 rounded-full border-2 z-10 bg-[#ffd13e] border-[#ffd13e]/30 hover:bg-[#ffd13e] hover:border-[#ffd13e]/30 transition-colors duration-300"
                            ></div>
                            
                            <div className={`rounded-lg p-6 shadow-md ${
                              theme === 'dark' 
                                ? 'bg-background/50 backdrop-blur-sm border border-[#7c786b]/30 shadow-[0_4px_12px_rgba(0,0,0,0.2)]' 
                                : 'bg-white/90 backdrop-blur-sm border border-[#7c786b]/30 shadow-[0_4px_12px_rgba(0,0,0,0.05)]'
                            }`}>
                              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2">
                                <h5 className="font-semibold text-lg">{item.title}</h5>
                                <span className="text-sm mt-1 md:mt-0 px-3 py-1 rounded-full inline-block bg-[#ffd13e] text-black font-medium">
                                  {item.date}
                                </span>
                              </div>
                              <p className="text-sm mb-3 font-medium text-[#7c786b]">
                                {item.subtitle}
                              </p>
                              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className={`w-full py-6 px-4 bg-transparent backdrop-blur-sm border-t ${theme === 'dark' ? 'border-white/12' : 'border-gray-200'}`}>
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col items-center md:items-start space-y-4">
              <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-4">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:scale-110 transition-transform duration-300 group"
                  onClick={() => window.open('mailto:francescogiannicola1@gmail.com', '_blank')}
                >
                  <Mail className="h-5 w-5 text-[#7c786b] group-hover:text-[#ffd13e]" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:scale-110 transition-transform duration-300 group"
                  onClick={() => window.open('https://github.com/metaforismo', '_blank')}
                >
                  <Github className="h-5 w-5 text-[#7c786b] group-hover:text-[#ffd13e]" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:scale-110 transition-transform duration-300 group"
                  onClick={() => window.open('https://www.linkedin.com/in/francescogiannicola/', '_blank')}
                >
                  <Linkedin className="h-5 w-5 text-[#7c786b] group-hover:text-[#ffd13e]" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:scale-110 transition-transform duration-300 group"
                  onClick={() => window.open('https://x.com/metaforismoo?s=21', '_blank')}
                >
                  <FaSquareXTwitter className="h-5 w-5 text-[#7c786b] group-hover:text-[#ffd13e]" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:scale-110 transition-transform duration-300 group"
                  onClick={() => window.open('https://www.youtube.com/channel/UCYaWvTE2XvKI2u-9mqJysdw', '_blank')}
                >
                  <Youtube className="h-5 w-5 text-[#7c786b] group-hover:text-[#ffd13e]" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:scale-110 transition-transform duration-300 group"
                  onClick={() => window.open('https://www.instagram.com/francescogiannicolaa/', '_blank')}
                >
                  <FaInstagram className="h-5 w-5 text-[#7c786b] group-hover:text-[#ffd13e]" />
                </Button>
              </div>
              <a 
                href="mailto:francescogiannicola1@gmail.com" 
                className="text-sm hover:text-[#ffd13e] transition-colors duration-300"
              >
                francescogiannicola1@gmail.com
              </a>
            </div>
            <div className="text-sm">
              Made with 💛 by metaforismo
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
