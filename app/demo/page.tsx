import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Demo",
  description:
    "Sandbox for MJ Universe demo-miljø med fiktiv konto, simulert BankID-steg og testprodukter.",
};

export default function DemoPage() {
  return (
    <article className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">MJ Universe</p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">Sandbox</h1>
      <p className="mt-4 max-w-3xl text-mist">
        Demo-miljø med fiktiv konto i nettleseren: stor saldo, testprodukter og abonnement, samt en simulert
        BankID-steg der demo-ID allerede er utfylt. Ingen ekte betaling.
      </p>

      <section className="mt-10 rounded-2xl border border-line bg-panel/50 p-6 md:p-8">
        <h2 className="font-display text-2xl font-semibold text-white">Opprett demo-konto</h2>
        <p className="mt-3 text-sm text-mist">
          Vi genererer et unikt Demo-ID, saldo 9 999 999 og ubegrenset kjøp i denne økten (kreditter trekkes ikke når
          ubegrenset er på).
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/account/?sandbox=1"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-white/90"
          >
            Opprett demo-konto
          </Link>
          <Link
            href="/account/"
            className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-white/85 transition hover:bg-white/[0.04]"
          >
            Ekte innlogging (Konto)
          </Link>
        </div>
        <p className="mt-4 text-xs text-white/50">
          Shop med ekte lenker: <Link href="/shop/" className="text-sea hover:underline">Shop</Link>.
        </p>
      </section>
    </article>
  );
}
