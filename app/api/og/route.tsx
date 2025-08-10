
import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Omnivore';
  const description = searchParams.get('description') || 'Universal Web Crawler & Knowledge Graph';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          backgroundImage: 'linear-gradient(to bottom right, #E0E7FF 25%, #FFFFFF 50%, #E0E7FF 75%)',
        }}
      >
        <div
            style={{
                width: 100,
                height: 100,
                marginBottom: 20,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 48,
                fontWeight: 'bold',
                color: 'white',
            }}
        >
            O
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            color: '#1F2937',
            marginBottom: 20,
            textAlign: 'center',
            padding: '0 50px',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 30,
            color: '#4B5563',
            textAlign: 'center',
            padding: '0 50px',
          }}
        >
          {description}
        </div>
        <div
            style={{
                position: 'absolute',
                bottom: 40,
                right: 40,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <span style={{ color: '#4B5563', fontSize: 24 }}>omnivore.pranavkarra.me</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
