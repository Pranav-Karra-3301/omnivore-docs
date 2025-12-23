import CodeBlock from '@/components/CodeBlock'
import Alert from '@/components/Alert'
import Card from '@/components/Card'
import type { Metadata } from 'next'

const ogImageUrl = '/docs_preview.png'

export const metadata: Metadata = {
  title: 'Installation Guide - Omnivore',
  description: 'Install Omnivore on macOS, Linux, or in Docker.',
  openGraph: {
    title: 'Installation Guide - Omnivore',
    description: 'Install Omnivore on macOS, Linux, or in Docker.',
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: 'Installation Guide - Omnivore' }],
  },
}

export default function InstallationPage() {
  return (
    <div>
      <h1>INSTALLATION GUIDE</h1>

      <p>
        Install Omnivore on macOS, Linux, or in Docker. Use Homebrew if you want the simplest setup;
        use Docker for containerized runs; or build from source for maximum control.
      </p>

      <div className="srcl-grid srcl-grid-3" style={{ marginTop: '24px', marginBottom: '24px' }}>
        <div className="srcl-feature">
          <div className="srcl-feature-icon">🍺</div>
          <div className="srcl-feature-title">Homebrew</div>
          <p className="srcl-feature-description">Easiest method for macOS and Linux users</p>
        </div>
        <div className="srcl-feature">
          <div className="srcl-feature-icon">🐳</div>
          <div className="srcl-feature-title">Docker</div>
          <p className="srcl-feature-description">Containerized deployment for any platform</p>
        </div>
        <div className="srcl-feature">
          <div className="srcl-feature-icon">&gt;_</div>
          <div className="srcl-feature-title">From Source</div>
          <p className="srcl-feature-description">Build from source for maximum customization</p>
        </div>
      </div>

      <h2>Method 1: Homebrew (Recommended)</h2>
      <Alert variant="success" title="Recommended">
        Recommended for most users on macOS and Linux.
      </Alert>

      <h3>Install from Official Tap</h3>
      <CodeBlock language="bash">{`# Add the Omnivore tap
brew tap Pranav-Karra-3301/omnivore

# Install Omnivore
brew install omnivore`}</CodeBlock>

      <h3>Install from Local Formula</h3>
      <CodeBlock language="bash">{`# Clone the repository
git clone https://github.com/Pranav-Karra-3301/omnivore.git
cd omnivore

# Install from local formula
brew install --build-from-source ./Formula/omnivore.rb`}</CodeBlock>

      <h3>Verify</h3>
      <CodeBlock language="bash">{`# Check version
omnivore --version

# Help
omnivore --help`}</CodeBlock>

      <h2>Method 2: Docker</h2>
      <p>Docker provides a consistent environment across all platforms and includes all dependencies.</p>

      <h3>Quick Start</h3>
      <CodeBlock language="bash">{`# Run Omnivore CLI
docker run --rm -it omnivore:latest omnivore --help

# Run with local storage
docker run --rm -v $(pwd)/data:/var/lib/omnivore omnivore:latest`}</CodeBlock>

      <h3>Docker Compose</h3>
      <CodeBlock language="bash">{`# Clone the repository
git clone https://github.com/Pranav-Karra-3301/omnivore.git
cd omnivore

# Start the stack
docker-compose up -d`}</CodeBlock>

      <h2>Method 3: From Source</h2>
      <Alert variant="info" title="System Requirements">
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li>▪ Rust 1.80+ with Cargo</li>
          <li>▪ Git for cloning the repository</li>
          <li>▪ OpenSSL development headers</li>
          <li>▪ pkg-config (Linux)</li>
        </ul>
      </Alert>

      <h3>Install Rust</h3>
      <CodeBlock language="bash">{`# Install Rust via rustup
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source ~/.cargo/env

# Verify installation
rustc --version
cargo --version`}</CodeBlock>

      <h3>System Dependencies</h3>
      <p><strong>macOS</strong></p>
      <CodeBlock language="bash">{`brew install openssl pkg-config`}</CodeBlock>

      <p><strong>Ubuntu/Debian</strong></p>
      <CodeBlock language="bash">{`sudo apt update
sudo apt install -y build-essential pkg-config libssl-dev git`}</CodeBlock>

      <p><strong>RHEL/CentOS/Fedora</strong></p>
      <CodeBlock language="bash">{`sudo dnf install -y gcc openssl-devel pkg-config git
# or on older systems:
# sudo yum install -y gcc openssl-devel pkgconfig git`}</CodeBlock>

      <h3>Build and Install</h3>
      <CodeBlock language="bash">{`# Clone the repository
git clone https://github.com/Pranav-Karra-3301/omnivore.git
cd omnivore

# Build in release mode
cargo build --release

# Install CLI
cargo install --path omnivore-cli --force

# Or use the Makefile
make install`}</CodeBlock>

      <h3>Shell Completions</h3>
      <CodeBlock language="bash">{`# Generate completions
make completions

# Add to your shell profile (Bash)
echo 'source /path/to/omnivore/completions/omnivore.bash' >> ~/.bashrc

# Add to your shell profile (Zsh)
echo 'source /path/to/omnivore/completions/_omnivore' >> ~/.zshrc`}</CodeBlock>

      <h2>Configuration</h2>
      <p>After installation, configure Omnivore:</p>

      <h3>Create Default Config</h3>
      <CodeBlock language="bash">{`mkdir -p ~/.config/omnivore
omnivore config generate > ~/.config/omnivore/crawler.toml`}</CodeBlock>

      <h3>Example</h3>
      <CodeBlock language="toml">{`[crawler]
max_workers = 10
max_depth = 5
user_agent = "Omnivore/1.0"
respect_robots_txt = true

[crawler.politeness]
default_delay_ms = 100
max_requests_per_second = 10.0

[storage]
data_dir = "~/.local/share/omnivore"
cache_size_mb = 512`}</CodeBlock>

      <h2>Updating</h2>

      <h3>Homebrew</h3>
      <CodeBlock language="bash">{`brew update && brew upgrade omnivore`}</CodeBlock>

      <h3>Docker</h3>
      <CodeBlock language="bash">{`docker pull omnivore:latest
# Or rebuild
docker build -t omnivore:latest .`}</CodeBlock>

      <h3>From Source</h3>
      <CodeBlock language="bash">{`git pull origin main
cargo install --path omnivore-cli --force`}</CodeBlock>

      <h2>Uninstallation</h2>

      <h3>Homebrew</h3>
      <CodeBlock language="bash">{`brew services stop omnivore
brew uninstall omnivore
brew untap Pranav-Karra-3301/omnivore`}</CodeBlock>

      <h3>Cargo</h3>
      <CodeBlock language="bash">{`cargo uninstall omnivore
rm -rf ~/.local/share/omnivore
rm -rf ~/.config/omnivore`}</CodeBlock>

      <h3>Docker</h3>
      <CodeBlock language="bash">{`docker-compose down
docker rmi omnivore:latest
docker volume prune`}</CodeBlock>

      <h2>Troubleshooting</h2>

      <p><strong>Rust not found</strong></p>
      <CodeBlock language="bash">{`source ~/.cargo/env`}</CodeBlock>

      <p><strong>OpenSSL errors on macOS</strong></p>
      <CodeBlock language="bash">{`export OPENSSL_DIR=$(brew --prefix openssl)
export PKG_CONFIG_PATH="$OPENSSL_DIR/lib/pkgconfig"`}</CodeBlock>

      <p><strong>Permission denied</strong></p>
      <CodeBlock language="bash">{`echo 'export PATH="$HOME/.cargo/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc`}</CodeBlock>
    </div>
  )
}
