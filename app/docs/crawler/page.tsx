import CodeBlock from '@/components/CodeBlock'
import Alert from '@/components/Alert'
import type { Metadata } from 'next'

const ogImageUrl = '/docs_preview.png'

export const metadata: Metadata = {
  alternates: { canonical: '/docs/crawler' },
  title: 'Crawler Engine - Omnivore',
  description: "Omnivore's crawler engine is a high-performance, parallel web crawler built with Rust and Tokio.",
  openGraph: {
    title: 'Crawler Engine - Omnivore',
    description: "Omnivore's crawler engine is a high-performance, parallel web crawler built with Rust and Tokio.",
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: 'Crawler Engine - Omnivore' }],
  },
}

export default function CrawlerPage() {
  return (
    <div>
      <h1>CRAWLER ENGINE</h1>

      <p>
        Omnivore&apos;s crawler engine is a high-performance, parallel web crawler built with Rust and Tokio.
        It features intelligent URL frontier management, politeness controls, and automatic rate limiting.
      </p>

      <div className="srcl-grid srcl-grid-3" style={{ marginTop: 'calc(var(--line-height) * 1.5)', marginBottom: 'calc(var(--line-height) * 1.5)' }}>
        <div className="srcl-feature">
          <div className="srcl-feature-icon">{'>>'}</div>
          <div className="srcl-feature-title">10,000+ pages/min</div>
          <p className="srcl-feature-description">Process thousands of pages per minute with parallel workers</p>
        </div>
        <div className="srcl-feature">
          <div className="srcl-feature-icon">{'[]'}</div>
          <div className="srcl-feature-title">Respectful</div>
          <p className="srcl-feature-description">Built-in robots.txt compliance and rate limiting</p>
        </div>
        <div className="srcl-feature">
          <div className="srcl-feature-icon">{'::'}</div>
          <div className="srcl-feature-title">Smart Frontier</div>
          <p className="srcl-feature-description">Intelligent URL management with priority queuing</p>
        </div>
      </div>

      <h2>ARCHITECTURE OVERVIEW</h2>

      <h3>Core Components</h3>

      <h4>1. URL Frontier</h4>
      <p>
        The frontier manages the queue of URLs to be crawled. It implements priority queuing,
        deduplication, and depth tracking:
      </p>
      <ul>
        <li><strong>Priority Queue:</strong> URLs are prioritized based on domain importance and depth</li>
        <li><strong>Deduplication:</strong> Bloom filters prevent crawling the same URL multiple times</li>
        <li><strong>Depth Control:</strong> Configurable maximum depth to prevent infinite crawling</li>
        <li><strong>Domain Buckets:</strong> URLs grouped by domain for politeness enforcement</li>
      </ul>

      <h4>2. Worker Pool</h4>
      <p>Parallel workers powered by Tokio&apos;s async runtime handle concurrent page fetching:</p>
      <CodeBlock language="rust">{`// Worker configuration
pub struct WorkerConfig {
    pub num_workers: usize,      // Number of parallel workers
    pub timeout: Duration,        // Request timeout per page
    pub retry_limit: u32,        // Max retries for failed requests
    pub user_agent: String,      // Custom user agent string
}`}</CodeBlock>

      <h4>3. Politeness Engine</h4>
      <p>Ensures respectful crawling behavior across domains:</p>
      <ul>
        <li><strong>Robots.txt Parser:</strong> Automatic fetching and caching of robots.txt files</li>
        <li><strong>Rate Limiting:</strong> Per-domain request delays (default: 1 second)</li>
        <li><strong>Crawl-Delay:</strong> Respects crawl-delay directives from robots.txt</li>
        <li><strong>Concurrent Limits:</strong> Maximum concurrent requests per domain</li>
      </ul>

      <h4>4. Content Processor</h4>
      <p>Extracts and processes content from fetched pages:</p>
      <ul>
        <li><strong>HTML Parsing:</strong> Fast HTML parsing with scraper crate</li>
        <li><strong>Link Extraction:</strong> Automatic discovery of internal and external links</li>
        <li><strong>Content Extraction:</strong> Text, metadata, and structured data extraction</li>
        <li><strong>JavaScript Support:</strong> Optional headless browser for JS-heavy sites</li>
      </ul>

      <h2>CONFIGURATION</h2>

      <h3>Basic Configuration</h3>
      <CodeBlock language="toml">{`[crawler]
# Number of parallel workers
workers = 10

# Maximum crawl depth
max_depth = 3

# Request timeout in seconds
timeout = 30

# User agent string
user_agent = "Omnivore/0.1.0"

# Respect robots.txt
respect_robots = true

# Delay between requests to same domain (ms)
politeness_delay = 1000`}</CodeBlock>

      <h3>Advanced Configuration</h3>
      <CodeBlock language="toml">{`[crawler.advanced]
# URL frontier settings
frontier_size = 100000
priority_queue = true
bloom_filter_size = 10000000

# Network settings
max_redirects = 5
connect_timeout = 10
dns_cache_size = 1000

# Content settings
max_page_size = 10485760  # 10MB
accepted_content_types = ["text/html", "application/xhtml+xml"]
extract_links = true
extract_metadata = true

# Storage settings
checkpoint_interval = 1000
compression = "gzip"`}</CodeBlock>

      <h2>USAGE EXAMPLES</h2>

      <h3>Basic Crawl</h3>
      <CodeBlock language="bash">{`# Simple crawl with default settings
omnivore crawl https://example.com

# Crawl with custom workers and depth
omnivore crawl https://example.com --workers 20 --depth 5

# Crawl with output to file
omnivore crawl https://example.com --output results.json`}</CodeBlock>

      <h3>Advanced Crawl</h3>
      <CodeBlock language="bash">{`# Crawl with custom configuration
omnivore crawl https://example.com --config crawler.toml

# Crawl with filtering
omnivore crawl https://example.com \\
  --include-pattern "*/blog/*" \\
  --exclude-pattern "*/admin/*"

# Crawl with custom headers
omnivore crawl https://example.com \\
  --header "Authorization: Bearer token" \\
  --header "Accept-Language: en-US"`}</CodeBlock>

      <h3>Programmatic Usage</h3>
      <CodeBlock language="rust">{`use omnivore::{Crawler, CrawlerConfig};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Create crawler configuration
    let config = CrawlerConfig::builder()
        .workers(10)
        .max_depth(3)
        .politeness_delay(1000)
        .build();

    // Initialize crawler
    let mut crawler = Crawler::new(config);

    // Set callbacks
    crawler.on_page_crawled(|page| {
        println!("Crawled: {}", page.url);
    });

    // Start crawling
    let results = crawler
        .crawl("https://example.com")
        .await?;

    println!("Crawled {} pages", results.len());
    Ok(())
}`}</CodeBlock>

      <h2>PERFORMANCE TUNING</h2>

      <h3>Worker Optimization</h3>
      <p>The number of workers should be tuned based on your system resources and target sites:</p>
      <ul>
        <li><strong>CPU-bound:</strong> Set workers to 2x CPU cores for optimal performance</li>
        <li><strong>Network-bound:</strong> Can increase workers up to 100+ for slow sites</li>
        <li><strong>Memory:</strong> Each worker consumes ~10-50MB depending on page size</li>
      </ul>

      <CodeBlock language="bash">{`# For CPU-bound processing (heavy parsing)
omnivore crawl https://example.com --workers 16

# For network-bound crawling (slow sites)
omnivore crawl https://slow-site.com --workers 100

# Memory-constrained environment
omnivore crawl https://example.com --workers 5 --max-page-size 1048576`}</CodeBlock>

      <h2>BEST PRACTICES</h2>
      <Alert variant="info" title="Recommended Settings">
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li>- Start with low workers (5-10) and increase gradually</li>
          <li>- Always respect robots.txt unless you have permission</li>
          <li>- Use appropriate delays (1-2 seconds minimum)</li>
          <li>- Set reasonable depth limits (3-5 for most sites)</li>
          <li>- Monitor memory usage and adjust workers accordingly</li>
          <li>- Use checkpointing for large crawls</li>
          <li>- Implement proper error handling and logging</li>
        </ul>
      </Alert>

      <h2>TROUBLESHOOTING</h2>

      <h3>Common Issues</h3>

      <h4>High Memory Usage</h4>
      <CodeBlock language="bash">{`# Reduce workers and page size
omnivore crawl https://example.com \\
  --workers 5 \\
  --max-page-size 1048576 \\
  --frontier-size 10000`}</CodeBlock>

      <h4>Slow Crawling</h4>
      <CodeBlock language="bash">{`# Increase workers and reduce delays
omnivore crawl https://example.com \\
  --workers 50 \\
  --politeness-delay 500 \\
  --timeout 10`}</CodeBlock>

      <h4>Blocked by Site</h4>
      <CodeBlock language="bash">{`# Use custom user agent and headers
omnivore crawl https://example.com \\
  --user-agent "Mozilla/5.0..." \\
  --header "Accept: text/html" \\
  --crawl-delay 3000`}</CodeBlock>
    </div>
  )
}
