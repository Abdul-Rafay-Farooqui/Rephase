// Server Component — static ticker strip.
const ITEMS = [
  'Electrical Infrastructure',
  'Data Centers',
  'Industrial Assets',
  'Materials Recycling',
  'Infrastructure Reuse',
]

export default function Marquee() {
  const content = ITEMS.map((t, i) => (
    <span key={i} className="inline-block">
      {t}
      <em className="not-italic text-cu2 mx-[30px]">✦</em>
    </span>
  ))

  return (
    <div
      aria-hidden="true"
      className="bg-navy text-white py-[22px] overflow-hidden whitespace-nowrap md:-mx-5 mb-20 "
    >
      <div
        id="mq"
        className="inline-block [animation:mq_30s_linear_infinite] font-[family-name:var(--font-bankgothic)] font-medium text-[clamp(10px,2.4vw,16px)] uppercase tracking-[.12em]"
      >
        {content}
        {content}
      </div>
    </div>
  )
}



