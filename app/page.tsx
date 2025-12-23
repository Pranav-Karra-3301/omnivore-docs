import Link from 'next/link'
import CodeBlock from '@/components/CodeBlock'
import ThemeToggle from '@/components/ThemeToggle'

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <nav className="srcl-nav">
        <Link href="/" className="srcl-nav-logo">
          OMNIVORE
        </Link>
        <div className="srcl-nav-children" />
        <div className="srcl-nav-right" style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/docs" className="srcl-nav-link">
            DOCS
          </Link>
          <a
            href="https://omnivore.readthedocs.io/en/latest/"
            target="_blank"
            rel="noopener noreferrer"
            className="srcl-nav-link"
          >
            READTHEDOCS
          </a>
          <a
            href="https://github.com/Pranav-Karra-3301/omnivore"
            target="_blank"
            rel="noopener noreferrer"
            className="srcl-nav-link"
          >
            GITHUB
          </a>
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero Section - Compact */}
      <section className="srcl-hero">
        <div className="srcl-button-group" style={{ marginBottom: 'var(--line-height)' }}>
          <span className="srcl-button-group-item active">V0.1.0</span>
          <span className="srcl-button-group-item">OPEN SOURCE</span>
          <span className="srcl-button-group-item">RUST</span>
        </div>
        <h1 className="srcl-hero-title">
          UNIVERSAL WEB CRAWLER AND KNOWLEDGE GRAPH
        </h1>
        <p className="srcl-hero-subtitle">
          High-performance parallel crawler built in Rust. Extract, analyze, and graph data at scale.
        </p>
        <div className="srcl-hero-actions">
          <Link href="/docs/installation" className="srcl-button">
            INSTALL
          </Link>
          <Link href="/docs" className="srcl-button-secondary">
            DOCS
          </Link>
          <a
            href="https://github.com/Pranav-Karra-3301/omnivore"
            target="_blank"
            rel="noopener noreferrer"
            className="srcl-button-secondary"
          >
            SOURCE
          </a>
        </div>
      </section>

      {/* Two Column Layout - Features + Install */}
      <div className="srcl-two-col" style={{ display: 'flex', flex: 1 }}>
        {/* Features Column */}
        <section style={{ flex: 1, borderRight: '1px solid var(--theme-border)', padding: 'var(--line-height) 1ch' }}>
          <div className="srcl-section-header" style={{ margin: '0 0 var(--line-height)' }}>
            <span>FEATURES</span>
          </div>
          <div className="srcl-grid srcl-grid-2" style={{ gap: '1ch' }}>
            <div className="srcl-feature">
              <div className="srcl-feature-icon">{'>>'}</div>
              <div className="srcl-feature-title">Fast</div>
              <p className="srcl-feature-description">10,000+ pages/min with Tokio async</p>
            </div>
            <div className="srcl-feature">
              <div className="srcl-feature-icon">{'[]'}</div>
              <div className="srcl-feature-title">Respectful</div>
              <p className="srcl-feature-description">robots.txt compliance, rate limiting</p>
            </div>
            <div className="srcl-feature">
              <div className="srcl-feature-icon">{'<>'}</div>
              <div className="srcl-feature-title">Graphs</div>
              <p className="srcl-feature-description">Auto entity-relationship graphs</p>
            </div>
            <div className="srcl-feature">
              <div className="srcl-feature-icon">{'##'}</div>
              <div className="srcl-feature-title">Smart</div>
              <p className="srcl-feature-description">AI entity recognition</p>
            </div>
            <div className="srcl-feature">
              <div className="srcl-feature-icon">{'::'}</div>
              <div className="srcl-feature-title">Storage</div>
              <p className="srcl-feature-description">RocksDB, PostgreSQL, graphs</p>
            </div>
            <div className="srcl-feature">
              <div className="srcl-feature-icon">{'()'}</div>
              <div className="srcl-feature-title">Browser</div>
              <p className="srcl-feature-description">JS-heavy site automation</p>
            </div>
          </div>
        </section>

        {/* Install Column */}
        <section style={{ flex: 1, padding: 'var(--line-height) 1ch' }}>
          <div className="srcl-section-header" style={{ margin: '0 0 var(--line-height)' }}>
            <span>INSTALL</span>
          </div>

          <div style={{ marginBottom: 'var(--line-height)' }}>
            <div style={{ marginBottom: 'calc(var(--line-height) * 0.5)', color: 'var(--theme-foreground-secondary)' }}>HOMEBREW</div>
            <CodeBlock language="bash">{`brew tap Pranav-Karra-3301/omnivore
brew install omnivore`}</CodeBlock>
          </div>

          <div style={{ marginBottom: 'var(--line-height)' }}>
            <div style={{ marginBottom: 'calc(var(--line-height) * 0.5)', color: 'var(--theme-foreground-secondary)' }}>DOCKER</div>
            <CodeBlock language="bash">{`docker run --rm -it omnivore:latest --help`}</CodeBlock>
          </div>

          <div style={{ marginBottom: 'var(--line-height)' }}>
            <div style={{ marginBottom: 'calc(var(--line-height) * 0.5)', color: 'var(--theme-foreground-secondary)' }}>FROM SOURCE</div>
            <CodeBlock language="bash">{`git clone https://github.com/Pranav-Karra-3301/omnivore.git
cd omnivore && cargo install --path omnivore-cli`}</CodeBlock>
          </div>

          <div className="srcl-divider" />

          <div style={{ marginBottom: 'var(--line-height)' }}>
            <div style={{ marginBottom: 'calc(var(--line-height) * 0.5)', color: 'var(--theme-foreground-secondary)' }}>USAGE</div>
            <CodeBlock language="bash">{`omnivore crawl https://example.com --workers 5 --depth 3
omnivore graph results.json --output graph.db`}</CodeBlock>
          </div>

          <Link href="/docs/quickstart" className="srcl-button" style={{ width: '100%', justifyContent: 'center' }}>
            FULL GUIDE
          </Link>
        </section>
      </div>

      {/* Footer - Compact */}
      <footer className="srcl-footer" style={{ padding: 'var(--line-height) 2ch' }}>
        <div className="srcl-footer-content">
          <div className="srcl-footer-grid">
            <div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>OMNIVORE</span>
              <p style={{ color: 'var(--theme-foreground-secondary)', marginTop: 'calc(var(--line-height) * 0.5)' }}>
                Universal web crawler built in Rust.
              </p>
            </div>
            <div>
              <h4 className="srcl-footer-section-title">Docs</h4>
              <Link href="/docs/installation" className="srcl-footer-link">Installation</Link>
              <Link href="/docs/quickstart" className="srcl-footer-link">Quick Start</Link>
              <Link href="/docs/cli" className="srcl-footer-link">CLI Reference</Link>
            </div>
            <div>
              <h4 className="srcl-footer-section-title">Guides</h4>
              <Link href="/docs/crawler" className="srcl-footer-link">Crawler</Link>
              <Link href="/docs/knowledge-graphs" className="srcl-footer-link">Knowledge Graphs</Link>
              <Link href="/docs/processing" className="srcl-footer-link">Processing</Link>
            </div>
            <div>
              <h4 className="srcl-footer-section-title">Links</h4>
              <a href="https://github.com/Pranav-Karra-3301/omnivore" className="srcl-footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://github.com/Pranav-Karra-3301/omnivore/issues" className="srcl-footer-link" target="_blank" rel="noopener noreferrer">Issues</a>
              <a href="https://omnivore.readthedocs.io" className="srcl-footer-link" target="_blank" rel="noopener noreferrer">ReadTheDocs</a>
            </div>
          </div>
          <div className="srcl-footer-bottom" style={{ marginTop: 'var(--line-height)', paddingTop: 'calc(var(--line-height) * 0.5)' }}>
            <p>2024 Omnivore. MIT License.</p>
            <a href="https://pranavkarra.me" target="_blank" rel="noopener noreferrer">Pranav Karra</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
