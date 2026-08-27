import { Reveal } from "./reveal"

export function MessageSection() {
  return (
    <section
      className="bg-ink py-24 sm:py-28"
      style={{
        backgroundImage:
          "radial-gradient(circle at 15% 20%, rgba(245,184,35,0.14), transparent 42%), radial-gradient(circle at 85% 80%, rgba(226,59,34,0.18), transparent 42%)",
      }}
    >
      <div className="mx-auto w-[92%] max-w-6xl">
        <Reveal className="flex flex-col items-center text-center">
          <h2 className="relative pb-5 font-head text-[clamp(1.8rem,3.6vw,2.6rem)] font-black tracking-wide text-paper">
            ご来店お待ちしております！
            <span className="absolute bottom-0 left-1/2 h-1 w-14 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold to-red" />
          </h2>
          <p className="mt-5 text-[1.08rem] leading-relaxed text-paper/80">
            揚げたてアツアツの唐揚げを販売します。
            <br />
            ぜひ「やがあげクン」へお越しください！
          </p>
        </Reveal>
      </div>
    </section>
  )
}
