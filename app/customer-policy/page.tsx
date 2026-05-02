import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kundepolicy",
  description: "Kundepolicy for MJ Universe: bruk, sikkerhet, kommunikasjon og håndtering av kundesaker.",
};

export default function CustomerPolicyPage() {
  return (
    <article className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">Juridisk</p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">Kundepolicy</h1>
      <div className="v2-prose mt-8 space-y-4 text-sm md:text-base">
        <p>Kunder skal møtes med tydelig informasjon, respektfull kommunikasjon og forutsigbar oppfølging.</p>
        <p>Henvendelser behandles fortløpende, og vi etterstreber rask respons på saker om betaling og tilgang.</p>
        <p>Misbruk av tjenester, svindelforsøk eller brudd på vilkår kan føre til begrenset eller stengt tilgang.</p>
        <p>Personopplysninger håndteres i tråd med gjeldende personvernregler og vår personvernerklæring.</p>
      </div>
    </article>
  );
}
