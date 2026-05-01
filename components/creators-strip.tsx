import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CreatorsStrip() {
  return (
    <section className="border-y border-line bg-panel/30">
      <div className="mx-auto grid max-w-6xl gap-0 md:grid-cols-2">
        <Link
          href="/mariell/"
          className="group border-b border-line p-8 transition hover:bg-white/[0.02] md:border-b-0 md:border-r md:p-12"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-coral/90">Skaper</p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-white md:text-3xl">
            Mariell Berntzen
          </h2>
          <p className="mt-3 max-w-md text-sm text-mist">
            Ansikt utad og skaperinnhold for MJ Universe — ærlig energi på TikTok og i hele universet.
          </p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/70 group-hover:text-white">
            Les profil
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
          </span>
        </Link>

        <Link
          href="/jhonatan/"
          className="group p-8 transition hover:bg-white/[0.02] md:p-12"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sea/90">Eier og drift</p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-white md:text-3xl">
            Jhonatan Wik
          </h2>
          <p className="mt-3 max-w-md text-sm text-mist">
            Eier MJ Universe som virksomhet — Java og Python i tiår; plattform, community og betaling.
          </p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/70 group-hover:text-white">
            Les profil
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
          </span>
        </Link>
      </div>
    </section>
  );
}
