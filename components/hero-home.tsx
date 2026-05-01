import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { HUB } from "@/lib/site";

export function HeroHome() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        className="pointer-events-none absolute -right-32 top-0 h-[min(80vw,520px)] w-[min(80vw,520px)] animate-drift rounded-full bg-coral/20 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-sea/15 blur-[90px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <div className="v2-stagger max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">
            <Sparkles className="h-3.5 w-3.5 text-coral" aria-hidden />
            Offisiell creator-plattform
          </p>
          <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-[1.05] tracking-tight text-white">
            Mariell &amp; Jhonatan —{" "}
            <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              ett univers for innhold, live og community.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-mist">
            MJ Universe samler video, direktesendinger, sosiale flater og medlemskap i én moderne hub.
            Denne siden er deres profesjonelle vindu ut — selve opplevelsen finner du i appen på nett.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={HUB}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink shadow-lg shadow-black/30 transition hover:bg-white/90"
            >
              Gå til hovedhub
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
            <Link
              href="/univers/"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              Utforsk domenene
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
