import Image from "next/image"
import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"

const menu = [
  { name: "ノーマル", price: "450円", img: "/images/normal.jpg", alt: "ノーマル味の唐揚げ" },
  { name: "マヨ", price: "500円", img: "/images/mayo.jpg", alt: "マヨ味の唐揚げ" },
  { name: "マヨチリ", price: "500円", img: "/images/mayochili.jpg", alt: "マヨチリ味の唐揚げ" },
  { name: "ヤンニョム", price: "500円", img: "/images/yangnyeom.jpg", alt: "ヤンニョム味の唐揚げ" },
]

export function MenuSection() {
  return (
    <section
      id="menu"
      className="scroll-mt-16 bg-gradient-to-b from-cream to-cream-deep py-24 sm:py-28"
    >
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionHeading
          eyebrow="MENU"
          title="唐揚げメニュー"
          lead="揚げたてを、4種の味でご用意しました。"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {menu.map((item, i) => (
            <Reveal key={item.name} delay={i * 120}>
              <article className="group h-full overflow-hidden rounded-[26px] border border-ink/10 bg-paper p-3.5 shadow-[0_2px_10px_rgba(42,26,16,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_44px_rgba(42,26,16,0.16)]">
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <Image
                    src={item.img || "/placeholder.svg"}
                    alt={item.alt}
                    width={480}
                    height={360}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.07]"
                  />
                  <span className="absolute bottom-2.5 left-2.5 rounded-full bg-ink/65 px-2.5 py-1 text-[0.68rem] font-medium tracking-wide text-paper backdrop-blur-sm">
                    この画像はイメージです
                  </span>
                </div>

                <div className="flex items-center justify-between px-1.5 pb-1">
                  <h3 className="font-head text-lg font-extrabold text-ink">
                    {item.name}
                  </h3>
                  <p className="font-head text-xl font-black text-red-deep">
                    {item.price}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
