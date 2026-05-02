"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { HUB } from "@/lib/site";

const nav = [
  { href: "/", label: "MJ Universe" },
  { href: "/mariell/", label: "Mariell" },
  { href: "/jhonatan/", label: "Jhonatan" },
  { href: "/community/", label: "Community" },
  { href: "/polls/", label: "Live / Polls" },
  { href: "/shop/", label: "Shop / Store" },
  { href: "/vip/", label: "VIP" },
  { href: "/account/", label: "Konto" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-ink/75 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[4.25rem] max-w-[1320px] items-center justify-between gap-6 px-5 py-2 md:px-8">
        <Link href="/" className="inline-flex items-center gap-3">
          <img src="/images/logo.png" alt="MJ Universe logo" className="h-9 w-9 rounded-lg object-cover" />
          <span className="font-display text-base font-semibold leading-tight tracking-tight text-white md:text-xl">
            MJ Universe
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-end gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={`${item.href}-${item.label}`}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-xs font-medium text-white/65 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <a href={HUB} className="ml-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink transition hover:bg-white/90">
            Åpne hub
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={HUB}
            className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-ink"
          >
            Hub
          </a>
          <button
            type="button"
            className="rounded-full p-2 text-white/80 hover:bg-white/10"
            aria-expanded={open}
            aria-label={open ? "Lukk meny" : "Åpne meny"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-ink/95 px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-sm font-medium text-white/85 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
