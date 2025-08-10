'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { 
  Book, 
  Download, 
  Settings, 
  Zap,
  Globe,
  Network,
  Code,
  ArrowLeft,
  Menu,
  X,
  GitBranch
} from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'
import CopyPageButton from '@/components/CopyPageButton'

const navigation = [
  {
    name: 'Getting Started',
    items: [
      { name: 'Installation', href: '/docs/installation', icon: Download },
      { name: 'Quick Start', href: '/docs/quickstart', icon: Zap },
      { name: 'Configuration', href: '/docs/configuration', icon: Settings },
    ]
  },
  {
    name: 'Core Concepts',
    items: [
      { name: 'Crawler Engine', href: '/docs/crawler', icon: Globe },
      { name: 'Knowledge Graphs', href: '/docs/knowledge-graphs', icon: Network },
      { name: 'Data Processing', href: '/docs/processing', icon: Code },
      { name: 'Git Code Extraction', href: '/docs/git-extraction', icon: GitBranch },
    ]
  },
  {
    name: 'Reference',
    items: [
      { name: 'CLI Commands', href: '/docs/cli', icon: Code },
      { name: 'Contributing', href: '/docs/contributing', icon: GitBranch },
    ]
  },
]

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen transition-colors">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle sidebar"
              >
                {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <Link href="/" className="hidden sm:flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
              <span className="hidden sm:block text-gray-300 dark:text-gray-700">|</span>
              <div className="flex items-center space-x-2">
                <Image 
                  src="/logo.png"
                  alt="Omnivore Logo"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <span className="font-semibold text-gray-900 dark:text-white">Omnivore Docs</span>
              </div>
              <a
                href="https://omnivore.readthedocs.io/en/latest/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block ml-4 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >
                readthedocs.org ↗
              </a>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex relative">
          {/* Mobile sidebar overlay */}
          {sidebarOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-30 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}
          
          {/* Sidebar */}
          <nav className={`
            fixed lg:static inset-y-0 left-0 z-40 lg:z-0
            w-64 flex-shrink-0 py-8 px-4 lg:pr-8 lg:pl-0
            bg-white dark:bg-gray-950 lg:bg-transparent
            transform transition-transform duration-200 ease-in-out
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            overflow-y-auto max-h-screen
          `}>
            <div className="space-y-8">
              {navigation.map((section) => (
                <div key={section.name}>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-3">
                    {section.name}
                  </h3>
                  <ul className="space-y-1">
                    {section.items.map((item) => {
                      const Icon = item.icon
                      const isActive = pathname === item.href
                      return (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                              isActive
                                ? 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-r-2 border-blue-500'
                                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-900'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                            <span>{item.name}</span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
              <div className="text-xs text-gray-500 dark:text-gray-400 pt-6 border-t border-gray-200 dark:border-gray-800">
                <a href="https://github.com/Pranav-Karra-3301/omnivore" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 dark:hover:text-gray-200">
                  Open source on GitHub
                </a>
              </div>
            </div>
          </nav>

          {/* Main content */}
          <main className="flex-1 py-8 lg:pl-8">
            <div className="max-w-4xl">
              <div className="flex justify-end mb-4">
                <CopyPageButton />
              </div>
              {children}
              <div className="mt-12 text-xs text-gray-400 dark:text-gray-500">
                <span>
                  Built with ❤️ and Rust · <a href="https://pranavkarra.me" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-gray-600 dark:decoration-gray-400 hover:text-gray-600 dark:hover:text-gray-300">Developed by Pranav Karra</a>
                </span>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}