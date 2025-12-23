'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
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
  const [sidebarExpanded, setSidebarExpanded] = useState(true)

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Drawer */}
      <div className="srcl-drawer" style={{ position: 'fixed', top: 0, left: 0, bottom: 0 }}>
        {/* Sidebar */}
        {sidebarExpanded && (
          <aside className="srcl-drawer-side" style={{ overflowY: 'auto' }}>
            <div className="srcl-sidebar">
              {/* Header */}
              <div style={{ padding: '0 1ch', marginBottom: 'calc(var(--line-height) * 1.5)' }}>
                <Link href="/" className="srcl-nav-logo" style={{ display: 'block', padding: '0' }}>
                  OMNIVORE
                </Link>
                <div style={{ marginTop: 'calc(var(--line-height) * 0.5)', color: 'var(--theme-foreground-secondary)' }}>
                  <Link href="/">Home</Link>
                  <span style={{ padding: '0 0.5ch', color: 'var(--theme-foreground-secondary)' }}>|</span>
                  <a href="https://github.com/Pranav-Karra-3301/omnivore" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="srcl-divider" style={{ margin: '0 0 calc(var(--line-height) * 1)' }} />

              {/* Navigation */}
              <nav>
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
                marginTop: 'calc(var(--line-height) * 2)',
                padding: '0 1ch',
                color: 'var(--theme-foreground-secondary)',
              }}>
                <div className="srcl-divider" style={{ margin: '0 0 calc(var(--line-height) * 1)' }} />
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
        )}

        {/* Toggle */}
        <div className="srcl-drawer-toggle">
          <button
            className="srcl-drawer-action"
            onClick={() => setSidebarExpanded(!sidebarExpanded)}
            aria-label={sidebarExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            {sidebarExpanded ? '\u2190' : '\u2192'}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        marginLeft: sidebarExpanded ? 'calc(24ch + 3ch)' : '3ch',
        flex: 1,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        transition: 'margin-left 200ms ease',
      }}>
        {/* Header */}
        <header className="srcl-nav" style={{ position: 'sticky', top: 0, zIndex: 30 }}>
          <div className="srcl-nav-left">
            {/* Breadcrumbs */}
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
            marginTop: 'calc(var(--line-height) * 3)',
            paddingTop: 'var(--line-height)',
            borderTop: '1px solid var(--theme-border)',
            color: 'var(--theme-foreground-secondary)',
          }}>
            Built with Rust.{' '}
            <a
              href="https://pranavkarra.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              Developed by Pranav Karra
            </a>
          </div>
        </main>
      </div>
    </div>
  )
}
