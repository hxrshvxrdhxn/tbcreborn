import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 144,
  height: 144,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1C1C1C',
          borderRadius: '34px',
        }}
      >
        <span
          style={{
            color: '#D4AF37',
            fontSize: '52px',
            fontWeight: 900,
            fontFamily: 'sans-serif',
            letterSpacing: '-1.5px',
          }}
        >
          TBC
        </span>
      </div>
    ),
    { ...size }
  )
}
