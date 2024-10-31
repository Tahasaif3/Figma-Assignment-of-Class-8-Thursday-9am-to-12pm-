'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, FileCode, Layout, Link as LinkIcon, Layers, Palette, Code, Github, ExternalLink } from 'lucide-react'

type Topic = {
  title: string
  description: string
  icon: React.ElementType
  definition: string
}

const topics: Topic[] = [
  { 
    title: 'page.tsx',
    description: 'Understanding the core files in Next.js app structure', 
    icon: FileCode,
    definition: 'page.tsx is a special Next.js file that defines a route segment. It exports a React component that represents the UI for the route. In the App Router, pages are Server Components by default, offering automatic code-splitting and server-side rendering.'
  },
  { 
    title: 'layout.tsx',
    description: 'Creating shared layouts in Next.js', 
    icon: Layout,
    definition: 'layout.tsx is used to create UI that is shared between multiple pages. It wraps child components and persists across route changes, allowing for efficient rendering of common elements like headers and footers.'
  },
  { 
    title: 'Link Component', 
    description: 'Optimized client-side navigation in Next.js', 
    icon: LinkIcon,
    definition: 'The Link component in Next.js enables client-side navigation between pages. It prefetches page content in the background, resulting in near-instant page transitions and improved performance.'
  },
  { 
    title: 'Nested Pages', 
    description: 'Creating complex page structures in Next.js', 
    icon: Layers,
    definition: 'Nested pages in Next.js allow for the creation of complex route structures. By nesting folders within the app directory, you can create intuitive and organized page hierarchies that reflect your application\'s structure.'
  },
  { 
    title: 'React Components', 
    description: 'Building reusable UI elements', 
    icon: Layout,
    definition: 'React Components are reusable pieces of UI. They encapsulate structure, behavior, and style, allowing for modular and maintainable code. Components can be functional or class-based and can accept props for customization.'
  },
  { 
    title: 'CSS in Next.js', 
    description: 'Styling options and best practices', 
    icon: Palette,
    definition: 'Next.js supports various CSS options including CSS Modules, Sass, and CSS-in-JS solutions. It also offers built-in optimizations for styles, ensuring efficient loading and application of styles in your app.'
  },
  { 
    title: 'Tailwind CSS', 
    description: 'Utility-first CSS framework for rapid UI development', 
    icon: Code,
    definition: 'Tailwind CSS is a utility-first CSS framework that allows for rapid UI development. It provides low-level utility classes that can be composed to build custom designs directly in your markup, offering flexibility and consistency in styling.'
  },
]

const timeline = [
  {
    quarter: 'Quarter 1',
    title: 'TypeScript Fundamentals',
    description: 'Learned type systems, interfaces, and advanced TypeScript concepts'
  },
  {
    quarter: 'Quarter 2',
    title: 'Next.js Development',
    description: 'Mastered Next.js features including App Router, Server Components, and API Routes'
  },
  {
    quarter: 'Current',
    title: 'Advanced Web Development',
    description: 'Learning Cloud Computing and Applied Gen AI technologies'
  }
]

const projects = [
  {
    title: 'Unit Converter App',
    description: 'A TypeScript-based unit conversion application',
    tech: 'TypeScript, Next.js',
    date: '2024'
  },
  {
    title: 'Firebase Authentication',
    description: 'User authentication system with Firebase integration',
    tech: 'Next.js, Firebase',
    date: '2024'
  },
  {
    title: 'Travel Agency Website',
    description: 'Responsive travel agency website with modern design',
    tech: 'HTML, CSS',
    date: '2023'
  }
]

export default function Home() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
          Next.js Class at Governor Initiative
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Exploring AI, Web3.0, and Metaverse with TypeScript and Next.js
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Topics Covered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topics.map((topic, index) => (
              <div 
                key={index} 
                className={`h-64 cursor-pointer ${flippedCard === index ? 'rotate-y-180' : ''}`}
                onClick={() => setFlippedCard(prevFlipped => prevFlipped === index ? null : index)}
              >
                <div className="relative w-full h-full transition-transform duration-500 transform-style-3d">
                  <div className="absolute w-full h-full backface-hidden bg-white p-6 rounded-lg shadow-md">
                    <topic.icon className="w-12 h-12 text-blue-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
                    <p className="text-gray-600">{topic.description}</p>
                  </div>
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-blue-800 text-white p-6 rounded-lg shadow-md flex items-center justify-center">
                    <p className="text-sm">{topic.definition}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">My Journey</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-200">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1" />
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-2">
                    {item.quarter}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-600">{project.tech}</span>
                  <span className="text-sm text-gray-500">{project.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-blue-50 p-8 rounded-lg shadow-inner mb-16">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">About Me</h2>
          <div className="space-y-4">
            <p className="flex items-center">
              <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
              Aspiring AI Enthusiast passionate about Blockchain and Web3
            </p>
            <p className="flex items-center">
              <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
              Front-end Developer and Graphic Designer
            </p>
            <p className="flex items-center">
              <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
              Currently Learning Cloud Computing and Applied Gen AI
            </p>
            <p className="flex items-center">
              <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
              Based in Hyderabad, Sindh, Pakistan
            </p>
          </div>
        </section>

        <div className="text-center">
          <Link 
            href="https://github.com/Tahasaif3?tab=repositories" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            <Github className="w-5 h-5 mr-2" />
            View My Projects
            <ExternalLink className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </main>

      <footer className="bg-blue-800 text-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Governor Initiative for AI, Web3.0, and Metaverse</p>
          <p className="mt-2">Built with Next.js, TypeScript, and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}