interface ExoticaLogoProps {
  className?: string;
  size?: 'small' | 'default' | 'large' | 'hero';
  /** 'mark' = boxed monogram tile (matches PNG); 'open' = transparent, no tile */
  variant?: 'mark' | 'open' | 'wordmark';
  /** Color of the EA letters and subtitle */
  tone?: 'ink' | 'cream' | 'gold';
  /** Tile background color when variant === 'mark'. 'transparent' renders with no fill. */
  tile?: 'ink' | 'cream' | 'transparent';
  showSubtitle?: boolean;
}

const SIZE_MAP = {
  small: { box: 36, letter: 18, subtitle: 6, gap: 8, wordmark: 14 },
  default: { box: 56, letter: 28, subtitle: 8, gap: 10, wordmark: 18 },
  large: { box: 96, letter: 48, subtitle: 11, gap: 14, wordmark: 28 },
  hero: { box: 200, letter: 100, subtitle: 14, gap: 18, wordmark: 44 },
} as const;

const TONE_MAP = {
  ink: '#111111',
  cream: '#F2EDE3',
  gold: '#B8935B',
} as const;

const TILE_MAP = {
  ink: '#111111',
  cream: '#F2EDE3',
  transparent: 'transparent',
} as const;

function MonogramTile({
  size,
  tone,
  tile,
  showSubtitle,
}: {
  size: typeof SIZE_MAP[keyof typeof SIZE_MAP];
  tone: 'ink' | 'cream' | 'gold';
  tile: 'ink' | 'cream' | 'transparent';
  showSubtitle: boolean;
}) {
  const fill = TONE_MAP[tone];
  const bg = TILE_MAP[tile];
  const borderColor = tile === 'transparent' ? fill : 'transparent';

  return (
    <div
      className="relative inline-flex flex-col items-center justify-center select-none"
      style={{
        width: size.box,
        height: size.box,
        background: bg,
        border: tile === 'transparent' ? `1px solid ${fill}33` : 'none',
        boxSizing: 'border-box',
      }}
      aria-hidden="true"
    >
      {/* Letters */}
      <div
        className="flex items-baseline relative"
        style={{
          fontFamily: 'Fraunces, Georgia, serif',
          fontWeight: 600,
          color: fill,
          letterSpacing: '0.04em',
          fontSize: size.letter,
          lineHeight: 1,
          marginTop: showSubtitle ? size.box * 0.05 : 0,
        }}
      >
        <span style={{ fontStyle: 'normal', paddingRight: size.letter * 0.18 }}>E</span>
        <span
          style={{
            position: 'absolute',
            left: '50%',
            top: '8%',
            bottom: showSubtitle ? '32%' : '8%',
            width: 1,
            background: fill,
            opacity: 0.55,
            transform: 'translateX(-50%)',
          }}
        />
        <span style={{ fontStyle: 'normal', paddingLeft: size.letter * 0.18 }}>A</span>
      </div>

      {showSubtitle && (
        <div
          style={{
            color: fill,
            fontFamily: 'Inter, sans-serif',
            fontSize: size.subtitle,
            letterSpacing: '0.45em',
            marginTop: size.subtitle * 0.6,
            paddingLeft: '0.45em',
            opacity: 0.85,
          }}
        >
          EXOTICA&nbsp;&middot;&nbsp;AGENCY
        </div>
      )}

      {/* Decorative border lines accents (subtle) */}
      {tile !== 'transparent' && (
        <>
          <span
            style={{
              position: 'absolute',
              top: size.box * 0.08,
              left: size.box * 0.08,
              right: size.box * 0.08,
              height: 1,
              background: fill,
              opacity: 0,
            }}
          />
          <span
            style={{
              position: 'absolute',
              bottom: size.box * 0.08,
              left: size.box * 0.08,
              right: size.box * 0.08,
              height: 1,
              background: fill,
              opacity: 0,
            }}
          />
        </>
      )}

      {/* keep TS happy with borderColor reference */}
      <span style={{ display: 'none' }} data-bc={borderColor} />
    </div>
  );
}

function Wordmark({
  size,
  tone,
}: {
  size: typeof SIZE_MAP[keyof typeof SIZE_MAP];
  tone: 'ink' | 'cream' | 'gold';
}) {
  const fill = TONE_MAP[tone];
  return (
    <div className="flex flex-col leading-none" style={{ color: fill }}>
      <span
        style={{
          fontFamily: 'Fraunces, Georgia, serif',
          fontWeight: 600,
          fontSize: size.wordmark,
          letterSpacing: '0.06em',
          lineHeight: 1,
        }}
      >
        EXOTICA
      </span>
      <span
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: Math.max(8, size.wordmark * 0.32),
          letterSpacing: '0.5em',
          marginTop: size.wordmark * 0.3,
          paddingLeft: '0.5em',
          opacity: 0.7,
        }}
      >
        AGENCY
      </span>
    </div>
  );
}

export default function ExoticaLogo({
  className = '',
  size = 'default',
  variant = 'mark',
  tone = 'ink',
  tile = 'ink',
  showSubtitle = true,
}: ExoticaLogoProps) {
  const dim = SIZE_MAP[size];

  if (variant === 'wordmark') {
    return (
      <div className={className}>
        <Wordmark size={dim} tone={tone} />
      </div>
    );
  }

  // 'mark' uses the configured tile (default 'ink' to match the PNG).
  // 'open' forces a transparent tile and inverts subtitle visibility for compact lockups.
  const effectiveTile = variant === 'open' ? 'transparent' : tile;
  const effectiveSubtitle = variant === 'open' ? false : showSubtitle;

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <MonogramTile size={dim} tone={tone} tile={effectiveTile} showSubtitle={effectiveSubtitle} />
      {variant === 'mark' && (
        <Wordmark size={dim} tone={tone === 'cream' ? 'cream' : tone} />
      )}
    </div>
  );
}
