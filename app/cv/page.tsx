'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeft, Download } from 'lucide-react'
import Link from 'next/link'

export default function CV() {
  const sections = [
    {
      title: "Informazioni Personali",
      items: ["Nome e Cognome", "Data di Nascita", "Residenza", "Contatti"]
    },
    {
      title: "Istruzione",
      items: ["Università della Calabria", "Liceo Scientifico"]
    },
    {
      title: "Competenze Tecniche",
      items: ["Linguaggi di Programmazione", "Framework e Librerie", "Database", "Tools e Tecnologie"]
    },
    {
      title: "Progetti",
      items: ["TarsGPT", "DeVoSy", "Football Analysis"]
    },
    {
      title: "Lingue",
      items: ["Italiano (Madrelingua)", "Inglese (B2)"]
    },
    {
      title: "Interessi",
      items: ["Intelligenza Artificiale", "Blockchain", "Computer Vision", "Robotica"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Link href="/">
            <Button variant="ghost" size="icon" className="mr-4">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
          Curriculum Vitae
        </h1>

        <div className="flex justify-center mb-12">
          <Button 
            onClick={() => window.open('/cv try (1).pdf', '_blank')}
            className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2"
          >
            <Download className="h-5 w-5" />
            Scarica CV
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
                    <div key={itemIndex} className="text-gray-300">
                      • {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 