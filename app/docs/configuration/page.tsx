import CodeBlock from '@/components/CodeBlock'
import type { Metadata } from 'next'

const ogImageUrl = '/docs_preview.png'

export const metadata: Metadata = {
  title: 'Configuration - Omnivore',
  description: 'Tune Omnivore for your workload using a simple TOML file.',
  openGraph: {
    title: 'Configuration - Omnivore',
    description: 'Tune Omnivore for your workload using a simple TOML file.',
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: 'Configuration - Omnivore' }],
  },
}

export default function ConfigurationPage() {
  return (
    <div>
      <h1>CONFIGURATION</h1>
      <p>Tune Omnivore for your workload using a simple TOML file.</p>

      <h2>Default Locations</h2>
      <ul>
        <li>~/.config/omnivore/crawler.toml</li>
        <li>/etc/omnivore/crawler.toml</li>
        <li>./crawler.toml</li>
      </ul>

      <h2>Example</h2>
      <CodeBlock language="toml">{`[crawler]
max_workers = 10
max_depth = 5
user_agent = "Omnivore/0.1 (+https://omnivore.pranavkarra.me)"
respect_robots_txt = true

[crawler.politeness]
default_delay_ms = 100
max_requests_per_second = 10.0
backoff_multiplier = 2.0

[storage]
data_dir = "~/.local/share/omnivore"
cache_size_mb = 512`}</CodeBlock>

      <h2>Environment Variables</h2>
      <CodeBlock language="bash">{`# Override config path
OMNIVORE_CONFIG=./crawler.toml omnivore crawl https://example.com`}</CodeBlock>
    </div>
  )
}
