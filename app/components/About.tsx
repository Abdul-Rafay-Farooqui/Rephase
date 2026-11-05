import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

// Put one photo per pillar in /public/about/ (suggested size 900x1200, portrait).
const PILLARS = [
  { label: 'Industry Knowledge',   num: '01', img: '/about1.jpg',   alt: 'Industry knowledge' },
  { label: 'Market Relationships', num: '02', img: '/about2.jpg', alt: 'Market relationships' },
  { label: 'Practical Solutions',  num: '03', img: '/about3.jpg',  alt: 'Practical solutions' },
]

export default function About() {
  return (
    <section id="about" className="py-[130px] relative z-[1] max-[900px]:py-20">
      <div className="max-w-[1240px] mx-auto px-7">

        {/* Header: heading left, copy right */}
        <div className="rv grid grid-cols-[1.1fr_.9fr] gap-[70px] items-end mb-16 max-[900px]:grid-cols-1 max-[900px]:gap-6 max-[900px]:mb-10 text-navy font-bold">
          <div>
            <span className="tag-bar inline-flex items-center gap-[10px] font-[family-name:var(--font-montserrat)] font-bold text-[11px] tracking-[.22em] uppercase text-blue">
              About Rephase
            </span>
            <h2 className="font-[family-name:var(--font-bricolage)] text-[clamp(32px,5vw,66px)] font-bold mt-5 leading-[1.08] tracking-[-0.03em]">
              A second life for valuable assets.
            </h2>
          </div>
          <p className="text-[19px] text-mut leading-[1.7] max-w-[480px] justify-self-end max-[900px]:justify-self-start">
            We identify opportunities to recover economic value from industrial equipment, electrical infrastructure and surplus materials.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
          {PILLARS.map((p, i) => (
            <article
              key={p.num}
              className={`rv group relative aspect-[3/4] rounded-[28px] overflow-hidden bg-navy isolate
                shadow-[0_30px_60px_-35px_rgba(25,34,78,.55)]
                transition-[transform,box-shadow] duration-500 ease-out
                hover:-translate-y-2 hover:shadow-[0_40px_70px_-30px_rgba(25,34,78,.7)]
                ${i === 1 ? 'mt-14 max-[900px]:mt-0' : ''}`}
            >
              {/* Photo */}
              <Image
                src={p.img}
                alt={p.alt}
                fill
                sizes="(max-width: 900px) 100vw, 400px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
              />

              {/* Readability gradient */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(25,34,78,.25)_0%,rgba(25,34,78,0)_35%,rgba(25,34,78,.92)_100%)]"
              />

              {/* Number chip */}
              <span className="absolute top-5 left-5 px-[14px] py-[7px] rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white font-[family-name:var(--font-montserrat)] font-bold text-[11px] tracking-[.2em]">
                {p.num}
              </span>

              {/* Arrow */}
              <span className="absolute top-5 right-5 grid place-items-center w-10 h-10 rounded-full bg-white text-navy transition-[background,color,transform] duration-300 group-hover:bg-cu group-hover:text-white group-hover:rotate-45">
                <ArrowRight size={18} strokeWidth={2.5} />
              </span>

              {/* Label */}
              <div className="absolute inset-x-0 bottom-0 p-7">
                <span className="block h-[3px] w-20 rounded-full bg-cu mb-5 transition-[width] duration-500 group-hover:w-20" />
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-[36px] tracking-[.16em] uppercase text-white">
                  {p.label}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}