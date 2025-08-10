import type { Metadata } from 'next'

const docsPreviewImage = '/docs_preview.png'

export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        url: docsPreviewImage,
        width: 1200,
        height: 630,
        alt: 'Omnivore Docs Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [docsPreviewImage],
  },
}


