import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hubUrl } from "@/lib/site";

const PAGES = {
  relationship: {
    title: "Oss",
    description: "Historien om Mariell og Jhonatan i MJ Universe.",
    eyebrow: "Relasjon",
    body: "Dette er inngangen til innhold om oss som duo: reise, community, utfordringer og livet bak kulissene.",
  },
  community: {
    title: "Community",
    description: "Community-flaten i MJ Universe.",
    eyebrow: "Fellesskap",
    body: "Her samles chat, oppdateringer og aktivitet. Du finner full funksjonalitet inne i hovedhubben.",
  },
  polls: {
    title: "Polls",
    description: "Avstemninger og challenges i MJ Universe.",
    eyebrow: "Interaksjon",
    body: "Polls brukes til å bestemme innhold, challenges og community-aktiviteter i sanntid.",
  },
  account: {
    title: "Konto",
    description: "Konto og innlogging for MJ Universe.",
    eyebrow: "Tilgang",
    body: "Logg inn for å få personlig feed, medlemskap, historikk og tilgang til alle premium-funksjoner.",
  },
  store: {
    title: "Store",
    description: "Store-flate i MJ Universe.",
    eyebrow: "Store",
    body: "Store er knyttet til kampanjer, innholdspakker og kommersielle moduler i universet.",
  },
  admin: {
    title: "Stats",
    description: "Admin og statistikk for MJ Universe.",
    eyebrow: "Admin",
    body: "Admin-siden brukes for innsikt, status og drift av plattformen.",
  },
} as const;

type Slug = keyof typeof PAGES;

function isSlug(value: string): value is Slug {
  return value in PAGES;
}

export function generateStaticParams() {
  return Object.keys(PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isSlug(slug)) {
    return { title: "MJ Universe" };
  }
  const page = PAGES[slug];
  return {
    title: page.title,
    description: page.description,
  };
}

export default async function GenericHubPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isSlug(slug)) {
    notFound();
  }

  const page = PAGES[slug];
  const target = hubUrl(`/${slug}/`);

  return (
    <article className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">{page.eyebrow}</p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">{page.title}</h1>
      <p className="mt-4 max-w-2xl text-mist">{page.body}</p>

      <div className="mt-10 rounded-2xl border border-line bg-panel/50 p-6 md:p-8">
        <h2 className="font-display text-xl font-semibold text-white">Åpne full side i hub</h2>
        <p className="mt-2 text-sm text-mist">
          Denne versjonen holder samme designspråk som forsiden. Full funksjon ligger i hovedhubben.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={target}
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-white/90"
          >
            Åpne {page.title} i hub
          </a>
          <Link
            href="/"
            className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-white/85 transition hover:bg-white/[0.04]"
          >
            Tilbake til forsiden
          </Link>
        </div>
      </div>
    </article>
  );
}
