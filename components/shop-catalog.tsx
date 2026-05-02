"use client";

import { useEffect, useMemo, useState } from "react";

type CatalogProduct = {
  name: string;
  price: string;
  description: string;
  group: string;
  mva: string;
  vipps: string;
  strex: string;
};

type PrintfulProduct = {
  id: number;
  name: string;
  thumbnail_url?: string;
};

const VIPPS_NR = "50352";
const PRINTFUL_PROXY =
  "https://yefatcprqfybbqxiarcz.supabase.co/functions/v1/printful-proxy/products?limit=50";

const DEFAULT_PRODUCTS: CatalogProduct[] = [
  {
    name: "Coffee Support",
    price: "29,00 kr",
    description: "Liten støtte, men betyr mye.",
    group: "SUPPORT US",
    mva: "0%",
    vipps: "/vip/?product=coffee-support&method=vipps&vippsnr=50352",
    strex: "/vip/?product=coffee-support&method=strex&vippsnr=50352",
  },
  {
    name: "Big Support",
    price: "79,00 kr",
    description: "Vanlig supporter-tip.",
    group: "SUPPORT US",
    mva: "0%",
    vipps: "/vip/?product=big-support&method=vipps&vippsnr=50352",
    strex: "/vip/?product=big-support&method=strex&vippsnr=50352",
  },
  {
    name: "Major Support",
    price: "199,00 kr",
    description: "Sterk støtte til utvikling av MJ Universe.",
    group: "SUPPORT US",
    mva: "0%",
    vipps: "/vip/?product=major-support&method=vipps&vippsnr=50352",
    strex: "/vip/?product=major-support&method=strex&vippsnr=50352",
  },
  {
    name: "Legend Support",
    price: "499,00 kr",
    description: "For ekte fans som vil løfte prosjektet.",
    group: "SUPPORT US",
    mva: "0%",
    vipps: "/vip/?product=legend-support&method=vipps&vippsnr=50352",
    strex: "/vip/?product=legend-support&method=strex&vippsnr=50352",
  },
  {
    name: "Starter VIP",
    price: "79,00 kr",
    description: "Starter VIP med eksklusivt innhold og tidlig tilgang. For å teste ut i 30 dager.",
    group: "Abonnement",
    mva: "0%",
    vipps: "/vip/?product=starter-vip&method=vipps&vippsnr=50352",
    strex: "/vip/?product=starter-vip&method=strex&vippsnr=50352",
  },
  {
    name: "Månedlig VIP",
    price: "99,00 kr",
    description: "Månedlig VIP med eksklusivt innhold og tidlig tilgang.",
    group: "Abonnement",
    mva: "0%",
    vipps: "/vip/?product=monthly-vip&method=vipps&vippsnr=50352",
    strex: "/vip/?product=monthly-vip&method=strex&vippsnr=50352",
  },
  {
    name: "Kvartal VIP",
    price: "299,00 kr",
    description: "Kvartal VIP med eksklusivt innhold og tidlig tilgang.",
    group: "Abonnement",
    mva: "0%",
    vipps: "/vip/?product=quarterly-vip&method=vipps&vippsnr=50352",
    strex: "/vip/?product=quarterly-vip&method=strex&vippsnr=50352",
  },
  {
    name: "Halvår VIP",
    price: "549,00 kr",
    description: "Halvår VIP med eksklusivt innhold og tidlig tilgang.",
    group: "Abonnement",
    mva: "0%",
    vipps: "/vip/?product=halfyear-vip&method=vipps&vippsnr=50352",
    strex: "/vip/?product=halfyear-vip&method=strex&vippsnr=50352",
  },
  {
    name: "Årlig VIP",
    price: "999,00 kr",
    description: "Årlig VIP med eksklusivt innhold og tidlig tilgang.",
    group: "Abonnement",
    mva: "0%",
    vipps: "/vip/?product=yearly-vip&method=vipps&vippsnr=50352",
    strex: "/vip/?product=yearly-vip&method=strex&vippsnr=50352",
  },
];

export function ShopCatalog() {
  const [printfulProducts, setPrintfulProducts] = useState<PrintfulProduct[]>([]);
  const [syncText, setSyncText] = useState("Synkroniserer produkter fra Printful ...");

  useEffect(() => {
    let active = true;
    fetch(PRINTFUL_PROXY)
      .then((r) => r.json())
      .then((data) => {
        if (!active) return;
        if (data?.ok && Array.isArray(data.result)) {
          setPrintfulProducts(data.result as PrintfulProduct[]);
          setSyncText(
            `Printful sync aktiv (${data.result.length} produkter, store ${String(data.store_id || "")}).`,
          );
          return;
        }
        setSyncText("Printful sync tilgjengelig, men returnerte ingen produkter.");
      })
      .catch(() => {
        if (!active) return;
        setSyncText("Printful sync feilet, viser lokal katalog.");
      });
    return () => {
      active = false;
    };
  }, []);

  const printfulNames = useMemo(() => new Set(printfulProducts.map((p) => p.name.toLowerCase())), [printfulProducts]);

  return (
    <>
      <p className="mt-3 text-xs text-sea">{syncText}</p>
      <section className="mt-6 rounded-2xl border border-line bg-panel/40 p-5">
        <h2 className="font-display text-xl font-semibold text-white">Vipps betaling (50352)</h2>
        <p className="mt-2 text-sm text-mist">
          QR er midlertidig deaktivert. Bruk betalingslenkene på hver vare, eller betal manuelt til Vippsnummer 50352.
        </p>
      </section>

      {printfulProducts.length > 0 ? (
        <section className="mt-8 rounded-2xl border border-line bg-panel/40 p-5">
          <h2 className="font-display text-xl font-semibold text-white">Printful produkter (automatisk)</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {printfulProducts.map((item) => (
              <article key={item.id} className="rounded-xl border border-line bg-black/20 p-3">
                <p className="text-sm font-semibold text-white">{item.name}</p>
                {item.thumbnail_url ? (
                  <img
                    src={item.thumbnail_url}
                    alt={item.name}
                    loading="lazy"
                    className="mt-3 h-24 w-full rounded-lg object-cover"
                  />
                ) : null}
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {DEFAULT_PRODUCTS.map((product) => (
          <section key={product.name} className="rounded-2xl border border-line bg-panel/50 p-5">
            <h2 className="font-display text-xl font-semibold text-white">{product.name}</h2>
            <p className="mt-2 text-sm text-mist">{product.description}</p>
            <p className="mt-3 text-xs uppercase tracking-wider text-white/50">
              {product.group} · MVA {product.mva}
            </p>
            <p className="mt-4 text-lg font-semibold text-white">{product.price}</p>
            <div className="mt-5 grid gap-2">
              <a
                href={product.vipps}
                className="rounded-xl bg-[#ff5b24] px-4 py-2 text-center text-sm font-semibold text-white transition hover:opacity-90"
              >
                Betalingslenke Vipps
              </a>
              <a
                href={product.strex}
                className="rounded-xl bg-[#2bbdb3] px-4 py-2 text-center text-sm font-semibold text-[#062825] transition hover:opacity-90"
              >
                Betalingslenke Strex mobilregning
              </a>
            </div>
            {printfulNames.has(product.name.toLowerCase()) ? (
              <p className="mt-3 text-xs text-sea">Match i Printful-katalog.</p>
            ) : null}
          </section>
        ))}
      </div>

      <p className="mt-8 text-sm text-white/55">
        Vippsnummer for betalingslenkene: {VIPPS_NR}. Oppgjør: Daglig. Transaksjonskostnader: 1,75 %.
      </p>
    </>
  );
}
