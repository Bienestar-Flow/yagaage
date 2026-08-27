import type { Metadata, Viewport } from "next"
import { Noto_Sans_JP, Zen_Kaku_Gothic_New } from "next/font/google"
import "./globals.css"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto",
  display: "swap",
})

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-zen",
  display: "swap",
})

export const metadata: Metadata = {
  title: "やがあげクン｜矢上祭2026",
  description: "慶應義塾大学矢上祭2026『やがあげクン』公式サイト",
}

export const viewport: Viewport = {
  themeColor: "#f5b823",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${zenKaku.variable} bg-ink`}>
      <body className="font-body">{children}</body>
    </html>
  )
}
