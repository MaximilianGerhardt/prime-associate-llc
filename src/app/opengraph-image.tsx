import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Prime Associates LLC - Global AI Business Accelerator'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
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
          backgroundColor: '#0A0A0A',
          backgroundImage: 'radial-gradient(circle at 25% 25%, #1a1a1a 0%, #0A0A0A 50%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 400,
              color: '#FAFAFA',
              marginBottom: 16,
              fontFamily: 'Georgia, serif',
            }}
          >
            Prime <span style={{ color: '#C9A962' }}>Associates</span>
          </div>
          <div
            style={{
              fontSize: 14,
              letterSpacing: '0.3em',
              color: '#888',
              textTransform: 'uppercase',
              marginBottom: 48,
            }}
          >
            LLC
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#C9A962',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: 24,
            }}
          >
            Global AI Business Accelerator
          </div>
          <div
            style={{
              fontSize: 20,
              color: '#888',
              maxWidth: 700,
              textAlign: 'center',
              lineHeight: 1.6,
            }}
          >
            Capital • AI Infrastructure • Execution Power
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 32,
            color: '#666',
            fontSize: 14,
          }}
        >
          <span>$500K - $10M Capital</span>
          <span style={{ color: '#C9A962' }}>•</span>
          <span>90-Day Results</span>
          <span style={{ color: '#C9A962' }}>•</span>
          <span>Tier-1 Partners</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
