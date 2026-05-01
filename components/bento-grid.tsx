import Link from "next/link";
import { Clapperboard, Crown, Radio, ShoppingBag, Users, Zap } from "lucide-react";
import { hubUrl } from "@/lib/site";

const tiles = [
  {
    title: "Community & social",
    desc: "Lenker, chat og tilstedeværelse i hubben.",
    href: hubUrl("/community/"),
    icon: Users,
    span: "md:col-span-2",
    tone: "from-sea/20 to-transparent",
  },
  {
    title: "Live",
    desc: "TikTok og YouTube live samlet.",
    href: hubUrl("/live/"),
    icon: Radio,
    span: "",
    tone: "from-coral/15 to-transparent",
  },
  {
    title: "VIP",
    desc: "Eksklusiv tilgang og støtte.",
    href: hubUrl("/vip/"),
    icon: Crown,
    span: "",
    tone: "from-amber-400/15 to-transparent",
  },
  {
    title: "Media & video",
    desc: "Opplastinger og utvalgte klipp.",
    href: hubUrl("/media/"),
    icon: Clapperboard,
    span: "md:col-span-2",
    tone: "from-violet-400/15 to-transparent",
  },
  {
    title: "Challenges",
    desc: "Par-utfordringer og polls.",
    href: hubUrl("/challenges/"),
    icon: Zap,
    span: "",
    tone: "from-emerald-400/12 to-transparent",
  },
  {
    title: "Store & shop",
    desc: "Digitale produkter og medlemskap.",
    href: hubUrl("/shop/"),
    icon: ShoppingBag,
    span: "md:col-span-2",
    tone: "from-fuchsia-500/12 to-transparent",
  },
] as const;

export function BentoGrid() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <div className="max-w-2xl">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Alt du forventer av et moderne creator-brand
        </h2>
        <p className="mt-3 text-sm text-mist md:text-base">
          Hver flate har sitt eget domene, men alt peker til samme tekniske hub. Klikk for å åpne direkte i MJ Universe.
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {tiles.map((t) => {
          const Icon = t.icon;
          return (
            <a
              key={t.title}
              href={t.href}
              className={`group relative overflow-hidden rounded-2xl border border-line bg-panel/60 p-6 transition hover:border-white/15 hover:bg-panel ${t.span}`}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${t.tone} opacity-80`}
                aria-hidden
              />
              <div className="relative flex flex-col gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-white/90">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{t.title}</h3>
                  <p className="mt-1 text-sm text-white/55">{t.desc}</p>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-white/35 group-hover:text-sea">
                  Åpne i hub →
                </span>
              </div>
            </a>
          );
        })}
      </div>

      <p className="mt-8 text-center text-xs text-white/35">
        Ser du etter{" "}
        <Link href="/univers/" className="text-sea underline-offset-2 hover:underline">
          full oversikt over domener
        </Link>
        ?
      </p>
    </section>
  );
}
