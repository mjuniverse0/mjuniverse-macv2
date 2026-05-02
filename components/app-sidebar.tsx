import Link from "next/link";

const secondaryLinks = [
  { href: "/", label: "Forside (Hub)" },
  { href: "/relationship/", label: "Oss (Om MJ Universe)" },
  { href: "/univers/", label: "Universet" },
  { href: "/media/", label: "Media / Video" },
  { href: "/challenges/", label: "Challenges" },
  { href: "/vip/", label: "Abonnement" },
  { href: "/kontakt/", label: "Kontakt" },
  { href: "/admin/", label: "Stats" },
] as const;

export function AppSidebar() {
  return (
    <aside className="v2-sidebar sticky top-24 h-fit">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">Sekundær navigasjon</p>
      <nav className="mt-4 flex flex-col gap-1.5" aria-label="Sekundær meny">
        {secondaryLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="rounded-xl border border-transparent px-3 py-2 text-sm text-white/72 transition hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
