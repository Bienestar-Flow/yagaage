import { Reveal } from "./reveal"

export function SectionHeading({
  eyebrow,
  title,
  lead,
  invert = false,
}: {
  eyebrow: string
  title: string
  lead?: string
  invert?: boolean
}) {
  return (
    <Reveal className="mb-12 flex flex-col items-center text-center">
      <p
        className={`mb-2.5 font-head text-sm font-bold tracking-[0.24em] ${
          invert ? "text-gold" : "text-gold-deep"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`relative pb-5 font-head text-[clamp(1.8rem,3.6vw,2.6rem)] font-black tracking-wide ${
          invert ? "text-paper" : "text-ink"
        }`}
      >
        {title}
        <span className="absolute bottom-0 left-1/2 h-1 w-14 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold to-red" />
      </h2>
      {lead ? (
        <p className={`mt-5 text-base ${invert ? "text-paper/75" : "text-ink-soft"}`}>
          {lead}
        </p>
      ) : null}
    </Reveal>
  )
}
