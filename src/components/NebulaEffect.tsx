import * as React from 'react'

/**
 * Enhanced nebula / particle sphere effect - Antimatter-style central glow.
 * Uses layered SVG gradients and filters for a rich, atmospheric orb.
 */
export function NebulaEffect() {
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100vw,900px)] h-[min(100vw,900px)] pointer-events-none overflow-visible isolate"
      style={{ contain: "layout paint" }}
      aria-hidden
    >
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full opacity-50 nebula-pulse"
      >
        <defs>
          {/* Soft outer glow */}
          <radialGradient id="nebula-outer" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.15)" />
            <stop offset="40%" stopColor="rgba(99, 102, 241, 0.04)" />
            <stop offset="70%" stopColor="rgba(99, 102, 241, 0.01)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Mid-tone purple core */}
          <radialGradient id="nebula-mid" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(129, 140, 248, 0.25)" />
            <stop offset="30%" stopColor="rgba(99, 102, 241, 0.12)" />
            <stop offset="60%" stopColor="rgba(99, 102, 241, 0.03)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Bright core / hot spot */}
          <radialGradient id="nebula-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.08)" />
            <stop offset="25%" stopColor="rgba(167, 139, 250, 0.1)" />
            <stop offset="50%" stopColor="rgba(99, 102, 241, 0.05)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Light source highlight - top-left (like Antimatter) */}
          <radialGradient
            id="nebula-highlight"
            cx="35%"
            cy="35%"
            r="50%"
          >
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.12)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.02)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Secondary accent - deeper purple */}
          <radialGradient id="nebula-accent" cx="55%" cy="55%" r="45%">
            <stop offset="0%" stopColor="rgba(79, 70, 229, 0.08)" />
            <stop offset="60%" stopColor="rgba(99, 102, 241, 0.02)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Blur filter for soft edges */}
          <filter id="blur-soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="25" />
          </filter>
          <filter id="blur-medium" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
          </filter>
        </defs>

        {/* Layer 1: Largest outer diffuse glow */}
        <circle
          cx="200"
          cy="200"
          r="180"
          fill="url(#nebula-outer)"
          filter="url(#blur-soft)"
        />

        {/* Layer 2: Mid-tone body */}
        <circle
          cx="200"
          cy="200"
          r="140"
          fill="url(#nebula-mid)"
          filter="url(#blur-medium)"
        />

        {/* Layer 3: Accent layer */}
        <circle
          cx="200"
          cy="200"
          r="120"
          fill="url(#nebula-accent)"
          filter="url(#blur-medium)"
        />

        {/* Layer 4: Bright core */}
        <circle
          cx="200"
          cy="200"
          r="90"
          fill="url(#nebula-core)"
          filter="url(#blur-medium)"
        />

        {/* Layer 5: Light source highlight */}
        <circle
          cx="200"
          cy="200"
          r="100"
          fill="url(#nebula-highlight)"
          filter="url(#blur-soft)"
        />
      </svg>

      {/* CSS-only particle haze overlay - adds diffusion */}
      <div
        className="absolute inset-0 rounded-full opacity-30"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.04) 0%, transparent 50%)',
          filter: 'blur(30px)',
        }}
      />
    </div>
  )
}
