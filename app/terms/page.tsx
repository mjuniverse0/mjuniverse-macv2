import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kjøpsvilkår",
  description: "Kjøpsvilkår for tjenester, medlemskap og digitale produkter i MJ Universe.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">Juridisk</p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">Kjøpsvilkår</h1>
      <div className="v2-prose mt-8 space-y-4 text-sm md:text-base">
        <p>Disse vilkårene gjelder kjøp av medlemskap, digitale produkter og tjenester levert av MJ Universe.</p>
        <p>Ved kjøp godtar du pris, leveransebeskrivelse, varighet og eventuelle fornyelsesvilkår oppgitt i checkout.</p>
        <p>Digitale leveranser anses påbegynt når tilgang er gitt. Refusjon vurderes etter gjeldende norsk lovverk.</p>
        <p>Kontakt oss via kontaktsiden ved spørsmål om kjøp, levering eller reklamasjon.</p>
      </div>
    </article>
  );
}
