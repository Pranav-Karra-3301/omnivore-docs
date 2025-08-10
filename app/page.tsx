import Link from 'next/link'
import Image from 'next/image'
import { 
  Zap, 
  Globe, 
  Network, 
  Shield, 
  Cpu, 
  Database,
  ArrowRight,
  Github,
  Book,
  Download,
  Star,
  Users,
  Rocket
} from 'lucide-react'
import CodeBlock from '@/components/CodeBlock'
import ThemeToggle from '@/components/ThemeToggle'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Image 
                  src="/logo.png"
                  alt="Omnivore Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-xl font-bold text-gray-900 dark:text-white">Omnivore</span>
              </div>
              <div className="hidden md:flex space-x-6">
                <Link href="/docs" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Documentation
                </Link>
                <a href="https://omnivore.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                  readthedocs.org
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/Pranav-Karra-3301/omnivore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <div className="hidden sm:block">
                <ThemeToggle />
              </div>
              <Link
                href="/docs/installation"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              <span>v0.1.0 - Beta</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Universal Web Crawler &<br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Knowledge Graph
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              High-performance, parallel web crawler and knowledge graph system built in Rust. Open source and community-driven. 
              Extract, analyze, and graph data from the web at scale with intelligent processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/docs/installation" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                <Download className="w-5 h-5 mr-2" />
                Get Started
              </Link>
              <a
                href="https://omnivore.readthedocs.io/en/latest/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors font-medium"
              >
                <Book className="w-5 h-5 mr-2" />
                readthedocs.org ↗
              </a>
              <a
                href="https://github.com/Pranav-Karra-3301/omnivore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors font-medium"
              >
                <Github className="w-5 h-5 mr-2" />
                View Source
              </a>
            </div>
          </div>
          
          {/* Simple, functional intro: no demo window */}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Built for Scale and Performance
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Omnivore combines cutting-edge Rust performance with intelligent crawling strategies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-hover bg-gray-50/50 dark:bg-gray-900/50 p-6 rounded-xl transition-colors border border-gray-200 dark:border-gray-800">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Lightning Fast</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Process 10,000+ pages per minute with Tokio async runtime and parallel processing
              </p>
            </div>

            <div className="card-hover bg-gray-50/50 dark:bg-gray-900/50 p-6 rounded-xl transition-colors border border-gray-200 dark:border-gray-800">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Respectful Crawling</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Built-in robots.txt compliance and politeness engine with rate limiting
              </p>
            </div>

            <div className="card-hover bg-gray-50/50 dark:bg-gray-900/50 p-6 rounded-xl transition-colors border border-gray-200 dark:border-gray-800">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <Network className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Knowledge Graphs</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Build and query entity-relationship graphs from crawled content automatically
              </p>
            </div>

            <div className="card-hover bg-gray-50/50 dark:bg-gray-900/50 p-6 rounded-xl transition-colors border border-gray-200 dark:border-gray-800">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Smart Processing</h3>
              <p className="text-gray-600 dark:text-gray-300">
                AI-powered entity recognition, content classification, and semantic analysis
              </p>
            </div>

            <div className="card-hover bg-gray-50/50 dark:bg-gray-900/50 p-6 rounded-xl transition-colors border border-gray-200 dark:border-gray-800">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Multiple Storage</h3>
              <p className="text-gray-600 dark:text-gray-300">
                RocksDB, PostgreSQL, and graph database support with vector embeddings
              </p>
            </div>

            <div className="card-hover bg-gray-50/50 dark:bg-gray-900/50 p-6 rounded-xl transition-colors border border-gray-200 dark:border-gray-800">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Browser Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Handle JavaScript-heavy sites with integrated browser automation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Powered by Best-in-Class Technologies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Built with modern Rust ecosystem and proven libraries. Open source and community-driven.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="flex flex-col items-center space-y-2">
              <Image 
                src="https://raw.githubusercontent.com/rust-lang/rust-artwork/master/logo/rust-logo-64x64.png"
                alt="Rust"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Rust</span>
            </div>
            
            <a href="https://tokio.rs/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-2">
              <Image 
                src="https://tokio.rs/img/icons/tokio.svg"
                alt="Tokio"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Tokio</span>
            </a>

            <a href="https://docs.rs/reqwest" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-2">
              <Image 
                src="https://raw.githubusercontent.com/rust-lang/rust-artwork/master/logo/rust-logo-64x64.png"
                alt="Reqwest (Rust)"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Reqwest</span>
            </a>

            <a href="https://serde.rs" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-2">
              <Image 
                src="https://raw.githubusercontent.com/rust-lang/rust-artwork/master/logo/rust-logo-64x64.png"
                alt="Serde (Rust)"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Serde</span>
            </a>

            <div className="flex flex-col items-center space-y-2">
              <Image 
                src="https://avatars.githubusercontent.com/u/56036552?s=200&v=4"
                alt="Axum"
                width={48}
                height={48}
                className="w-12 h-12 rounded-lg"
              />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Axum</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <Image 
                src="https://github.com/clap-rs/clap/raw/master/assets/clap.png"
                alt="Clap"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Clap</span>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Install Omnivore
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose your preferred method. Copy, paste, and run.
            </p>
          </div>

          {/* Three installation methods - stacked */}
          <div className="space-y-10">
            <div className="text-left">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3">
                  <Download className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Homebrew</h3>
              </div>
              <CodeBlock language="bash">{`brew tap Pranav-Karra-3301/omnivore
brew install omnivore`}</CodeBlock>
            </div>

            <div className="text-left">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-3">
                  <Network className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Docker</h3>
              </div>
              <CodeBlock language="bash">{`# Run CLI
docker run --rm -it omnivore:latest omnivore --help

# With persistent data
docker run --rm -v $(pwd)/data:/var/lib/omnivore omnivore:latest`}</CodeBlock>
            </div>

            <div className="text-left">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-3">
                  <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">From Source</h3>
              </div>
              <CodeBlock language="bash">{`git clone https://github.com/Pranav-Karra-3301/omnivore.git
cd omnivore
cargo install --path omnivore-cli --force`}</CodeBlock>
            </div>
          </div>

          {/* Usage examples */}
          <div className="mt-16">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Use Omnivore</h3>
              <p className="text-gray-600 dark:text-gray-300">Copy these commands to get going fast.</p>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First crawl</h4>
                <CodeBlock language="bash">{`omnivore crawl https://example.com --workers 5 --depth 3`}</CodeBlock>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Build knowledge graph</h4>
                <CodeBlock language="bash">{`omnivore graph results.json --output knowledge-graph.db`}</CodeBlock>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link href="/docs/quickstart" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                View Full Guide
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image 
                  src="/logo.png"
                  alt="Omnivore Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-xl font-bold">Omnivore</span>
              </div>
              <p className="text-gray-400 mb-4">
                Universal web crawler and knowledge graph system built in Rust.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/Pranav-Karra-3301/omnivore" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Star className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Documentation</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/docs/installation" className="hover:text-white transition-colors">Installation</Link></li>
                <li><Link href="/docs/quickstart" className="hover:text-white transition-colors">Quick Start</Link></li>
                <li><Link href="/docs/configuration" className="hover:text-white transition-colors">Configuration</Link></li>
                
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Guides</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/guides/basic-crawling" className="hover:text-white transition-colors">Basic Crawling</Link></li>
                <li><Link href="/guides/knowledge-graphs" className="hover:text-white transition-colors">Knowledge Graphs</Link></li>
                <li><Link href="/guides/performance" className="hover:text-white transition-colors">Performance Tuning</Link></li>
                <li><Link href="/guides/deployment" className="hover:text-white transition-colors">Deployment</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://github.com/Pranav-Karra-3301/omnivore" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Discussions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contributing</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 Omnivore. Open source under MIT and Apache-2.0 licenses.
            </p>
            <p className="text-gray-400 mt-4 md:mt-0">
              Built with ❤️ and Rust · <a href="https://pranavkarra.me" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-gray-600 hover:text-white">Developed by Pranav Karra</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}