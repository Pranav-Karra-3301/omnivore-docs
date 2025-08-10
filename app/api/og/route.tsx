
import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Omnivore Documentation';

  // Use the bundled static screenshot as the site preview
  const previewUrl = new URL('/preview.png', req.url).toString();

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
          padding: '40px',
          // Layered gradient + subtle grid
          backgroundImage:
            'radial-gradient(120% 100% at 50% 0%, #c4b5fd 0%, #a78bfa 35%, #c084fc 65%, #a78bfa 100%), linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 60px 60px, 60px 60px',
          backgroundPosition: 'center, center, center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: 20,
              padding: '8px 20px',
              fontSize: 18,
              color: 'white',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            Open Source
          </div>
        </div>

        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: 'white',
            marginBottom: 36,
            textAlign: 'center',
          }}
        >
          {title}
        </div>

        <div
          style={{
            width: 1040,
            height: 430,
            borderRadius: 28,
            overflow: 'hidden',
            position: 'relative',
            border: '1px solid rgba(255,255,255,0.35)',
            boxShadow: '0 25px 70px rgba(62, 34, 98, 0.35)',
            background: 'rgba(255,255,255,0.55)',
            backdropFilter: 'blur(2px)',
          }}
        >
          {/* site screenshot */}
          <img
            src={previewUrl}
            alt="Omnivore Docs Preview"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 40,
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: 16,
          }}
        >
          ov.pranavkarra.me
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
