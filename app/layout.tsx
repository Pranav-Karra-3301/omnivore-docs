import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  metadataBase: new URL('https://ov.pranavkarra.me'),
  title: 'Omnivore - Universal Web Crawler & Knowledge Graph',
  description: 'High-performance, parallel web crawler and knowledge graph system built in Rust. Extract, analyze, and graph data from the web at scale.',
  keywords: ['web crawler', 'rust', 'knowledge graph', 'data extraction', 'scraping', 'parallel processing'],
  authors: [{ name: 'Omnivore Team' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Omnivore - Universal Web Crawler & Knowledge Graph',
    description: 'High-performance, parallel web crawler and knowledge graph system built in Rust.',
    type: 'website',
    siteName: 'Omnivore',
    url: 'https://ov.pranavkarra.me',
    images: [
      {
        url: 'https://ov.pranavkarra.me/docs_preview.png',
        width: 1200,
        height: 630,
        alt: 'Omnivore Web Crawler',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omnivore - Universal Web Crawler & Knowledge Graph',
    description: 'High-performance, parallel web crawler and knowledge graph system built in Rust.',
    creator: '@pranavkarra',
    images: ['https://ov.pranavkarra.me/docs_preview.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <script dangerouslySetInnerHTML={{ __html: `(() => {try {const t=localStorage.getItem('theme'); if (t==='light') document.documentElement.classList.add('light');} catch{} })();` }} />
      </body>
    </html>
  )
}
