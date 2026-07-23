import type { MetadataRoute } from 'next'

const baseUrl = 'https://ov.pranavkarra.me'

const routes = [
  '',
  '/docs',
  '/docs/installation',
  '/docs/quickstart',
  '/docs/configuration',
  '/docs/crawler',
  '/docs/knowledge-graphs',
  '/docs/processing',
  '/docs/git-extraction',
  '/docs/cli',
  '/docs/contributing',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.7,
  }))
}
