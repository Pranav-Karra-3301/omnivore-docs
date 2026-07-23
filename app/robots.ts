import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://ov.pranavkarra.me/sitemap.xml',
    host: 'https://ov.pranavkarra.me',
  }
}
