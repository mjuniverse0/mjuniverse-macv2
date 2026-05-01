import type { Metadata } from "next";
import { hubDomains, hubUrl } from "@/lib/site";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Universet",
  description:
    "Oversikt over MJ Universe-domener — hver flate har et formål, alt kobles til samme hub på mj-universe.net.",
};

export default function UniversPage() {
  return (
    <article className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <header className="max-w-2xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">Struktur</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Universet i domener
        </h1>
        <p className="mt-4 text-mist">
          MJ Universe er én teknisk plattform med flere tydelige innganger. Tabellen under viser hva hvert domene er
          ment å bære — alle ruter går til hovedappen på mj-universe.net.
        </p>
      </header>

      <div className="mt-14 overflow-hidden rounded-2xl border border-line bg-panel/40">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-line bg-black/30 text-[11px] font-semibold uppercase tracking-wider text-white/45">
            <tr>
              <th className="px-4 py-3 md:px-6">Domene</th>
              <th className="hidden px-4 py-3 md:table-cell md:px-6">Rolle</th>
              <th className="px-4 py-3 text-right md:px-6">Åpne</th>
            </tr>
          </thead>
          <tbody>
            {hubDomains.map((d) => (
              <tr key={d.host} className="border-b border-line/80 last:border-0 hover:bg-white/[0.02]">
                <td className="px-4 py-4 font-mono text-xs text-white/90 md:px-6 md:text-sm">{d.host}</td>
                <td className="hidden px-4 py-4 text-mist md:table-cell md:px-6">
                  <span className="font-medium text-white/80">{d.title}</span>
                  <span className="mt-0.5 block text-xs text-white/45">{d.subtitle}</span>
                </td>
                <td className="px-4 py-4 text-right md:px-6">
                  <a
                    href={`https://${d.host}${d.path}`}
                    className="inline-flex items-center gap-1 rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-white/80 hover:border-white/25 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Gå
                    <ExternalLink className="h-3 w-3 opacity-60" aria-hidden />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-8 text-center text-sm text-white/45">
        Snarvei til hovedhub:{" "}
        <a href={hubUrl("/")} className="font-semibold text-sea underline-offset-2 hover:underline">
          mj-universe.net
        </a>
      </p>
    </article>
  );
}
