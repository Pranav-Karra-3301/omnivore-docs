'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import ThemeToggle from '@/components/ThemeToggle'

const navigation = [
  {
    name: 'Getting Started',
    items: [
      { name: 'Installation', href: '/docs/installation' },
      { name: 'Quick Start', href: '/docs/quickstart' },
      { name: 'Configuration', href: '/docs/configuration' },
    ]
  },
  {
    name: 'Core Concepts',
    items: [
      { name: 'Crawler Engine', href: '/docs/crawler' },
      { name: 'Knowledge Graphs', href: '/docs/knowledge-graphs' },
      { name: 'Data Processing', href: '/docs/processing' },
      { name: 'Git Extraction', href: '/docs/git-extraction' },
    ]
  },
  {
    name: 'Reference',
    items: [
      { name: 'CLI Commands', href: '/docs/cli' },
      { name: 'Contributing', href: '/docs/contributing' },
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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
      if (window.innerWidth > 768) {
        setSidebarOpen(true)
      }
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Close sidebar on mobile when navigating
  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false)
    }
  }, [pathname, isMobile])

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Mobile overlay */}
      {isMobile && sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 40,
          }}
        />
      )}

      {/* Sidebar */}
      <aside
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: isMobile ? '80vw' : '24ch',
          maxWidth: '300px',
          backgroundColor: 'var(--theme-background)',
          borderRight: '1px solid var(--theme-border)',
          transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 200ms ease',
          zIndex: 50,
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div className="srcl-sidebar" style={{ flex: 1 }}>
          {/* Header */}
          <div style={{ padding: '0 1ch', marginBottom: 'var(--line-height)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Link href="/" className="srcl-nav-logo" style={{ padding: 0 }}>
                OMNIVORE
              </Link>
              {isMobile && (
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="srcl-drawer-action"
                  style={{ width: 'auto', padding: '0 1ch' }}
                >
                  X
                </button>
              )}
            </div>
            <div style={{ marginTop: 'calc(var(--line-height) * 0.5)', color: 'var(--theme-foreground-secondary)' }}>
              <Link href="/">Home</Link>
              <span style={{ padding: '0 0.5ch' }}>|</span>
              <a href="https://github.com/Pranav-Karra-3301/omnivore" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>

          <div className="srcl-divider" style={{ margin: '0' }} />

          {/* Navigation */}
          <nav style={{ marginTop: 'var(--line-height)' }}>
            {navigation.map((section) => (
              <div key={section.name} className="srcl-sidebar-section">
                <div className="srcl-sidebar-title">{section.name}</div>
                <ul style={{ listStyle: 'none' }}>
                  {section.items.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={`srcl-sidebar-item ${isActive ? 'active' : ''}`}
                        >
                          {item.name}
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
            padding: 'var(--line-height) 1ch',
            color: 'var(--theme-foreground-secondary)',
            borderTop: '1px solid var(--theme-border)',
          }}>
            <a
              href="https://github.com/Pranav-Karra-3301/omnivore"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', marginBottom: 'calc(var(--line-height) * 0.5)' }}
            >
              GitHub
            </a>
            <a
              href="https://omnivore.readthedocs.io/en/latest/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ReadTheDocs
            </a>
          </div>
        </div>
      </aside>

      {/* Toggle button (always visible) */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: sidebarOpen && !isMobile ? '24ch' : 0,
          bottom: 0,
          width: '3ch',
          backgroundColor: 'var(--theme-background-input)',
          borderRight: '1px solid var(--theme-border)',
          zIndex: 45,
          transition: 'left 200ms ease',
        }}
      >
        <button
          className="srcl-drawer-action"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
        >
          {sidebarOpen ? '\u2190' : '\u2192'}
        </button>
      </div>

      {/* Main Content */}
      <div style={{
        marginLeft: sidebarOpen && !isMobile ? 'calc(24ch + 3ch)' : '3ch',
        flex: 1,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        transition: 'margin-left 200ms ease',
      }}>
        {/* Header */}
        <header className="srcl-nav" style={{ position: 'sticky', top: 0, zIndex: 30 }}>
          <div className="srcl-nav-left">
            <nav className="srcl-breadcrumbs" style={{ margin: 0 }}>
              <span className="srcl-breadcrumb-item">
                <Link href="/docs">docs</Link>
              </span>
              {pathname !== '/docs' && (
                <>
                  <span className="srcl-breadcrumb-separator">{'\u276F'}</span>
                  <span className="srcl-breadcrumb-item">
                    {pathname.split('/').pop()}
                  </span>
                </>
              )}
            </nav>
          </div>
          <div className="srcl-nav-children" />
          <div className="srcl-nav-right">
            <a
              href="https://omnivore.readthedocs.io/en/latest/"
              target="_blank"
              rel="noopener noreferrer"
              className="srcl-nav-link"
            >
              DOCS
            </a>
            <ThemeToggle />
          </div>
        </header>

        {/* Content */}
        <main className="srcl-main" style={{ maxWidth: '72ch' }}>
          {children}

          {/* Footer */}
          <div style={{
            marginTop: 'calc(var(--line-height) * 2)',
            paddingTop: 'var(--line-height)',
            borderTop: '1px solid var(--theme-border)',
            color: 'var(--theme-foreground-secondary)',
          }}>
            Built with Rust.{' '}
            <a href="https://pranavkarra.me" target="_blank" rel="noopener noreferrer">
              Pranav Karra
            </a>
          </div>
        </main>
      </div>
    </div>
  )
}
