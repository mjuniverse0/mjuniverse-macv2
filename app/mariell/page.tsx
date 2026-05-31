import type { Metadata } from "next";
import Link from "next/link";
import { HUB } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mariell Berntzen",
  description:
    "Skaper og profil for MJ Universe - TikTok-stemme med fokus på ekte historier og transformasjon.",
};

export default function MariellPage() {
  return (
    <article className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-coral/90">Profil</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Mariell Berntzen
          </h1>
          <p className="mt-4 text-lg text-mist">Skaper, utøver og stemmen bak hverdagsmotivasjon i MJ Universe.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={HUB}
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-white/90"
            >
              Se innhold i hub
            </a>
            <Link
              href="/jhonatan/"
              className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-white/85 hover:bg-white/[0.04]"
            >
              Jhonatan →
            </Link>
          </div>
        </div>

        <div className="v2-prose space-y-10 text-sm md:text-base">
          <section className="rounded-2xl border border-line bg-panel/50 p-6 md:p-8">
            <h2 className="font-display text-lg font-semibold text-white">Om stemmen</h2>
            <p className="mt-3">
              Mariell bygger ærlig, motiverende innhold forankret i virkelig liv - mellomrommet der det er vanskelig,
              små seire som teller, og ritualene som holder energien oppe når hverdagen bråker.
            </p>
          </section>

          <section className="rounded-2xl border border-coral/25 bg-gradient-to-br from-coral/10 to-transparent p-6 md:p-8">
            <h2 className="font-display text-lg font-semibold text-white">Transformasjon</h2>
            <p className="mt-3">
              En tydelig offentlig reise på TikTok - med et voksende fellesskap - kjent for en sterk
              vekttransformasjon og historiefortelling som føles ekte, ikke polert tomrom.
            </p>
          </section>

          <section className="rounded-2xl border border-line bg-panel/50 p-6 md:p-8">
            <h2 className="font-display text-lg font-semibold text-white">Bakgrunn fra idrett og dans</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {["Karate", "Jujutsu", "Friidrett", "Gymnastikk", "Dans"].map((x) => (
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
