import CodeBlock from '@/components/CodeBlock'
import Alert from '@/components/Alert'
import type { Metadata } from 'next'

const ogImageUrl = '/docs_preview.png'

export const metadata: Metadata = {
  title: 'Git Repository Code Extraction - Omnivore',
  description: 'Intelligently extract meaningful code from Git repositories.',
  openGraph: {
    title: 'Git Repository Code Extraction - Omnivore',
    description: 'Intelligently extract meaningful code from Git repositories.',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'Git Repository Code Extraction - Omnivore',
      },
    ],
  },
};

export default function GitExtractionPage() {
  return (
    <div>
      <h1>Git Repository Code Extraction</h1>

      <p>
        Intelligently extract meaningful code from Git repositories. Automatically filters out noise like build artifacts,
        dependencies, and generated files while preserving the important source code you need for analysis or LLM processing.
      </p>

      <div className="srcl-features">
        <div className="srcl-feature">
          <h3>Smart Filtering</h3>
          <p>Automatically excludes build artifacts, node_modules, and generated files</p>
        </div>
        <div className="srcl-feature">
          <h3>Gitignore Respect</h3>
          <p>Honors .gitignore files by default for accurate extraction</p>
        </div>
        <div className="srcl-feature">
          <h3>Flexible Output</h3>
          <p>Export as JSON, plain text, or preserve directory structure</p>
        </div>
      </div>

      <h2>Workflow Overview</h2>

      <p>
        The Git extraction tool operates in four distinct phases to intelligently extract code:
      </p>

      <div className="srcl-features">
        <div className="srcl-feature">
          <h4>1. Source Acquisition</h4>
          <p>
            Determines if working with a remote URL or local directory. For remote repos, performs a shallow clone.
          </p>
        </div>
        <div className="srcl-feature">
          <h4>2. File Filtering</h4>
          <p>
            Applies intelligent filtering rules to identify important files, respecting .gitignore and user patterns.
          </p>
        </div>
        <div className="srcl-feature">
          <h4>3. Content Aggregation</h4>
          <p>
            Reads filtered files into memory, detecting and skipping binary files automatically.
          </p>
        </div>
        <div className="srcl-feature">
          <h4>4. Output & Cleanup</h4>
          <p>
            Formats content as requested (JSON, text, or directory) and cleans up temporary files.
          </p>
        </div>
      </div>

      <h2>Command Structure</h2>

      <h3>Basic Syntax</h3>
      <CodeBlock language="bash">{`omnivore git <source> [flags]`}</CodeBlock>

      <p>
        The <code>&lt;source&gt;</code> parameter can be:
      </p>
      <ul>
        <li>A remote repository URL: <code>https://github.com/user/repo.git</code></li>
        <li>A local directory path: <code>.</code> or <code>../my-project</code></li>
      </ul>

      <h2>Filtering Options</h2>

      <h3>Include Patterns</h3>
      <p>
        Use <code>--include</code> to switch to whitelist mode, where only files matching specified patterns are kept:
      </p>
      <CodeBlock language="bash">{`# Include only Rust source files and Cargo.toml
omnivore git . --include "src/**/*.rs,Cargo.toml" --json

# Include only JavaScript and TypeScript files
omnivore git https://github.com/user/repo.git \\
  --include "**/*.js,**/*.ts,**/*.jsx,**/*.tsx" \\
  --output ./js-code`}</CodeBlock>

      <h3>Exclude Patterns</h3>
      <p>
        Use <code>--exclude</code> to blacklist specific files or patterns:
      </p>
      <CodeBlock language="bash">{`# Exclude test files and logs
omnivore git . --exclude "*.log,**/*test*,**/*spec*" --txt

# Exclude specific directories
omnivore git . --exclude "target/,dist/,build/" --output ./clean-code`}</CodeBlock>

      <h3>Gitignore Handling</h3>
      <CodeBlock language="bash">{`# Respect .gitignore (default behavior)
omnivore git . --json

# Ignore .gitignore files
omnivore git . --no-gitignore --output ./all-files`}</CodeBlock>

      <h2>Output Formats</h2>

      <h3>JSON Output</h3>
      <p>
        Perfect for programmatic processing and integration with other tools:
      </p>
      <CodeBlock language="bash">{`# Output as JSON to stdout
omnivore git . --json

# Save JSON to file
omnivore git . --json > codebase.json

# Pipe to jq for processing
omnivore git . --json | jq '.[] | select(.path | contains("src"))'`}</CodeBlock>

      <p>JSON structure:</p>
      <CodeBlock language="json">{`[
  {
    "path": "src/main.rs",
    "content": "fn main() {\\n    println!(\\"Hello, world!\\");\\n}"
  },
  {
    "path": "Cargo.toml",
    "content": "[package]\\nname = \\"omnivore\\"\\nversion = \\"0.1.0\\""
  }
]`}</CodeBlock>

      <h3>Text Output</h3>
      <p>
        Ideal for feeding into LLMs or text processing pipelines:
      </p>
      <CodeBlock language="bash">{`# Output as plain text with separators
omnivore git . --txt

# Pipe to an LLM
omnivore git . --txt | llm "Analyze this codebase"

# Save to file
omnivore git . --txt > codebase.txt`}</CodeBlock>

      <p>Text format example:</p>
      <CodeBlock language="text">{`---
File: src/main.rs
---
fn main() {
    println!("Hello, world!");
}
---
File: Cargo.toml
---
[package]
name = "omnivore"
version = "0.1.0"`}</CodeBlock>

      <h3>Directory Output</h3>
      <p>
        Preserves the original file structure in a new directory:
      </p>
      <CodeBlock language="bash">{`# Extract to directory (default if no format specified)
omnivore git https://github.com/user/repo.git --output ./extracted

# Local repository extraction
omnivore git . --output ../clean-copy

# With filtering
omnivore git . \\
  --include "src/**/*" \\
  --output ./src-only`}</CodeBlock>

      <h2>Advanced Features</h2>

      <h3>Binary File Handling</h3>
      <CodeBlock language="bash">{`# Skip binary files (default)
omnivore git . --json

# Include binary files (only works with --output)
omnivore git . --allow-binary --output ./with-binaries

# Binary files are automatically detected and skipped in JSON/TXT modes`}</CodeBlock>

      <h3>Clone Depth Control</h3>
      <CodeBlock language="bash">{`# Shallow clone (default: depth 1)
omnivore git https://github.com/user/repo.git --output ./code

# Specific clone depth
omnivore git https://github.com/user/repo.git --depth 10 --output ./code

# Full clone (all history)
omnivore git https://github.com/user/repo.git --depth 0 --output ./code`}</CodeBlock>

      <h3>File Size Limits</h3>
      <CodeBlock language="bash">{`# Set maximum file size (10MB)
omnivore git . --max-file-size 10485760 --json

# Skip large generated files (1MB limit)
omnivore git . --max-file-size 1048576 --txt`}</CodeBlock>

      <h3>Temporary Clone Management</h3>
      <CodeBlock language="bash">{`# Keep temporary clone for debugging
omnivore git https://github.com/user/repo.git \\
  --keep \\
  --output ./code

# Temporary clones are deleted by default`}</CodeBlock>

      <h2>Filtering Logic</h2>

      <h3>Multi-Layer Filtering Funnel</h3>
      <p>
        Files pass through multiple filtering layers to determine inclusion:
      </p>

      <div className="srcl-features">
        <div className="srcl-feature">
          <h5>1. System Excludes</h5>
          <p>Always ignores: <code>.git/</code>, <code>.svn/</code>, <code>.hg/</code></p>
        </div>
        <div className="srcl-feature">
          <h5>2. .gitignore Processing</h5>
          <p>Respects all .gitignore files (unless <code>--no-gitignore</code>)</p>
        </div>
        <div className="srcl-feature">
          <h5>3. User Excludes</h5>
          <p>Applies <code>--exclude</code> patterns</p>
        </div>
        <div className="srcl-feature">
          <h5>4. Binary Detection</h5>
          <p>Skips binary files (unless <code>--allow-binary</code>)</p>
        </div>
        <div className="srcl-feature">
          <h5>5. User Includes</h5>
          <p>If specified, only keeps files matching <code>--include</code> patterns</p>
        </div>
      </div>

      <h2>Common Use Cases</h2>

      <h3>Prepare Codebase for LLM Analysis</h3>
      <CodeBlock language="bash">{`# Extract only source code as text
omnivore git . \\
  --exclude "**/*test*,**/*spec*,docs/" \\
  --txt | llm "Review this code for security issues"

# Create JSON for structured analysis
omnivore git . \\
  --include "src/**/*.py,*.py" \\
  --json | python analyze_code.py`}</CodeBlock>

      <h3>Repository Migration</h3>
      <CodeBlock language="bash">{`# Clone and clean a repository
omnivore git https://github.com/old/repo.git \\
  --exclude "node_modules/,dist/,*.log" \\
  --output ./clean-repo

# Extract only source files
omnivore git . \\
  --include "src/**/*,package.json,README.md" \\
  --output ../migration/`}</CodeBlock>

      <h3>Code Documentation</h3>
      <CodeBlock language="bash">{`# Extract code for documentation
omnivore git . \\
  --include "**/*.rs" \\
  --exclude "target/,tests/" \\
  --json | jq -r '.[].content' > all_code.txt

# Generate file listing
omnivore git . --json | jq -r '.[].path' > file_list.txt`}</CodeBlock>

      <h3>Multi-Repository Analysis</h3>
      <CodeBlock language="bash">{`#!/bin/bash
# analyze_repos.sh

repos=(
  "https://github.com/user/repo1.git"
  "https://github.com/user/repo2.git"
  "https://github.com/user/repo3.git"
)

for repo in "\${repos[@]}"; do
  name=$(basename "$repo" .git)
  omnivore git "$repo" \\
    --include "**/*.go" \\
    --json > "\${name}.json"
done

# Combine all JSON files
jq -s 'add' *.json > combined.json`}</CodeBlock>

      <h2>Error Handling</h2>

      <h3>Authentication</h3>
      <p>
        The tool relies on system-wide Git credentials. If authentication fails:
      </p>
      <CodeBlock language="bash">{`# For SSH URLs, ensure SSH keys are configured
ssh-add ~/.ssh/id_rsa

# For HTTPS URLs, configure credential helper
git config --global credential.helper cache

# Error message example:
# "Authentication failed. Ensure your Git credentials are configured correctly."`}</CodeBlock>

      <h3>Invalid Repository</h3>
      <CodeBlock language="bash">{`# Local directory must be a Git repository
omnivore git /path/to/non-git-dir --json
# Error: '/path/to/non-git-dir' is not a Git repository

# Verify repository
ls -la .git/  # Should exist for local repos`}</CodeBlock>

      <h3>Conflicting Flags</h3>
      <CodeBlock language="bash">{`# Cannot use multiple output formats
omnivore git . --json --txt
# Error: Cannot use --json and --txt together

# Cannot use format flags with --output
omnivore git . --json --output ./dir
# Error: Cannot use --json with --output`}</CodeBlock>

      <h3>Empty Results</h3>
      <CodeBlock language="bash">{`# If filtering results in no files
omnivore git . --include "*.xyz" --json
# Output: []

omnivore git . --include "*.xyz" --txt
# Output: (empty)

omnivore git . --include "*.xyz" --output ./empty
# Creates empty directory`}</CodeBlock>

      <h2>Performance Considerations</h2>

      <h3>Large Repositories</h3>
      <ul>
        <li>Use shallow clones (<code>--depth 1</code>) for faster operations</li>
        <li>Set file size limits to skip large generated files</li>
        <li>Use specific include patterns to reduce processing</li>
      </ul>

      <CodeBlock language="bash">{`# Optimize for large repos
omnivore git https://github.com/large/repo.git \\
  --depth 1 \\
  --include "src/**/*.java" \\
  --max-file-size 1048576 \\
  --output ./extracted`}</CodeBlock>

      <h3>Memory Management</h3>
      <p>
        For very large codebases, consider processing in chunks:
      </p>
      <CodeBlock language="bash">{`# Process different parts separately
omnivore git . --include "frontend/**/*" --output ./frontend-code
omnivore git . --include "backend/**/*" --output ./backend-code
omnivore git . --include "shared/**/*" --output ./shared-code`}</CodeBlock>

      <h2>Security Considerations</h2>

      <Alert variant="warning" title="Security Notes">
        <ul>
          <li>Symbolic links are not followed to prevent security risks</li>
          <li>Binary files are detected and excluded by default</li>
          <li>File paths are sanitized to prevent directory traversal</li>
          <li>Temporary clones are created in secure system temp directories</li>
          <li>Git credentials are never stored or logged by the tool</li>
        </ul>
      </Alert>

      <h2>Best Practices</h2>

      <Alert variant="success" title="Recommendations">
        <ul>
          <li>Always use shallow clones for remote repositories unless full history is needed</li>
          <li>Set appropriate file size limits to avoid memory issues</li>
          <li>Use include patterns for specific file types when possible</li>
          <li>Test patterns on small repositories first</li>
          <li>Respect .gitignore files unless you have a specific reason not to</li>
          <li>Use JSON output for programmatic processing</li>
          <li>Use text output for LLM consumption</li>
          <li>Keep binary detection enabled for text/JSON outputs</li>
        </ul>
      </Alert>

      <h2>Troubleshooting</h2>

      <h3>Common Issues and Solutions</h3>

      <h4>Network Timeouts</h4>
      <CodeBlock language="bash">{`# Increase Git timeout
git config --global http.postBuffer 524288000
git config --global http.timeout 600

# Use SSH instead of HTTPS
omnivore git git@github.com:user/repo.git --output ./code`}</CodeBlock>

      <h4>Character Encoding Issues</h4>
      <CodeBlock language="bash">{`# Files with non-UTF8 encoding are skipped
# Warning: Skipped file.txt (invalid UTF-8 encoding)

# Convert files to UTF-8 first if needed
iconv -f ISO-8859-1 -t UTF-8 input.txt > output.txt`}</CodeBlock>

      <h4>Large File Warnings</h4>
      <CodeBlock language="bash">{`# Set appropriate size limits
omnivore git . --max-file-size 5242880 --json  # 5MB limit

# Or exclude large file patterns
omnivore git . --exclude "*.sqlite,*.db,*.zip" --json`}</CodeBlock>

      <h2>Integration Examples</h2>

      <h3>GitHub Actions Workflow</h3>
      <CodeBlock language="yaml">{`name: Code Analysis
on: [push, pull_request]

jobs:
  analyze:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Install Omnivore
        run: |
          curl -sSfL https://raw.githubusercontent.com/Pranav-Karra-3301/omnivore/master/install.sh | sh

      - name: Extract Code
        run: |
          omnivore git . \\
            --include "src/**/*.rs" \\
            --json > codebase.json

      - name: Analyze
        run: |
          python analyze.py codebase.json`}</CodeBlock>

      <h3>Pre-commit Hook</h3>
      <CodeBlock language="bash">{`#!/bin/sh
# .git/hooks/pre-commit

# Extract and check code size
size=$(omnivore git . --json | wc -c)
max_size=10485760  # 10MB

if [ $size -gt $max_size ]; then
  echo "Error: Codebase too large ($size bytes)"
  exit 1
fi

echo "Codebase size: $size bytes"`}</CodeBlock>
    </div>
  )
}
