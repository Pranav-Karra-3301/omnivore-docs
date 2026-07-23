# Omnivore Documentation Site

This is the documentation website for [Omnivore](https://github.com/Pranav-Karra-3301/omnivore), a fast, parallel web crawler and data extraction CLI built in Rust. Omnivore crawls the web at scale, extracts structured data, and builds entity relationship knowledge graphs. Install the CLI with `cargo install omnivore-cli`.

The site is live at [ov.pranavkarra.me](https://ov.pranavkarra.me) and is built with Next.js 14 using the SRCL terminal aesthetic.

> Note: This Omnivore is a Rust web crawler and data extraction tool. It is unrelated to the discontinued Omnivore read-later app.

## Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Building for Production

```bash
# Build for production
npm run build

# Export static site
npm run export

# Serve production build
npm start
```

## Structure

```
docs-site/
├── app/                 # Next.js App Router pages
│   ├── docs/           # Documentation pages
│   ├── guides/         # Tutorial and guide pages  
│   ├── api/            # API reference pages
│   ├── examples/       # Example pages
│   └── globals.css     # Global styles
├── components/         # Reusable React components
├── public/            # Static assets
└── styles/            # Additional stylesheets
```

## Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first responsive layout
- **Search**: Full-text search across documentation
- **Syntax Highlighting**: Code blocks with syntax highlighting
- **Dark Mode**: Toggle between light and dark themes
- **Fast Navigation**: Client-side navigation with prefetching
- **SEO Optimized**: Meta tags, OpenGraph, structured data

## Content Management

Documentation content is managed through:
- **React Components**: Pages built as React components
- **MDX Support**: Markdown with React components (planned)
- **Code Examples**: Syntax-highlighted code blocks
- **Interactive Elements**: Live demos and interactive examples

## Deployment

The site can be deployed as:
- **Static Export**: `npm run export` generates static HTML
- **Vercel**: Automatic deployments from Git
- **GitHub Pages**: Static deployment with GitHub Actions
- **Docker**: Containerized deployment

### Environment Variables

```bash
NEXT_PUBLIC_API_URL=https://api.omnivore.dev
NEXT_PUBLIC_GITHUB_URL=https://github.com/Pranav-Karra-3301/omnivore
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the build: `npm run build`
5. Submit a pull request

### Content Guidelines

- Use clear, concise language
- Include code examples for all features
- Add screenshots for visual features
- Test all links and examples
- Follow the existing style and structure

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Typography**: Inter + JetBrains Mono fonts
- **Icons**: Lucide React icons
- **Code Highlighting**: Prism.js with custom themes
- **Build**: TypeScript with strict mode

## License

Documentation content is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
Code examples are licensed under MIT or Apache-2.0 (same as Omnivore).

## Credits

Built by [Pranav Karra](https://pranavkarra.me).