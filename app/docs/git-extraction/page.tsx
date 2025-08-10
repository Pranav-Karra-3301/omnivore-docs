import { GitBranch, FileCode, Filter, Download, FolderOpen, Terminal, Shield, Zap } from 'lucide-react'
import CodeBlock from '@/components/CodeBlock'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Git Repository Code Extraction - Omnivore',
  description: 'Intelligently extract meaningful code from Git repositories.',
  openGraph: {
    title: 'Git Repository Code Extraction - Omnivore',
    description: 'Intelligently extract meaningful code from Git repositories.',
    images: [
      {
        url: `/api/og?title=Git Repository Code Extraction`,
        width: 1200,
        height: 630,
        alt: 'Git Repository Code Extraction - Omnivore',
      },
    ],
  },
};

export default function GitExtractionPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Git Repository Code Extraction</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Intelligently extract meaningful code from Git repositories. Automatically filters out noise like build artifacts, 
        dependencies, and generated files while preserving the important source code you need for analysis or LLM processing.
      </p>

      <div className="not-prose grid md:grid-cols-3 gap-6 my-12">
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
          <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
            <Filter className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Smart Filtering</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Automatically excludes build artifacts, node_modules, and generated files</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Gitignore Respect</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Honors .gitignore files by default for accurate extraction</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-xl p-6 border border-green-200 dark:border-green-800">
          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
            <FileCode className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Flexible Output</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Export as JSON, plain text, or preserve directory structure</p>
        </div>
      </div>

      <h2>Workflow Overview</h2>

      <p>
        The Git extraction tool operates in four distinct phases to intelligently extract code:
      </p>

      <div className="not-prose my-8">
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">1</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Source Acquisition</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Determines if working with a remote URL or local directory. For remote repos, performs a shallow clone.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">2</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">File Filtering</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Applies intelligent filtering rules to identify important files, respecting .gitignore and user patterns.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">3</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Content Aggregation</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Reads filtered files into memory, detecting and skipping binary files automatically.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">4</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Output & Cleanup</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Formats content as requested (JSON, text, or directory) and cleans up temporary files.
              </p>
            </div>
          </div>
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

      <div className="not-prose my-8">
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-red-100 dark:bg-red-900 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-red-600 dark:text-red-400">1</span>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 dark:text-white">System Excludes</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300">Always ignores: <code>.git/</code>, <code>.svn/</code>, <code>.hg/</code></p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-orange-100 dark:bg-orange-900 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-orange-600 dark:text-orange-400">2</span>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 dark:text-white">.gitignore Processing</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300">Respects all .gitignore files (unless <code>--no-gitignore</code>)</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-yellow-100 dark:bg-yellow-900 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400">3</span>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 dark:text-white">User Excludes</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300">Applies <code>--exclude</code> patterns</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400">4</span>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 dark:text-white">Binary Detection</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300">Skips binary files (unless <code>--allow-binary</code>)</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-green-600 dark:text-green-400">5</span>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 dark:text-white">User Includes</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300">If specified, only keeps files matching <code>--include</code> patterns</p>
            </div>
          </div>
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

      <div className="not-prose bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 my-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Security Notes</h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>⚠️ Symbolic links are not followed to prevent security risks</li>
          <li>⚠️ Binary files are detected and excluded by default</li>
          <li>⚠️ File paths are sanitized to prevent directory traversal</li>
          <li>⚠️ Temporary clones are created in secure system temp directories</li>
          <li>⚠️ Git credentials are never stored or logged by the tool</li>
        </ul>
      </div>

      <h2>Best Practices</h2>

      <div className="not-prose bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recommendations</h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>✓ Always use shallow clones for remote repositories unless full history is needed</li>
          <li>✓ Set appropriate file size limits to avoid memory issues</li>
          <li>✓ Use include patterns for specific file types when possible</li>
          <li>✓ Test patterns on small repositories first</li>
          <li>✓ Respect .gitignore files unless you have a specific reason not to</li>
          <li>✓ Use JSON output for programmatic processing</li>
          <li>✓ Use text output for LLM consumption</li>
          <li>✓ Keep binary detection enabled for text/JSON outputs</li>
        </ul>
      </div>

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