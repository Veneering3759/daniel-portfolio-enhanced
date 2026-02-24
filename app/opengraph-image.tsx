import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Daniel Aryee | Full Stack Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0D1117',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Emerald glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(to right, transparent, #10b981, transparent)',
          }}
        />

        {/* Available badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#10b981',
            }}
          />
          <span style={{ color: '#10b981', fontSize: '16px', fontWeight: 600 }}>
            Available for Full-Time &amp; Contract Roles
          </span>
        </div>

        {/* Name */}
        <div style={{ fontSize: '72px', fontWeight: 700, color: '#fff', marginBottom: '8px', lineHeight: 1.1 }}>
          Daniel Aryee
        </div>

        {/* Title */}
        <div style={{ fontSize: '36px', fontWeight: 600, color: '#10b981', marginBottom: '24px' }}>
          Full Stack Developer
        </div>

        {/* Description */}
        <div style={{ fontSize: '22px', color: '#8b949e', maxWidth: '800px', lineHeight: 1.5 }}>
          Stripe-connected SaaS products · Analytics dashboards · Subscription flows
        </div>

        {/* Location */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginTop: '48px',
          }}
        >
          <span style={{ color: '#6e7681', fontSize: '18px' }}>London, UK (GMT)</span>
          <span style={{ color: '#30363d', fontSize: '18px' }}>·</span>
          <span style={{ color: '#6e7681', fontSize: '18px' }}>US/EU Remote</span>
        </div>

        {/* Bottom tech stack */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            right: '80px',
            display: 'flex',
            gap: '12px',
          }}
        >
          {['Next.js', 'TypeScript', 'Stripe', 'MongoDB'].map((tech) => (
            <div
              key={tech}
              style={{
                padding: '6px 14px',
                borderRadius: '6px',
                border: '1px solid #21262d',
                backgroundColor: '#161b22',
                color: '#8b949e',
                fontSize: '15px',
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
