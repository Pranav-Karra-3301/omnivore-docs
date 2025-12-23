import CodeBlock from '@/components/CodeBlock'
import type { Metadata } from 'next'

const ogImageUrl = '/docs_preview.png'

export const metadata: Metadata = {
  title: 'CLI Reference - Omnivore',
  description: 'Key commands available in the Omnivore CLI.',
  openGraph: {
    title: 'CLI Reference - Omnivore',
    description: 'Key commands available in the Omnivore CLI.',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'CLI Reference - Omnivore',
      },
    ],
  },
};

export default function CLIPage() {
  return (
    <div>
      <h1>CLI Reference</h1>
      <p>Key commands available in the Omnivore CLI.</p>

      <h2>Commands</h2>
      <h3>crawl</h3>
      <p>Start a web crawl from one or more seed URLs.</p>
      <CodeBlock language="bash">{`# Basic crawl with default settings
omnivore crawl https://example.com

# Advanced crawl with options
omnivore crawl https://example.com --workers 5 --depth 3 --output results.json`}</CodeBlock>

      <h3>git</h3>
      <p>Extract and analyze code from Git repositories with intelligent filtering.</p>
      <CodeBlock language="bash">{`# Analyze a GitHub repository
omnivore git https://github.com/rust-lang/cargo --output cargo-analysis.txt

# Analyze local repository
omnivore git . --output project-code.txt

# Extract specific file types
omnivore git ./my-project --only "*.rs,*.toml" --output rust-files.txt`}</CodeBlock>

      <h3>parse</h3>
      <p>Parse HTML content and extract structured data.</p>
      <CodeBlock language="bash">{`omnivore parse index.html --rules parser-rules.yaml`}</CodeBlock>

      <h3>graph</h3>
      <p>Build knowledge graphs from crawled data (under development).</p>
      <CodeBlock language="bash">{`omnivore graph results.json --output knowledge-graph.db`}</CodeBlock>
    </div>
  )
}
