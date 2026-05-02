import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salgsbetingelser",
  description: "Salgsbetingelser for MJ Universe, inkludert pris, betaling, levering og ansvar.",
};

export default function SalesTermsPage() {
  return (
    <article className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">Juridisk</p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">Salgsbetingelser</h1>
      <div className="v2-prose mt-8 space-y-4 text-sm md:text-base">
        <p>Alle priser oppgis i NOK dersom ikke annet er oppgitt, og kan endres ved kampanjer eller prisjusteringer.</p>
        <p>Betaling skjer gjennom tilgjengelige betalingsmetoder i kassen. Tilgang gis når transaksjon er registrert.</p>
        <p>MJ Universe forbeholder seg retten til å avvise eller annullere bestillinger ved feilprising eller misbruk.</p>
        <p>Kunden er ansvarlig for korrekt informasjon ved kjøp og for å sikre trygg bruk av egen konto.</p>
      </div>
    </article>
  );
}
