import { ArrowUpRight } from 'lucide-react'

// Server Component — ::before hover fill handled by .ind-item CSS class.
const INDUSTRIES = [
  { num: '01', label: 'Power Generation & Distribution' },
  { num: '02', label: 'Data Centers & Technology' },
  { num: '03', label: 'Construction & Electrical' },
  { num: '04', label: 'Manufacturing & Industrial' },
  { num: '05', label: 'Commercial Redevelopment' },
]

export default function Industries() {
  return (
    <section id="industries" className="pt-5 pb-[130px] relative z-[1] max-[900px]:pb-20">
      <div className="max-w-[1240px] mx-auto px-7">

        {/* Header */}
        <div className="rv flex justify-between items-end gap-[30px] flex-wrap mb-14 text-navy font-bold">
          <div>
            <span className="tag-bar inline-flex items-center gap-[10px] font-[family-name:var(--font-montserrat)] font-bold text-[11px] tracking-[.22em] uppercase text-blue">
              Industries we serve
            </span>
            <h2 className="font-[family-name:var(--font-bricolage)] text-[clamp(28px,4.2vw,56px)] mt-[18px]">
              Wherever assets wait for what&rsquo;s next.
            </h2>
          </div>
        </div>

        {/* Industry list */}
        <div className="ind-row">
          {INDUSTRIES.map(ind => (
            <a
              key={ind.num}
              href="#contact"
              aria-label={ind.label}
              className="ind-item grid grid-cols-[70px_1fr_auto] items-center gap-5 py-[34px] px-2 border-t border-ln last:border-b cursor-pointer"
            >
              <small className="font-[family-name:var(--font-bricolage)] font-light text-[13px] text-cu">
                {ind.num}
              </small>
              <h3 className="font-[family-name:var(--font-bricolage)] text-[clamp(17px,2.8vw,34px)] uppercase">
                {ind.label}
              </h3>
              <span className="ind-arrow text-cu2 transition-transform duration-[400ms]">
                <ArrowUpRight size={28} strokeWidth={1.5} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}


