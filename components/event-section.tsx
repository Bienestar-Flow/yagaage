import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <rect x="3.5" y="5" width="17" height="15.5" rx="3" />
      <line x1="3.5" y1="9.5" x2="20.5" y2="9.5" />
      <line x1="7.5" y1="3" x2="7.5" y2="6.5" />
      <line x1="16.5" y1="3" x2="16.5" y2="6.5" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M12 21s-7-7.1-7-12a7 7 0 0 1 14 0c0 4.9-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  )
}

const items = [
  {
    icon: <CalendarIcon />,
    title: "開催日時",
    body: (
      <>
        2026年9月19日（土）12:00〜18:00
        <br />
        2026年9月20日（日）10:00〜18:00
      </>
    ),
  },
  {
    icon: <PinIcon />,
    title: "開催場所",
    body: <>慶應義塾大学 矢上キャンパス</>,
  },
]

export function EventSection() {
  return (
    <section id="event" className="scroll-mt-16 bg-paper py-24 sm:py-28">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionHeading eyebrow="EVENT" title="矢上祭2026" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <div className="group h-full rounded-[26px] border border-ink/10 bg-cream/40 p-9 text-left shadow-[0_2px_10px_rgba(42,26,16,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(42,26,16,0.14)]">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/25 to-red/15 text-red-deep">
                  {item.icon}
                </div>
                <h3 className="mb-2.5 font-head text-xl font-extrabold text-ink">
                  {item.title}
                </h3>
                <p className="text-ink-soft">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
