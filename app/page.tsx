import Link from 'next/link'
import type { Metadata } from 'next'
import CodeBlock from '@/components/CodeBlock'
import ThemeToggle from '@/components/ThemeToggle'

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: 'https://ov.pranavkarra.me',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://ov.pranavkarra.me/#website',
      url: 'https://ov.pranavkarra.me',
      name: 'Omnivore',
      description:
        'High-performance, parallel web crawler and knowledge graph system built in Rust. Extract, analyze, and graph data from the web at scale.',
      inLanguage: 'en',
      publisher: { '@id': 'https://pranavkarra.me/#person' },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://ov.pranavkarra.me/#software',
      name: 'Omnivore',
      description:
        'Omnivore is a fast, parallel web crawler and data extraction CLI built in Rust. Install it with cargo install omnivore-cli and build knowledge graphs from crawled data at scale.',
      url: 'https://ov.pranavkarra.me',
      downloadUrl: 'https://github.com/Pranav-Karra-3301/omnivore',
      softwareVersion: '0.1.0',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'macOS, Linux',
      programmingLanguage: 'Rust',
      license: 'https://opensource.org/licenses/MIT',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      creator: { '@id': 'https://pranavkarra.me/#person' },
    },
    {
      '@type': 'Person',
      '@id': 'https://pranavkarra.me/#person',
      name: 'Pranav Karra',
      url: 'https://pranavkarra.me',
      sameAs: [
        'https://github.com/Pranav-Karra-3301',
        'https://www.linkedin.com/in/pranavkarra001',
        'https://x.com/pranavkarra',
      ],
    },
  ],
}

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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

      {/* Hero Section */}
      <section className="srcl-hero">
        <div style={{ maxWidth: '64ch', margin: '0 auto' }}>
          <div className="srcl-button-group" style={{ marginBottom: 'calc(var(--line-height) * 2)', justifyContent: 'center', display: 'inline-flex' }}>
            <span className="srcl-button-group-item active">V0.1.0</span>
            <span className="srcl-button-group-item">OPEN SOURCE</span>
            <span className="srcl-button-group-item">RUST</span>
          </div>
          <h1 className="srcl-hero-title">
            UNIVERSAL WEB CRAWLER
            <br />
            AND KNOWLEDGE GRAPH
          </h1>
          <p className="srcl-hero-subtitle">
            High-performance, parallel web crawler and knowledge graph system built in Rust.
            Open source and community-driven. Extract, analyze, and graph data from the web at scale.
          </p>
          <div className="srcl-hero-actions">
            <Link href="/docs/installation" className="srcl-button">
              INSTALL
            </Link>
            <Link href="/docs" className="srcl-button-secondary">
              DOCUMENTATION
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
        </div>
      </section>

      {/* Divider */}
      <div className="srcl-section-header">
        <span>FEATURES</span>
      </div>

      {/* Features Section */}
      <section style={{ padding: 'calc(var(--line-height) * 2) 2ch' }}>
        <div style={{ maxWidth: '80ch', margin: '0 auto' }}>
          <div className="srcl-grid srcl-grid-3">
            <div className="srcl-feature">
              <div className="srcl-feature-icon">{'>>'}</div>
              <div className="srcl-feature-title">Fast</div>
              <p className="srcl-feature-description">
                Process 10,000+ pages per minute with Tokio async runtime
              </p>
            </div>

            <div className="srcl-feature">
              <div className="srcl-feature-icon">{'[]'}</div>
              <div className="srcl-feature-title">Respectful</div>
              <p className="srcl-feature-description">
                Built-in robots.txt compliance and rate limiting
              </p>
            </div>

            <div className="srcl-feature">
              <div className="srcl-feature-icon">{'<>'}</div>
              <div className="srcl-feature-title">Graphs</div>
              <p className="srcl-feature-description">
                Build entity-relationship graphs automatically
              </p>
            </div>

            <div className="srcl-feature">
              <div className="srcl-feature-icon">{'##'}</div>
              <div className="srcl-feature-title">Smart</div>
              <p className="srcl-feature-description">
                AI-powered entity recognition and classification
              </p>
            </div>

            <div className="srcl-feature">
              <div className="srcl-feature-icon">{'::'}</div>
              <div className="srcl-feature-title">Storage</div>
              <p className="srcl-feature-description">
                RocksDB, PostgreSQL, and graph databases
              </p>
            </div>

            <div className="srcl-feature">
              <div className="srcl-feature-icon">{'()'}</div>
              <div className="srcl-feature-title">Browser</div>
              <p className="srcl-feature-description">
                Handle JavaScript-heavy sites with automation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="srcl-section-header">
        <span>INSTALL</span>
      </div>

      {/* Installation Section */}
      <section style={{ padding: 'calc(var(--line-height) * 2) 2ch' }}>
        <div style={{ maxWidth: '64ch', margin: '0 auto' }}>
          <div style={{ marginBottom: 'calc(var(--line-height) * 2)' }}>
            <div style={{ marginBottom: 'var(--line-height)' }}>HOMEBREW</div>
            <CodeBlock language="bash">{`brew tap Pranav-Karra-3301/omnivore
brew install omnivore`}</CodeBlock>
          </div>

          <div style={{ marginBottom: 'calc(var(--line-height) * 2)' }}>
            <div style={{ marginBottom: 'var(--line-height)' }}>DOCKER</div>
            <CodeBlock language="bash">{`docker run --rm -it omnivore:latest omnivore --help`}</CodeBlock>
          </div>

          <div style={{ marginBottom: 'calc(var(--line-height) * 2)' }}>
            <div style={{ marginBottom: 'var(--line-height)' }}>FROM SOURCE</div>
            <CodeBlock language="bash">{`git clone https://github.com/Pranav-Karra-3301/omnivore.git
cd omnivore
cargo install --path omnivore-cli --force`}</CodeBlock>
          </div>

          <div className="srcl-divider" />

          <div style={{ marginBottom: 'calc(var(--line-height) * 2)' }}>
            <div style={{ marginBottom: 'var(--line-height)' }}>FIRST CRAWL</div>
            <CodeBlock language="bash">{`omnivore crawl https://example.com --workers 5 --depth 3`}</CodeBlock>
          </div>

          <div style={{ marginBottom: 'calc(var(--line-height) * 2)' }}>
            <div style={{ marginBottom: 'var(--line-height)' }}>BUILD GRAPH</div>
            <CodeBlock language="bash">{`omnivore graph results.json --output knowledge-graph.db`}</CodeBlock>
          </div>

          <div style={{ textAlign: 'center', marginTop: 'calc(var(--line-height) * 2)' }}>
            <Link href="/docs/quickstart" className="srcl-button">
              FULL GUIDE
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="srcl-footer" style={{ marginTop: 'auto' }}>
        <div className="srcl-footer-content">
          <div className="srcl-footer-grid">
            <div>
              <div style={{ marginBottom: 'var(--line-height)' }}>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>OMNIVORE</span>
              </div>
              <p style={{ color: 'var(--theme-foreground-secondary)' }}>
                Universal web crawler and knowledge graph system built in Rust.
              </p>
            </div>

            <div>
              <h4 className="srcl-footer-section-title">Documentation</h4>
              <Link href="/docs/installation" className="srcl-footer-link">Installation</Link>
              <Link href="/docs/quickstart" className="srcl-footer-link">Quick Start</Link>
              <Link href="/docs/configuration" className="srcl-footer-link">Configuration</Link>
              <Link href="/docs/cli" className="srcl-footer-link">CLI Reference</Link>
            </div>

            <div>
              <h4 className="srcl-footer-section-title">Guides</h4>
              <Link href="/docs/crawler" className="srcl-footer-link">Crawler Engine</Link>
              <Link href="/docs/knowledge-graphs" className="srcl-footer-link">Knowledge Graphs</Link>
              <Link href="/docs/processing" className="srcl-footer-link">Data Processing</Link>
              <Link href="/docs/contributing" className="srcl-footer-link">Contributing</Link>
            </div>

            <div>
              <h4 className="srcl-footer-section-title">Community</h4>
              <a href="https://github.com/Pranav-Karra-3301/omnivore" className="srcl-footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://github.com/Pranav-Karra-3301/omnivore/issues" className="srcl-footer-link" target="_blank" rel="noopener noreferrer">Issues</a>
              <a href="https://github.com/Pranav-Karra-3301/omnivore/discussions" className="srcl-footer-link" target="_blank" rel="noopener noreferrer">Discussions</a>
            </div>
          </div>

          <div className="srcl-footer-bottom">
            <p>2024 Omnivore. Open source under MIT License.</p>
            <p>
              <a href="https://pranavkarra.me" target="_blank" rel="noopener noreferrer">
                Developed by Pranav Karra
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
