import Image from "next/image"
import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"

export function AccessSection() {
  return (
    <section id="access" className="scroll-mt-16 bg-paper py-24 sm:py-28">
      <div className="mx-auto flex w-[92%] max-w-6xl flex-col items-center">
        <SectionHeading eyebrow="ACCESS" title="会場アクセス" />

        <Reveal className="w-full max-w-3xl">
          <p className="mb-8 text-center text-[1.06rem] text-ink-soft">
            慶應義塾大学 矢上キャンパス
            <br />
            神奈川県横浜市港北区日吉3-14-1
          </p>

          <div className="overflow-hidden rounded-[30px] border border-ink/10 shadow-[0_14px_32px_rgba(42,26,16,0.14)]">
            <iframe
              title="慶應義塾大学 矢上キャンパスの地図"
              src="https://www.google.com/maps?q=慶應義塾大学矢上キャンパス&output=embed"
              width="100%"
              height={450}
              style={{ border: 0, display: "block" }}
              loading="lazy"
              allowFullScreen
            />
          </div>

          <div className="mt-6 text-center">
            <a
              href="https://maps.google.com/?q=慶應義塾大学矢上キャンパス"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-gradient-to-br from-gold to-red px-8 py-3.5 font-head font-extrabold text-paper shadow-[0_14px_28px_rgba(226,59,34,0.3)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Googleマップで開く
            </a>
          </div>

          <div className="mt-8 rounded-[22px] border-[1.5px] border-dashed border-gold-deep bg-cream/60 px-7 py-6 text-center">
            <p className="font-bold text-ink-soft">
              屋台の場所が分かる地図は、近日公開予定です。
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col items-center gap-5 rounded-[26px] border border-ink/10 bg-cream/40 px-7 py-9 text-center shadow-[0_2px_10px_rgba(42,26,16,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(42,26,16,0.14)]">
              <h3 className="font-head text-lg font-extrabold text-ink">
                Instagramで最新情報をチェック！
              </h3>
              <a
                href="https://www.instagram.com/keio_yagafes_karaage?igsh=eDV2aG5rZHliZTZr"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block rounded-full bg-gradient-to-br from-gold to-red px-8 py-3 font-head text-[0.95rem] font-extrabold text-paper shadow-[0_14px_28px_rgba(226,59,34,0.28)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Instagramを見る
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col items-center gap-5 rounded-[26px] border border-ink/10 bg-cream/40 px-7 py-9 text-center shadow-[0_2px_10px_rgba(42,26,16,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(42,26,16,0.14)]">
              <div className="w-full max-w-[220px] overflow-hidden rounded-[22px] border border-ink/10">
                <Image
                  src="/images/game-image.png"
                  alt="やがあげクン公式ミニゲーム"
                  width={440}
                  height={440}
                  loading="lazy"
                  className="h-auto w-full"
                />
              </div>
              <p className="font-bold leading-relaxed text-ink-soft">
                理工学部生が作ったやがあげクン公式ミニゲーム！
                <br />
                揚げている時の待ち時間に遊んでみてね！
              </p>
              <a
                href="https://bienestar-flow.github.io/Karaage-IN-/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block rounded-full bg-gradient-to-br from-gold to-red px-8 py-3 font-head text-[0.95rem] font-extrabold text-paper shadow-[0_14px_28px_rgba(226,59,34,0.28)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                ゲームで遊ぶ
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
