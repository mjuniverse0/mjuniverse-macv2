import Link from "next/link";
import { HUB, hubUrl } from "@/lib/site";

export function SiteFooter() {
  const y = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-panel/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-display text-sm font-semibold text-white">MJ Universe</p>
          <p className="mt-1 max-w-sm text-xs text-white/45">
            Denne siden er den redaksjonelle inngangen. Full app, konto og community ligger på{" "}
            <a href={HUB} className="text-sea underline-offset-2 hover:underline">
              mj-universe.net
            </a>
            .
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/40">
          <a href={hubUrl("/privacy/")} className="hover:text-white/70">
            Personvern
          </a>
          <a href={hubUrl("/policies/")} className="hover:text-white/70">
            Retningslinjer
          </a>
          <Link href="/kontakt/" className="hover:text-white/70">
            Kontakt
          </Link>
        </div>
        <p className="text-xs text-white/30 md:text-right">© {y} MJ Universe</p>
      </div>
    </footer>
  );
}
