import type { Metadata } from "next";
import { hubUrl } from "@/lib/site";
import { LifeBuoy, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakt og support for MJ Universe — henvisning til hub og supportsider.",
};

export default function KontaktPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">Kontakt</p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white">Snakk med oss</h1>
      <p className="mt-4 text-mist">
        For saker knyttet til app, konto, VIP eller teknisk support: bruk supportsystemet i hovedhubben. Denne
        markeringssiden (macv2) er et rent presentasjonslag.
      </p>

      <div className="mt-10 grid gap-4">
        <a
          href={hubUrl("/support/")}
          className="flex items-start gap-4 rounded-2xl border border-line bg-panel/50 p-6 transition hover:border-sea/40"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sea/15 text-sea">
            <LifeBuoy className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <h2 className="font-display text-lg font-semibold text-white">Support i hub</h2>
            <p className="mt-1 text-sm text-mist">Åpner MJ Universe support / tickets der det er aktivert.</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-sea">mj-universe.net/support</p>
          </div>
        </a>

        <div className="flex items-start gap-4 rounded-2xl border border-line bg-panel/50 p-6">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white/80">
            <Mail className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <h2 className="font-display text-lg font-semibold text-white">E-post for forretning</h2>
            <p className="mt-1 text-sm text-mist">
              Legg inn offisiell forretningspost i `lib/site.ts` når adressen er klar. Inntil videre: bruk supportlenken over.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
