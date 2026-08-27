import Image from "next/image"

function InstagramIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

function GameIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2.5" y="7.5" width="19" height="10" rx="5" />
      <line x1="7" y1="10.5" x2="7" y2="14.5" />
      <line x1="5" y1="12.5" x2="9" y2="12.5" />
      <circle cx="15.5" cy="10.8" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="18" cy="13.3" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Hero() {
  return (
    <header
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pb-16 pt-28"
    >
      {/* Background image */}
      <div className="absolute inset-0 scale-105">
        <Image
          src="/images/normal.jpg"
          alt="揚げたての唐揚げ"
          fill
          priority
          className="object-cover object-[center_40%]"
        />
      </div>

      {/* Scrim */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(36,23,16,0.5) 0%, rgba(36,23,16,0.68) 52%, rgba(20,12,8,0.92) 100%), linear-gradient(120deg, rgba(226,59,34,0.3), rgba(245,184,35,0.12))",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-4 text-center">
        <div className="animate-float mb-1 h-[min(150px,34vw)] w-[min(150px,34vw)] overflow-hidden rounded-full border-4 border-paper/95 shadow-[0_24px_60px_rgba(20,12,8,0.5)]">
          <Image
            src="/images/logo.png"
            alt="やがあげクン ロゴ"
            width={300}
            height={300}
            priority
            className="h-full w-full scale-110 object-cover"
          />
        </div>

        <p className="inline-block rounded-full border border-paper/40 bg-paper/15 px-5 py-1.5 font-head text-xs font-bold tracking-[0.14em] text-paper backdrop-blur-sm">
          矢上祭限定
        </p>

        <p className="font-body text-sm font-medium tracking-wide text-paper/80">
          団体名：１年ソ組
        </p>

        <h1 className="font-head text-[clamp(2.8rem,9vw,5rem)] font-black leading-[1.05] tracking-wide text-paper drop-shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
          やがあげクン
        </h1>

        <p className="text-balance font-head text-[clamp(1.05rem,2.6vw,1.55rem)] font-bold leading-snug text-paper drop-shadow-[0_4px_16px_rgba(0,0,0,0.35)]">
          サクッとジューシー！
          <br />
          矢上祭限定の絶品唐揚げ！
        </p>

        {/* Actions */}
        <div className="mt-3 flex w-full flex-col justify-center gap-3.5 sm:w-auto sm:flex-row">
          <a
            href="#menu"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-gold to-red px-8 py-3.5 font-head text-base font-extrabold tracking-wide text-paper shadow-[0_14px_30px_rgba(226,59,34,0.4)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            メニューを見る
          </a>
          <a
            href="#access"
            className="inline-flex items-center justify-center rounded-full border-[1.5px] border-paper/70 bg-paper/10 px-8 py-3.5 font-head text-base font-extrabold tracking-wide text-paper backdrop-blur-sm transition-colors duration-200 hover:bg-paper/20"
          >
            ACCESS
          </a>
        </div>

        {/* Links */}
        <div className="mt-4 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <a
            href="https://www.instagram.com/keio_yagafes_karaage?igsh=eDV2aG5rZHliZTZr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-red px-4 py-2.5 text-sm font-bold text-paper/90 transition-all duration-200 hover:-translate-y-0.5 hover:bg-paper/10"
          >
            <InstagramIcon />
            <span>
              <span className="text-gold">Instagram</span>で最新情報を見る
            </span>
          </a>
          <a
            href="https://bienestar-flow.github.io/Karaage-IN-/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-red px-4 py-2.5 text-sm font-bold text-paper/90 transition-all duration-200 hover:-translate-y-0.5 hover:bg-paper/10"
          >
            <GameIcon />
            やがあげクン公式ミニゲーム！
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#event"
        aria-label="次のセクションへスクロール"
        className="animate-bob absolute bottom-7 left-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-paper/40 text-paper/85"
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </header>
  )
}
