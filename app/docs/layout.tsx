'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import ThemeToggle from '@/components/ThemeToggle'

const navigation = [
  {
    name: 'Getting Started',
    items: [
      { name: 'Installation', href: '/docs/installation', icon: '>' },
      { name: 'Quick Start', href: '/docs/quickstart', icon: '>' },
      { name: 'Configuration', href: '/docs/configuration', icon: '>' },
    ]
  },
  {
    name: 'Core Concepts',
    items: [
      { name: 'Crawler Engine', href: '/docs/crawler', icon: '>' },
      { name: 'Knowledge Graphs', href: '/docs/knowledge-graphs', icon: '>' },
      { name: 'Data Processing', href: '/docs/processing', icon: '>' },
      { name: 'Git Extraction', href: '/docs/git-extraction', icon: '>' },
    ]
  },
  {
    name: 'Reference',
    items: [
      { name: 'CLI Commands', href: '/docs/cli', icon: '>' },
      { name: 'Contributing', href: '/docs/contributing', icon: '>' },
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
    <div className="srcl-layout">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="srcl-button-secondary md:hidden"
        style={{
          position: 'fixed',
          top: '16px',
          left: '16px',
          zIndex: 100,
          padding: '8px 12px',
        }}
        aria-label="Toggle menu"
      >
        {sidebarOpen ? '[ X ]' : '[ = ]'}
      </button>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 40,
          }}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`srcl-sidebar ${sidebarOpen ? 'open' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          zIndex: 50,
          transform: sidebarOpen ? 'translateX(0)' : undefined,
          overflowY: 'auto',
        }}
      >
        {/* Logo */}
        <div style={{ marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid var(--theme-border)' }}>
          <Link href="/" className="srcl-nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Image
              src="/logo.png"
              alt="Omnivore"
              width={24}
              height={24}
              style={{ width: '24px', height: '24px' }}
            />
            <span style={{ fontSize: '14px', letterSpacing: '2px' }}>OMNIVORE</span>
          </Link>
          <div style={{ marginTop: '8px', fontSize: '11px', color: 'var(--theme-foreground-secondary)' }}>
            <Link href="/" style={{ marginRight: '16px' }}>HOME</Link>
            <a href="https://github.com/Pranav-Karra-3301/omnivore" target="_blank" rel="noopener noreferrer">
              GITHUB
            </a>
          </div>
        </div>

        {/* Navigation */}
        <nav>
          {navigation.map((section) => (
            <div key={section.name} className="srcl-sidebar-section">
              <div className="srcl-sidebar-title">{section.name}</div>
              <ul style={{ listStyle: 'none' }}>
                {section.items.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <li key={item.name} style={{ marginBottom: '2px' }}>
                      <Link
                        href={item.href}
                        className={`srcl-sidebar-item ${isActive ? 'active' : ''}`}
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span style={{ opacity: 0.5 }}>{item.icon}</span>
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div style={{
          marginTop: 'auto',
          paddingTop: '16px',
          borderTop: '1px dashed var(--theme-border)',
          fontSize: '11px',
          color: 'var(--theme-foreground-secondary)',
        }}>
          <a
            href="https://github.com/Pranav-Karra-3301/omnivore"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', marginBottom: '8px' }}
          >
            Open source on GitHub
          </a>
          <a
            href="https://omnivore.readthedocs.io/en/latest/"
            target="_blank"
            rel="noopener noreferrer"
          >
            readthedocs.org
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <div style={{ marginLeft: '240px', flex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }} className="md:ml-60">
        {/* Header */}
        <header className="srcl-nav" style={{ position: 'sticky', top: 0, zIndex: 30, justifyContent: 'flex-end' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a
              href="https://omnivore.readthedocs.io/en/latest/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px' }}
            >
              READTHEDOCS
            </a>
            <ThemeToggle />
          </div>
        </header>

        {/* Content */}
        <main className="srcl-main srcl-prose" style={{ maxWidth: '800px' }}>
          {children}

          {/* Footer */}
          <div style={{
            marginTop: '48px',
            paddingTop: '24px',
            borderTop: '1px dashed var(--theme-border)',
            fontSize: '12px',
            color: 'var(--theme-foreground-secondary)',
          }}>
            Built with Rust{' '}
            <a
              href="https://pranavkarra.me"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'underline' }}
            >
              Developed by Pranav Karra
            </a>
          </div>
        </main>
      </div>

      {/* Mobile Responsive Styles */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .srcl-sidebar {
            transform: translateX(-100%);
            transition: transform 200ms ease;
          }
          .srcl-sidebar.open {
            transform: translateX(0) !important;
          }
          .md\\:ml-60 {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </div>
  )
}
