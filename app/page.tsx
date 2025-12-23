import Link from 'next/link'
import Image from 'next/image'
import CodeBlock from '@/components/CodeBlock'
import ThemeToggle from '@/components/ThemeToggle'

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <nav className="srcl-nav">
        <div className="srcl-nav-logo">
          <Image
            src="/logo.png"
            alt="Omnivore Logo"
            width={28}
            height={28}
            style={{ width: '28px', height: '28px' }}
          />
          <span>OMNIVORE</span>
        </div>
        <div className="srcl-nav-links md:flex" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <Link href="/docs" className="srcl-nav-link">
            Documentation
          </Link>
          <a
            href="https://omnivore.readthedocs.io/en/latest/"
            target="_blank"
            rel="noopener noreferrer"
            className="srcl-nav-link"
          >
            ReadTheDocs
          </a>
          <a
            href="https://github.com/Pranav-Karra-3301/omnivore"
            target="_blank"
            rel="noopener noreferrer"
            className="srcl-nav-link"
          >
            GitHub
          </a>
          <ThemeToggle />
          <Link href="/docs/installation" className="srcl-button">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="srcl-hero">
        <div className="srcl-container">
          <div className="srcl-badge srcl-badge-primary" style={{ marginBottom: '24px' }}>
            V0.1.0 - OPEN SOURCE
          </div>
          <h1 className="srcl-hero-title">
            UNIVERSAL WEB CRAWLER
            <br />
            & KNOWLEDGE GRAPH
          </h1>
          <p className="srcl-hero-subtitle">
            High-performance, parallel web crawler and knowledge graph system built in Rust.
            Open source and community-driven. Extract, analyze, and graph data from the web at scale.
          </p>
          <div className="srcl-hero-actions">
            <Link href="/docs/installation" className="srcl-button">
              {'>_'} INSTALL
            </Link>
            <a
              href="https://omnivore.readthedocs.io/en/latest/"
              target="_blank"
              rel="noopener noreferrer"
              className="srcl-button srcl-button-secondary"
            >
              READTHEDOCS
            </a>
            <a
              href="https://github.com/Pranav-Karra-3301/omnivore"
              target="_blank"
              rel="noopener noreferrer"
              className="srcl-button srcl-button-secondary"
            >
              VIEW SOURCE
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '48px 16px' }}>
        <div className="srcl-container">
          <h2 style={{ textAlign: 'center', marginBottom: '8px' }}>BUILT FOR SCALE AND PERFORMANCE</h2>
          <p style={{ textAlign: 'center', marginBottom: '48px' }}>
            Omnivore combines cutting-edge Rust performance with intelligent crawling strategies
          </p>

          <div className="srcl-grid srcl-grid-3" style={{ gap: '16px' }}>
            <div className="srcl-feature">
              <div className="srcl-feature-icon">⚡</div>
              <div className="srcl-feature-title">Lightning Fast</div>
              <p className="srcl-feature-description">
                Process 10,000+ pages per minute with Tokio async runtime and parallel processing
              </p>
            </div>

            <div className="srcl-feature">
              <div className="srcl-feature-icon">🛡</div>
              <div className="srcl-feature-title">Respectful Crawling</div>
              <p className="srcl-feature-description">
                Built-in robots.txt compliance and politeness engine with rate limiting
              </p>
            </div>

            <div className="srcl-feature">
              <div className="srcl-feature-icon">🔗</div>
              <div className="srcl-feature-title">Knowledge Graphs</div>
              <p className="srcl-feature-description">
                Build and query entity-relationship graphs from crawled content automatically
              </p>
            </div>

            <div className="srcl-feature">
              <div className="srcl-feature-icon">🧠</div>
              <div className="srcl-feature-title">Smart Processing</div>
              <p className="srcl-feature-description">
                AI-powered entity recognition, content classification, and semantic analysis
              </p>
            </div>

            <div className="srcl-feature">
              <div className="srcl-feature-icon">💾</div>
              <div className="srcl-feature-title">Multiple Storage</div>
              <p className="srcl-feature-description">
                RocksDB, PostgreSQL, and graph database support with vector embeddings
              </p>
            </div>

            <div className="srcl-feature">
              <div className="srcl-feature-icon">🌐</div>
              <div className="srcl-feature-title">Browser Support</div>
              <p className="srcl-feature-description">
                Handle JavaScript-heavy sites with integrated browser automation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section style={{ padding: '48px 16px', borderTop: '1px solid var(--theme-border)', borderBottom: '1px solid var(--theme-border)' }}>
        <div className="srcl-container">
          <h2 style={{ textAlign: 'center', marginBottom: '8px' }}>POWERED BY BEST-IN-CLASS TECHNOLOGIES</h2>
          <p style={{ textAlign: 'center', marginBottom: '48px' }}>
            Built with modern Rust ecosystem and proven libraries. Open source and community-driven.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <Image
                src="https://raw.githubusercontent.com/rust-lang/rust-artwork/master/logo/rust-logo-64x64.png"
                alt="Rust"
                width={48}
                height={48}
                style={{ width: '48px', height: '48px' }}
              />
              <div style={{ marginTop: '8px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Rust</div>
            </div>
            <a href="https://tokio.rs/" target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center' }}>
              <Image
                src="https://tokio.rs/img/icons/tokio.svg"
                alt="Tokio"
                width={48}
                height={48}
                style={{ width: '48px', height: '48px' }}
                className="dark:invert"
              />
              <div style={{ marginTop: '8px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Tokio</div>
            </a>
            <div style={{ textAlign: 'center' }}>
              <Image
                src="https://avatars.githubusercontent.com/u/56036552?s=200&v=4"
                alt="Axum"
                width={48}
                height={48}
                style={{ width: '48px', height: '48px', borderRadius: '8px' }}
              />
              <div style={{ marginTop: '8px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Axum</div>
            </div>
            <a href="https://serde.rs" target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center' }}>
              <Image
                src="https://raw.githubusercontent.com/rust-lang/rust-artwork/master/logo/rust-logo-64x64.png"
                alt="Serde"
                width={48}
                height={48}
                style={{ width: '48px', height: '48px' }}
              />
              <div style={{ marginTop: '8px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Serde</div>
            </a>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section style={{ padding: '48px 16px' }}>
        <div className="srcl-container" style={{ maxWidth: '800px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '8px' }}>INSTALL OMNIVORE</h2>
          <p style={{ textAlign: 'center', marginBottom: '48px' }}>
            Choose your preferred method. Copy, paste, and run.
          </p>

          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', gap: '12px' }}>
              <span style={{ fontSize: '16px' }}>🍺</span>
              <span style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Homebrew</span>
            </div>
            <CodeBlock language="bash">{`brew tap Pranav-Karra-3301/omnivore
brew install omnivore`}</CodeBlock>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', gap: '12px' }}>
              <span style={{ fontSize: '16px' }}>🐳</span>
              <span style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Docker</span>
            </div>
            <CodeBlock language="bash">{`# Run CLI
docker run --rm -it omnivore:latest omnivore --help

# With persistent data
docker run --rm -v $(pwd)/data:/var/lib/omnivore omnivore:latest`}</CodeBlock>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', gap: '12px' }}>
              <span style={{ fontSize: '16px' }}>📦</span>
              <span style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>From Source</span>
            </div>
            <CodeBlock language="bash">{`git clone https://github.com/Pranav-Karra-3301/omnivore.git
cd omnivore
cargo install --path omnivore-cli --force`}</CodeBlock>
          </div>

          <div className="srcl-divider srcl-divider-dashed" />

          <h3 style={{ textAlign: 'center', marginBottom: '24px' }}>USE OMNIVORE</h3>

          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', gap: '8px' }}>
              <span style={{ fontSize: '14px' }}>🌐</span>
              <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>First crawl</span>
            </div>
            <CodeBlock language="bash">{`omnivore crawl https://example.com --workers 5 --depth 3`}</CodeBlock>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', gap: '8px' }}>
              <span style={{ fontSize: '14px' }}>🔗</span>
              <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Build knowledge graph</span>
            </div>
            <CodeBlock language="bash">{`omnivore graph results.json --output knowledge-graph.db`}</CodeBlock>
          </div>

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/docs/quickstart" className="srcl-button">
              VIEW FULL GUIDE →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="srcl-footer" style={{ marginTop: 'auto' }}>
        <div className="srcl-footer-content">
          <div className="srcl-footer-grid">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <Image
                  src="/logo.png"
                  alt="Omnivore Logo"
                  width={24}
                  height={24}
                  style={{ width: '24px', height: '24px' }}
                />
                <span style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px' }}>OMNIVORE</span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--theme-foreground-secondary)', lineHeight: '1.5' }}>
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
            <p>© 2024 Omnivore. Open source under MIT License.</p>
            <p>
              Built with Rust{' '}
              <a href="https://pranavkarra.me" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                Developed by Pranav Karra
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
