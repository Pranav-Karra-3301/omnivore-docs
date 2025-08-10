import { GitBranch, GitPullRequest, Bug, MessageSquare, Code, CheckCircle } from 'lucide-react'
import CodeBlock from '@/components/CodeBlock'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contributing to Omnivore - Omnivore',
  description: 'Omnivore is an open-source project and we welcome contributions from the community!',
  openGraph: {
    title: 'Contributing to Omnivore - Omnivore',
    description: 'Omnivore is an open-source project and we welcome contributions from the community!',
    images: [
      {
        url: `/api/og?title=Contributing to Omnivore`,
        width: 1200,
        height: 630,
        alt: 'Contributing to Omnivore - Omnivore',
      },
    ],
  },
};

export default function ContributingPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Contributing to Omnivore</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Omnivore is an open-source project and we welcome contributions from the community! Whether you&apos;re fixing bugs, 
        adding features, improving documentation, or reporting issues, your help is valuable.
      </p>

      <div className="not-prose grid md:grid-cols-2 gap-6 my-12">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
            <Bug className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Report Issues</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Found a bug? Let us know on GitHub Issues</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-xl p-6 border border-green-200 dark:border-green-800">
          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
            <GitPullRequest className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Submit PRs</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Contribute code improvements and new features</p>
        </div>
      </div>

      <h2>Getting Started</h2>

      <h3>1. Fork and Clone</h3>
      <p>Start by forking the repository and cloning it locally:</p>
      <CodeBlock language="bash">{`# Fork the repository on GitHub, then:
git clone https://github.com/Pranav-Karra-3301/omnivore.git
cd omnivore
git remote add upstream https://github.com/Pranav-Karra-3301/omnivore.git`}</CodeBlock>

      <h3>2. Set Up Development Environment</h3>
      <p>Ensure you have Rust and Cargo installed:</p>
      <CodeBlock language="bash">{`# Install Rust (if not already installed)
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Verify installation
rustc --version
cargo --version

# Build the project
cargo build

# Run tests
cargo test`}</CodeBlock>

      <h3>3. Create a Branch</h3>
      <p>Create a new branch for your feature or fix:</p>
      <CodeBlock language="bash">{`git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-description`}</CodeBlock>

      <h2>Development Workflow</h2>

      <h3>Code Style</h3>
      <ul>
        <li>Follow Rust&apos;s official style guidelines</li>
        <li>Use <code>cargo fmt</code> to format your code</li>
        <li>Run <code>cargo clippy</code> to catch common mistakes</li>
        <li>Ensure all tests pass with <code>cargo test</code></li>
      </ul>

      <CodeBlock language="bash">{`# Format code
cargo fmt

# Run linter
cargo clippy

# Run tests
cargo test

# Run specific test
cargo test test_name`}</CodeBlock>

      <h3>Commit Guidelines</h3>
      <p>Write clear, descriptive commit messages following this format:</p>
      <CodeBlock language="text">{`type(scope): brief description

Longer description if needed. Explain the problem this commit
solves and any important details.

Fixes #123`}</CodeBlock>

      <p>Types:</p>
      <ul>
        <li><code>feat</code>: New feature</li>
        <li><code>fix</code>: Bug fix</li>
        <li><code>docs</code>: Documentation changes</li>
        <li><code>test</code>: Adding or updating tests</li>
        <li><code>refactor</code>: Code refactoring</li>
        <li><code>perf</code>: Performance improvements</li>
        <li><code>chore</code>: Maintenance tasks</li>
      </ul>

      <h2>Submitting Pull Requests</h2>

      <h3>Before Submitting</h3>
      <div className="not-prose bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
        <div className="flex items-start">
          <CheckCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-2 mt-0.5" />
          <div>
            <p className="text-yellow-800 dark:text-yellow-200 font-medium">PR Checklist</p>
            <ul className="text-yellow-700 dark:text-yellow-300 text-sm mt-2 space-y-1">
              <li>✓ Code follows project style guidelines</li>
              <li>✓ All tests pass locally</li>
              <li>✓ Documentation is updated if needed</li>
              <li>✓ Commit messages are clear and descriptive</li>
              <li>✓ PR description explains the changes</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Submit Your PR</h3>
      <CodeBlock language="bash">{`# Push your branch
git push origin feature/your-feature-name

# Then create a PR on GitHub`}</CodeBlock>

      <h3>PR Description Template</h3>
      <CodeBlock language="markdown">{`## Description
Brief description of what this PR does.

## Related Issue
Fixes #(issue number)

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement

## Testing
- [ ] Tests pass locally
- [ ] Added new tests for changes

## Screenshots (if applicable)
Add screenshots here if UI changes are involved.`}</CodeBlock>

      <h2>Reporting Issues</h2>

      <h3>Before Opening an Issue</h3>
      <ul>
        <li>Search existing issues to avoid duplicates</li>
        <li>Check if the issue is already fixed in the latest version</li>
        <li>Gather relevant information about your environment</li>
      </ul>

      <h3>Issue Template</h3>
      <CodeBlock language="markdown">{`## Description
Clear description of the issue.

## Steps to Reproduce
1. Step one
2. Step two
3. ...

## Expected Behavior
What should happen?

## Actual Behavior
What actually happens?

## Environment
- OS: [e.g., macOS 14.0]
- Rust version: [e.g., 1.75.0]
- Omnivore version: [e.g., 0.1.0]

## Additional Context
Any other relevant information.`}</CodeBlock>

      <h2>Areas for Contribution</h2>

      <div className="not-prose grid gap-4 my-8">
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Code className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
            <h4 className="font-semibold text-gray-900 dark:text-white">Core Features</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Crawler improvements, performance optimizations, new parsing strategies
          </p>
        </div>
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <GitBranch className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
            <h4 className="font-semibold text-gray-900 dark:text-white">Knowledge Graph</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Entity extraction, relationship mapping, graph algorithms
          </p>
        </div>
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <MessageSquare className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
            <h4 className="font-semibold text-gray-900 dark:text-white">Documentation</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Improve docs, add examples, translate content, fix typos
          </p>
        </div>
      </div>

      <h2>Community</h2>

      <p>Join our community to discuss ideas, ask questions, and collaborate:</p>
      <ul>
        <li><a href="https://github.com/Pranav-Karra-3301/omnivore/discussions" target="_blank" rel="noopener noreferrer">GitHub Discussions</a> - General discussions and Q&A</li>
        <li><a href="https://github.com/Pranav-Karra-3301/omnivore/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a> - Bug reports and feature requests</li>
      </ul>

      <h2>Code of Conduct</h2>
      <p>
        We are committed to providing a welcoming and inclusive environment. Please:
      </p>
      <ul>
        <li>Be respectful and considerate</li>
        <li>Welcome newcomers and help them get started</li>
        <li>Focus on constructive criticism</li>
        <li>Respect differing viewpoints and experiences</li>
      </ul>

      <div className="not-prose bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-6 mt-12">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Thank You!</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Your contributions make Omnivore better for everyone. We appreciate your time and effort in improving this project!
        </p>
      </div>
    </div>
  )
}