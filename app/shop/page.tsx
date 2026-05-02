import type { Metadata } from "next";
import { ShopCatalog } from "@/components/shop-catalog";

export const metadata: Metadata = {
  title: "Shop",
  description: "Produkter og betalingslenker for MJ Universe via Vipps og Strex mobilregning.",
};

export default function ShopPage() {
  return (
    <article className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">MJ Universe</p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">Kjøp</h1>
      <p className="mt-4 max-w-3xl text-mist">
        Vippskassa er aktiv for MJUniverse (MSN: 1094264). Legg til produkter i kjøpsflyten med betalingslenker via
        Vipps og Strex mobilregning.
      </p>
      <ShopCatalog />
    </article>
  );
}
