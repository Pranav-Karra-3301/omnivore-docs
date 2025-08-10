import { Globe, Cpu, Shield, Zap, Settings, Database, Network, GitBranch } from 'lucide-react'
import CodeBlock from '@/components/CodeBlock'
import type { Metadata } from 'next'

const ogImageUrl = `/api/og?title=${encodeURIComponent('Crawler Engine')}`

export const metadata: Metadata = {
  title: 'Crawler Engine - Omnivore',
  description: "Omnivore's crawler engine is a high-performance, parallel web crawler built with Rust and Tokio.",
  openGraph: {
    title: 'Crawler Engine - Omnivore',
    description: "Omnivore's crawler engine is a high-performance, parallel web crawler built with Rust and Tokio.",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'Crawler Engine - Omnivore',
      },
    ],
  },
};

export default function CrawlerPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Crawler Engine</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Omnivore&apos;s crawler engine is a high-performance, parallel web crawler built with Rust and Tokio. 
        It features intelligent URL frontier management, politeness controls, and automatic rate limiting.
      </p>

      <div className="not-prose grid md:grid-cols-3 gap-6 my-12">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">10,000+ pages/min</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Process thousands of pages per minute with parallel workers</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-xl p-6 border border-green-200 dark:border-green-800">
          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Respectful</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Built-in robots.txt compliance and rate limiting</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
          <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
            <Network className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Smart Frontier</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Intelligent URL management with priority queuing</p>
        </div>
      </div>

      <h2>Architecture Overview</h2>
      
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
      <p>
        Parallel workers powered by Tokio&apos;s async runtime handle concurrent page fetching:
      </p>
      <CodeBlock language="rust">{`// Worker configuration
pub struct WorkerConfig {
    pub num_workers: usize,      // Number of parallel workers
    pub timeout: Duration,        // Request timeout per page
    pub retry_limit: u32,        // Max retries for failed requests
    pub user_agent: String,      // Custom user agent string
}`}</CodeBlock>

      <h4>3. Politeness Engine</h4>
      <p>
        Ensures respectful crawling behavior across domains:
      </p>
      <ul>
        <li><strong>Robots.txt Parser:</strong> Automatic fetching and caching of robots.txt files</li>
        <li><strong>Rate Limiting:</strong> Per-domain request delays (default: 1 second)</li>
        <li><strong>Crawl-Delay:</strong> Respects crawl-delay directives from robots.txt</li>
        <li><strong>Concurrent Limits:</strong> Maximum concurrent requests per domain</li>
      </ul>

      <h4>4. Content Processor</h4>
      <p>
        Extracts and processes content from fetched pages:
      </p>
      <ul>
        <li><strong>HTML Parsing:</strong> Fast HTML parsing with scraper crate</li>
        <li><strong>Link Extraction:</strong> Automatic discovery of internal and external links</li>
        <li><strong>Content Extraction:</strong> Text, metadata, and structured data extraction</li>
        <li><strong>JavaScript Support:</strong> Optional headless browser for JS-heavy sites</li>
      </ul>

      <h2>Configuration</h2>

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

      <h2>Usage Examples</h2>

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

      <h2>Performance Tuning</h2>

      <h3>Worker Optimization</h3>
      <p>
        The number of workers should be tuned based on your system resources and target sites:
      </p>
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

      <h3>Frontier Optimization</h3>
      <CodeBlock language="toml">{`[crawler.frontier]
# Increase for large crawls
max_urls = 1000000

# Use priority queue for important URLs first
priority_mode = "domain_rank"

# Bloom filter for deduplication
bloom_filter_error_rate = 0.001

# Checkpoint frequently for resumability
checkpoint_interval = 5000`}</CodeBlock>

      <h2>Politeness & Compliance</h2>

      <h3>Robots.txt Handling</h3>
      <p>
        Omnivore automatically fetches and respects robots.txt files:
      </p>
      <CodeBlock language="bash">{`# Check robots.txt compliance for a URL
omnivore check-robots https://example.com/page

# Override robots.txt (use with caution)
omnivore crawl https://example.com --ignore-robots

# Custom crawl delay
omnivore crawl https://example.com --crawl-delay 2000`}</CodeBlock>

      <h3>Rate Limiting</h3>
      <CodeBlock language="toml">{`[crawler.rate_limits]
# Default delay between requests (ms)
default_delay = 1000

# Per-domain overrides
[crawler.rate_limits.domains]
"api.example.com" = 5000  # 5 seconds for API endpoints
"slow-site.com" = 2000    # 2 seconds for slow sites

# Concurrent connection limits
max_concurrent_per_domain = 2
max_concurrent_total = 50`}</CodeBlock>

      <h2>Error Handling</h2>

      <h3>Retry Logic</h3>
      <CodeBlock language="toml">{`[crawler.retry]
# Maximum retry attempts
max_retries = 3

# Exponential backoff
initial_delay = 1000
max_delay = 30000
exponential_base = 2

# Retry on these status codes
retry_status_codes = [429, 500, 502, 503, 504]`}</CodeBlock>

      <h3>Error Recovery</h3>
      <CodeBlock language="bash">{`# Resume from checkpoint after failure
omnivore crawl --resume checkpoint.json

# Skip errors and continue
omnivore crawl https://example.com --skip-errors

# Log errors to file
omnivore crawl https://example.com --error-log errors.log`}</CodeBlock>

      <h2>Monitoring & Debugging</h2>

      <h3>Progress Monitoring</h3>
      <CodeBlock language="bash">{`# Verbose output with progress
omnivore crawl https://example.com -v

# JSON progress output
omnivore crawl https://example.com --progress-format json

# Real-time statistics
omnivore crawl https://example.com --stats-interval 5`}</CodeBlock>

      <h3>Debug Mode</h3>
      <CodeBlock language="bash">{`# Enable debug logging
RUST_LOG=debug omnivore crawl https://example.com

# Trace specific components
RUST_LOG=omnivore::crawler=trace omnivore crawl https://example.com

# Save debug output
omnivore crawl https://example.com --debug > debug.log 2>&1`}</CodeBlock>

      <h2>Best Practices</h2>

      <div className="not-prose bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recommended Settings</h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>✓ Start with low workers (5-10) and increase gradually</li>
          <li>✓ Always respect robots.txt unless you have permission</li>
          <li>✓ Use appropriate delays (1-2 seconds minimum)</li>
          <li>✓ Set reasonable depth limits (3-5 for most sites)</li>
          <li>✓ Monitor memory usage and adjust workers accordingly</li>
          <li>✓ Use checkpointing for large crawls</li>
          <li>✓ Implement proper error handling and logging</li>
        </ul>
      </div>

      <h2>Troubleshooting</h2>

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