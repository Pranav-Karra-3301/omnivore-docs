import Link from 'next/link'
import CodeBlock from '@/components/CodeBlock'
import Card from '@/components/Card'
import type { Metadata } from 'next'

const ogTitle = 'Documentation - Omnivore'
const ogImageUrl = '/docs_preview.png'

export const metadata: Metadata = {
  title: ogTitle,
  description:
    'Welcome to the comprehensive documentation for Omnivore, the Universal Rust Web Crawler & Knowledge Graph Builder.',
  openGraph: {
    title: ogTitle,
    description:
      'Welcome to the comprehensive documentation for Omnivore, the Universal Rust Web Crawler & Knowledge Graph Builder.',
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: 'Omnivore Documentation' }],
  },
}

export default function DocsPage() {
  return (
    <div>
      <h1>OMNIVORE DOCUMENTATION</h1>

      <p>
        Welcome to the comprehensive documentation for Omnivore, the Universal Rust Web Crawler & Knowledge Graph Builder.
        Get started quickly or dive deep into advanced features.
      </p>

      {/* Quick Navigation Grid */}
      <div className="srcl-grid srcl-grid-3" style={{ marginTop: '32px', marginBottom: '32px' }}>
        <Link href="/docs/installation" className="srcl-feature">
          <div className="srcl-feature-icon">&gt;_</div>
          <div className="srcl-feature-title">Installation</div>
          <p className="srcl-feature-description">
            Get Omnivore installed on your system with Homebrew, Docker, or from source.
          </p>
        </Link>

        <Link href="/docs/quickstart" className="srcl-feature">
          <div className="srcl-feature-icon">⚡</div>
          <div className="srcl-feature-title">Quick Start</div>
          <p className="srcl-feature-description">
            Start crawling websites in minutes with simple commands and examples.
          </p>
        </Link>

        <Link href="/docs/configuration" className="srcl-feature">
          <div className="srcl-feature-icon">⚙</div>
          <div className="srcl-feature-title">Configuration</div>
          <p className="srcl-feature-description">
            Configure Omnivore for your specific crawling needs and use cases.
          </p>
        </Link>

        <Link href="/docs/crawler" className="srcl-feature">
          <div className="srcl-feature-icon">🌐</div>
          <div className="srcl-feature-title">Crawler Engine</div>
          <p className="srcl-feature-description">
            Understand how Omnivore&apos;s parallel crawler engine works under the hood.
          </p>
        </Link>

        <Link href="/docs/knowledge-graphs" className="srcl-feature">
          <div className="srcl-feature-icon">🔗</div>
          <div className="srcl-feature-title">Knowledge Graphs</div>
          <p className="srcl-feature-description">
            Build and query knowledge graphs from your crawled data.
          </p>
        </Link>

        <Link href="/docs/cli" className="srcl-feature">
          <div className="srcl-feature-icon">$</div>
          <div className="srcl-feature-title">CLI Reference</div>
          <p className="srcl-feature-description">
            Complete reference for all CLI commands and options.
          </p>
        </Link>

        <Link href="/docs/git-extraction" className="srcl-feature">
          <div className="srcl-feature-icon">⎇</div>
          <div className="srcl-feature-title">Git Extraction</div>
          <p className="srcl-feature-description">
            Extract and analyze source code from Git repositories with intelligent filtering.
          </p>
        </Link>
      </div>

      <h2>What&apos;s Inside</h2>
      <p>This documentation covers everything you need to know about Omnivore:</p>

      <h3>Core Features</h3>
      <ul>
        <li><strong>Parallel Crawling</strong>: Async/await with Tokio runtime for maximum performance</li>
        <li><strong>Git Repository Analysis</strong>: Extract and analyze source code with intelligent filtering</li>
        <li><strong>Smart Processing</strong>: AI-powered entity recognition and content classification</li>
        <li><strong>Knowledge Graphs</strong>: Build entity-relationship graphs automatically</li>
        <li><strong>Respectful Crawling</strong>: Built-in robots.txt compliance and rate limiting</li>
        <li><strong>Multiple Storage</strong>: Support for RocksDB, PostgreSQL, and graph databases</li>
      </ul>

      <h3>Architecture</h3>
      <ul>
        <li><strong>omnivore-core</strong>: Core crawler and processing engine</li>
        <li><strong>omnivore-cli</strong>: Command-line interface with rich features</li>
        <li><strong>Plugin System</strong>: Extensible architecture for custom processors</li>
      </ul>

      <h3>Deployment Options</h3>
      <ul>
        <li><strong>Homebrew</strong>: Easy installation on macOS and Linux</li>
        <li><strong>Docker</strong>: Containerized deployment with orchestration</li>
        <li><strong>From Source</strong>: Build and customize for your needs</li>
      </ul>

      <h2>Getting Help</h2>
      <Card title="Need Help?">
        <div className="srcl-grid srcl-grid-2" style={{ gap: '24px' }}>
          <div>
            <h4 style={{ marginBottom: '12px' }}>Community Resources</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '8px' }}>
                <a href="https://github.com/Pranav-Karra-3301/omnivore/issues" target="_blank" rel="noopener noreferrer">
                  → GitHub Issues
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="https://github.com/Pranav-Karra-3301/omnivore/discussions" target="_blank" rel="noopener noreferrer">
                  → Discussions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '12px' }}>Documentation</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '8px' }}>
                <a href="https://omnivore.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">
                  → ReadTheDocs
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <Link href="/docs/contributing">→ Contributing Guide</Link>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      <h2>Quick Example</h2>
      <p>Here&apos;s a simple example to get you started:</p>

      <CodeBlock language="bash">{`# Install Omnivore
brew install omnivore

# Crawl a website
omnivore crawl https://example.com --workers 5 --depth 3

# Extract code from a Git repository
omnivore git https://github.com/user/repo --output code-analysis.txt

# Build knowledge graph
omnivore graph crawl-results.json --output knowledge-graph.db`}</CodeBlock>

      <h2>What&apos;s Next?</h2>
      <ul>
        <li><strong>New to Omnivore?</strong> Start with the <Link href="/docs/installation">Installation Guide</Link></li>
        <li><strong>Ready to crawl?</strong> Jump to <Link href="/docs/quickstart">Quick Start</Link></li>
        <li><strong>Want to customize?</strong> Check out <Link href="/docs/configuration">Configuration</Link></li>
        <li><strong>Building integrations?</strong> Explore the CLI and data formats in the docs</li>
      </ul>

      <p style={{ marginTop: '32px', fontSize: '12px', color: 'var(--theme-foreground-secondary)' }}>
        More documentation references are available on{' '}
        <a href="https://omnivore.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">
          readthedocs.org
        </a>.
      </p>
    </div>
  )
}
