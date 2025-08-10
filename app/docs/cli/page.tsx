import CodeBlock from '@/components/CodeBlock'
import type { Metadata } from 'next'

const ogImageUrl = `/api/og?title=${encodeURIComponent('CLI Reference')}`

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
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">CLI Reference</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Key commands available in the Omnivore CLI.</p>

      <h2>Commands</h2>
      <h3>crawl</h3>
      <CodeBlock language="bash">{`omnivore crawl https://example.com --workers 5 --depth 3`}</CodeBlock>

      <h3>parse</h3>
      <CodeBlock language="bash">{`omnivore parse index.html --rules parser-rules.yaml`}</CodeBlock>

      <h3>graph</h3>
      <CodeBlock language="bash">{`omnivore graph results.json --output knowledge-graph.db`}</CodeBlock>
    </div>
  )
}
