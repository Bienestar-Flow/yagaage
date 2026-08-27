"use client"

import { useEffect, useState } from "react"

const links = [
  { href: "#event", label: "EVENT" },
  { href: "#menu", label: "MENU" },
  { href: "#access", label: "ACCESS" },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-[0_4px_24px_rgba(42,26,16,0.08)] border-b border-ink/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-[92%] max-w-6xl items-center justify-between">
        <a
          href="#top"
          className={`font-head text-lg font-black tracking-wide transition-colors ${
            scrolled ? "text-ink" : "text-paper drop-shadow"
          }`}
        >
          やがあげクン
        </a>

        <nav className="flex items-center gap-4 sm:gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-head text-sm font-bold tracking-wider transition-colors hover:text-red ${
                scrolled ? "text-ink-soft" : "text-paper/90 drop-shadow"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
