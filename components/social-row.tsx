import { social } from "@/lib/site";
import { Youtube, Ghost } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

const items = [
  { label: "YouTube", href: social.youtube, icon: Youtube },
  { label: "Snapchat", href: social.snapchat, icon: Ghost },
  { label: "TikTok", href: social.tiktok, icon: TikTokIcon },
] as const;

export function SocialRow() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
      <div className="rounded-3xl border border-line bg-gradient-to-br from-white/[0.04] to-transparent px-6 py-10 md:px-10 md:py-12">
        <h2 className="font-display text-xl font-semibold text-white md:text-2xl">Følg med der du er</h2>
        <p className="mt-2 max-w-xl text-sm text-mist">
          Offisielle kanaler for MJ Universe. Oppdater TikTok-lenken i kodebasen når profilen er bekreftet.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {items.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-line bg-black/30 px-5 py-3 text-sm font-semibold text-white/90 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <Icon className="h-4 w-4 text-coral" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
