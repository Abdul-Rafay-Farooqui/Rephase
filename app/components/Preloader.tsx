import Image from 'next/image'

// Server Component — preloader overlay + scroll progress bar + cursor glow.
// ClientEffects dismisses #pre after load and drives #bar width.
export default function Preloader() {
  return (
    <>
      {/* Preloader overlay */}
      <div
        id="pre"
        aria-hidden="true"
        className="fixed inset-0 z-[99] bg-navy grid place-items-center transition-transform duration-[900ms] ease-[cubic-bezier(.8,0,.2,1)]"
      >
        <Image
          src="/logo.png"
          alt=""
          width={200}
          height={200}
          className="w-[150px] h-auto object-contain brightness-0 invert [animation:spin_1.6s_ease-in-out_infinite]"
          priority
        />
      </div>

      {/* Scroll progress bar */}
      <div
        id="bar"
        role="progressbar"
        aria-hidden="true"
        className="fixed top-0 left-0 h-[3px] w-0 z-50 bg-gradient-to-r from-blue to-cu2 transition-[width] duration-100 ease-linear"
      />

      {/* Cursor glow */}
      <div
        id="glow"
        aria-hidden="true"
        className="fixed w-[520px] h-[520px] -ml-[260px] -mt-[260px] rounded-full pointer-events-none z-0 transition-transform duration-150"
        style={{
          background: 'radial-gradient(circle, rgba(234,165,90,.2), transparent 65%)',
        }}
      />
    </>
  )
}



