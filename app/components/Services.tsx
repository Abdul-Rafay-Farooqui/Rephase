// Server Component — tilt effect applied by ClientEffects on .tilt elements.
export default function Services() {
  const cardBase =
    'bc-icon-hover relative rounded-[28px] p-[34px] overflow-hidden bg-white border border-ln flex flex-col justify-between transition-[transform,box-shadow] duration-500 [transform-style:preserve-3d] hover:shadow-[0_40px_60px_-35px_rgba(25,34,78,.5)]'

  return (
    <section id="services" className="py-[130px] relative z-[1] max-[900px]:py-20">
      <div className="max-w-[1240px] mx-auto px-7">

        {/* Header */}
        <div className="rv flex justify-between items-end gap-[30px] flex-wrap mb-14 text-navy font-bold">
          <div>
            <span className="tag-bar inline-flex items-center gap-[10px] font-[family-name:var(--font-montserrat)] font-bold text-[11px] tracking-[.22em] uppercase text-blue!">
              What we do
            </span>
            <h2 className="font-[family-name:var(--font-bricolage)] text-[clamp(28px,4.2vw,56px)] max-w-[1000px] mt-[18px]">
              Practical solutions for valuable assets at every stage of their lifecycle.
            </h2>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-6 auto-rows-[minmax(250px,auto)] gap-[18px] max-[900px]:grid-cols-1">

          {/* Card 1 — Electrical Infrastructure (spans 4 cols) */}
          <div className={`${cardBase} col-span-4 tilt rv bg-gradient-to-br from-navy to-blue text-white border-0 max-[900px]:col-span-1`}>
            {/* <div className="bento-stripe" aria-hidden="true" /> */}
            <svg className="bc-icon" aria-hidden="true">
              <use href="#bolt" />
            </svg>
            <span className="font-[family-name:var(--font-bricolage)] font-light text-[14px] tracking-[.1em] opacity-70">01</span>
            <div>
              <h3 className="font-[family-name:var(--font-bricolage)] text-[clamp(20px,2.3vw,30px)] uppercase mt-[50px] mb-3">
                <span className="block">Electrical</span><span>Infrastructure</span>
              </h3>
              <p className="m-0 max-w-[420px] opacity-85">
                Switchgear, transformers, copper conductors and power distribution assets.
              </p>
            </div>
          </div>

          {/* Card 2 — Technology & Data Centers (spans 2 cols) */}
          <div className={`${cardBase} col-span-2 tilt rv max-[900px]:col-span-1`}>
            <svg className="bc-icon" style={{ color: '#005889' }} aria-hidden="true">
              <use href="#chip" />
            </svg>
            <span className="font-[family-name:var(--font-bricolage)] font-light text-[14px] tracking-[.1em] opacity-70">02</span>
            <div>
              <h3 className="font-[family-name:var(--font-bricolage)] text-[clamp(20px,2.3vw,30px)] uppercase mt-[50px] mb-3">
                <span className="block">Technology &amp;</span><span>Data Centers</span>
              </h3>
              <p className="m-0 max-w-[420px] opacity-85">
                Surplus electronic equipment and technology infrastructure.
              </p>
            </div>
          </div>

          {/* Card 3 — Industrial Asset Recovery (spans 2 cols) — white */}
          <div className={`${cardBase} col-span-2 tilt rv max-[900px]:col-span-1`}>
            <svg className="bc-icon" style={{ color: '#005889' }} aria-hidden="true">
              <use href="#gear" />
            </svg>
            <span className="font-[family-name:var(--font-bricolage)] font-light text-[14px] tracking-[.1em] opacity-70">03</span>
            <div>
              <h3 className="font-[family-name:var(--font-bricolage)] text-[clamp(20px,2.3vw,30px)] uppercase mt-[50px] mb-3">
                <span className="block">Industrial</span><span> Asset Recovery</span>
              </h3>
              <p className="m-0 max-w-[420px] opacity-85">
                Machinery, equipment and materials from industrial operations.
              </p>
            </div>
          </div>

          {/* Card 4 — Materials Recycling (spans 4 cols) — copper gradient */}
          <div className={`${cardBase} col-span-4 tilt rv bg-gradient-to-br from-cu to-cu2 text-white border-0 max-[900px]:col-span-1`}>
            <svg className="bc-icon" style={{ color: '#fff' }} aria-hidden="true">
              <use href="#cyc" />
            </svg>
            <span className="font-[family-name:var(--font-bricolage)] font-light text-[14px] tracking-[.1em] opacity-70">04</span>
            <div>
              <h3 className="font-[family-name:var(--font-bricolage)] text-[clamp(20px,2.3vw,30px)] uppercase mt-[50px] mb-3">
                <span className="block">Materials</span>
                <span>Recycling</span>
              </h3>
              <p className="m-0 max-w-[420px] opacity-85">
                Recoverable metals and materials directed toward appropriate channels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



