// Server Component — renders the hidden SVG defs/symbols used site-wide.
export default function SvgSymbols() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }}>
      <defs>
        {/* Gradient a — navy → blue */}
        <linearGradient id="a" x1="0" x2="1">
          <stop offset="0" stopColor="#19224e" />
          <stop offset="1" stopColor="#005889" />
        </linearGradient>

        {/* Gradient b — copper → gold */}
        <linearGradient id="b" x1="0" x2="1">
          <stop offset="0" stopColor="#ae6127" />
          <stop offset="1" stopColor="#eaa55a" />
        </linearGradient>

        {/* mk — Rephase logomark */}
        <symbol id="mk" viewBox="0 0 100 100">
          <path d="M46 8A42 42 0 0 0 20 82" fill="none" stroke="#005889" strokeWidth="11" />
          <path d="M58 8A42 42 0 0 1 88 40" fill="none" stroke="#b8bcc4" strokeWidth="11" />
          <path d="M92 46A42 42 0 0 1 80 78" fill="none" stroke="url(#b)" strokeWidth="7" />
          <path d="M34 34h28l8 9-9 10H48z" fill="url(#a)" />
          <path d="M36 58l32 36H56L30 62z" fill="url(#b)" />
        </symbol>

        {/* bolt — lightning bolt icon */}
        <symbol id="bolt" viewBox="0 0 100 100">
          <path d="M58 4L18 56h26l-6 40 44-56H54z" fill="currentColor" />
        </symbol>

        {/* chip — microchip / technology icon */}
        <symbol id="chip" viewBox="0 0 100 100">
          <g fill="none" stroke="currentColor" strokeWidth="6">
            <rect x="26" y="26" width="48" height="48" rx="6" />
            <path d="M38 8v18M62 8v18M38 74v18M62 74v18M8 38h18M8 62h18M74 38h18M74 62h18" />
          </g>
        </symbol>

        {/* gear — settings / industrial icon */}
        <symbol id="gear" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="16" fill="none" stroke="currentColor" strokeWidth="8" />
          <path
            d="M50 6v16M50 78v16M6 50h16M78 50h16M19 19l11 11M70 70l11 11M81 19L70 30M30 70L19 81"
            stroke="currentColor"
            strokeWidth="9"
          />
        </symbol>

        {/* cyc — recycling / cycle icon */}
        <symbol id="cyc" viewBox="0 0 100 100">
          <path
            d="M50 14a36 36 0 0 1 32 20M50 86A36 36 0 0 1 18 66M20 40A36 36 0 0 1 34 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="9"
          />
          <path d="M90 20v22H68zM10 80V58h22zM30 8l26 4-14 18z" fill="currentColor" />
        </symbol>
      </defs>
    </svg>
  )
}



