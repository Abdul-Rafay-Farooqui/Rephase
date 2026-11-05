// Server Component — scroll-driven progress line handled by ClientEffects
// which sets --p CSS custom property on #steps and adds .in to .st elements.
const STEPS = [
  { num: '01', title: 'Identify', body: 'We spot opportunities to recover economic value in surplus assets.' },
  { num: '02', title: 'Connect',  body: 'Our market relationships match assets with the right buyers.' },
  { num: '03', title: 'Recover',  body: 'Practical solutions to reuse equipment and infrastructure.' },
  { num: '04', title: 'Renew',    body: 'Remaining materials are directed toward appropriate channels.' },
]

export default function Process() {
  return (
    <section
      id="process"
      className="py-[130px] relative z-[1] bg-white border-y border-ln max-[900px]:py-20"
    >
      <div className="max-w-[1240px] mx-auto px-7">

        {/* Header */}
        <div className="rv flex justify-between items-end gap-[30px] flex-wrap mb-14 text-navy font-bold">
          <div>
            <span className="tag-bar inline-flex items-center gap-[10px] font-[family-name:var(--font-montserrat)] font-bold text-[11px] tracking-[.22em] uppercase text-blue">
              Asset lifecycle
            </span>
            <h2 className="font-[family-name:var(--font-bricolage)] text-[clamp(28px,4.2vw,56px)] mt-[18px]">
              From surplus to second life.
            </h2>
          </div>
        </div>

        {/* Steps — ::before/::after progress lines live in .steps-track CSS class */}
        <div
          id="steps"
          className="steps-track grid grid-cols-4 gap-5 max-[900px]:grid-cols-2"
        >
          {STEPS.map(s => (
            <div key={s.num} className="st rv relative z-[1]">
              {/* Circle — .st.in b styles applied by ClientEffects adding .in class */}
              <b className="flex items-center justify-center w-[70px] h-[70px] rounded-full bg-white border-[0px] border-ln shadow-[0_8px_28px_-4px_rgba(25,34,78,.22)] font-[family-name:var(--font-bricolage)] font-medium text-[16px] text-navy mb-[22px] transition-all duration-500">
                {s.num}
              </b>
              <h3 className="font-[family-name:var(--font-bricolage)] text-navy text-[18px] uppercase mb-2">{s.title}</h3>
              <p className="m-0 text-navy text-[15px]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



