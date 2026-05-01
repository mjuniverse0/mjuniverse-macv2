import type { Metadata } from "next";
import Link from "next/link";
import { HUB } from "@/lib/site";

export const metadata: Metadata = {
  title: "Jhonatan Wik",
  description:
    "Eier MJ Universe som virksomhet. Utvikler med lang erfaring i Java og Python — plattform og drift.",
};

export default function JhonatanPage() {
  return (
    <article className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sea/90">Profil</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Jhonatan Wik
          </h1>
          <p className="mt-4 text-lg text-mist">
            Eier MJ Universe som virksomhet. Utvikler (Java + Python) og utøver — plattformen bak universet.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={HUB}
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-white/90"
            >
              Åpne teknisk hub
            </a>
            <Link
              href="/mariell/"
              className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-white/85 hover:bg-white/[0.04]"
            >
              Mariell →
            </Link>
          </div>
        </div>

        <div className="v2-prose space-y-10 text-sm md:text-base">
          <section className="rounded-2xl border border-line bg-panel/50 p-6 md:p-8">
            <h2 className="font-display text-lg font-semibold text-white">Om arbeidsformen</h2>
            <p className="mt-3">
              Jhonatan bygger programvare med samme disiplin som i trening: tydelig tenkning, solide fundament og en
              preferanse for løsninger som faktisk kommer i produksjon — ikke bare presentasjonsark.
            </p>
          </section>

          <section className="rounded-2xl border border-sea/25 bg-gradient-to-br from-sea/10 to-transparent p-6 md:p-8">
            <h2 className="font-display text-lg font-semibold text-white">Utvikler</h2>
            <p className="mt-3">
              <span className="font-semibold text-white/90">Java</span> og{" "}
              <span className="font-semibold text-white/90">Python</span> i over{" "}
              <span className="font-semibold text-white/90">ti år</span> — fra tjenester på serversiden til verktøy,
              automatisering og limet som holder produkter i bevegelse.
            </p>
          </section>

          <section className="rounded-2xl border border-line bg-panel/50 p-6 md:p-8">
            <h2 className="font-display text-lg font-semibold text-white">Idrett og bevegelse</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                "Fotball",
                "Breakdance",
                "Boksing",
                "Kickboksing",
                "Karate",
                "Friidrett",
                "Gymnastikk",
                "Dans",
                "Jujutsu (nå)",
              ].map((x) => (
                <li
                  key={x}
                  className="rounded-xl border border-line bg-black/25 px-4 py-3 text-sm text-white/75"
                >
                  {x}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
