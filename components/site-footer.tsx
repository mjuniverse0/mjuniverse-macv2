import Link from "next/link";
import { hubUrl } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Forside" },
  { href: "/mariell/", label: "Mariell" },
  { href: "/jhonatan/", label: "Jhonatan" },
  { href: "/relationship/", label: "Oss" },
  { href: "/univers/", label: "Universet" },
  { href: "/community/", label: "Community" },
  { href: "/polls/", label: "Polls" },
  { href: "/account/", label: "Konto" },
  { href: "/vip/", label: "Abonnement" },
  { href: "/shop/", label: "Shop" },
  { href: "/demo/", label: "Demo" },
  { href: "/store/", label: "Store" },
  { href: "/vip/", label: "VIP" },
  { href: "/kontakt/", label: "Kontakt" },
  { href: "/admin/", label: "Stats" },
] as const;

const legalLinks = [
  { href: hubUrl("/privacy/"), label: "Personvern" },
  { href: hubUrl("/policies/"), label: "Retningslinjer" },
  { href: hubUrl("/policy/"), label: "Policy" },
  { href: hubUrl("/user-privacy/"), label: "Bruker personvern" },
  { href: hubUrl("/terms/"), label: "Kjøpsvilkår" },
  { href: hubUrl("/sales-terms/"), label: "Salgsbetingelser" },
  { href: hubUrl("/customer-policy/"), label: "Kundepolicy" },
] as const;

export function SiteFooter() {
  const y = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-panel/40">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <p className="font-display text-sm font-semibold text-white">MJ Universe</p>

        <nav className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/50" aria-label="Footer meny">
          {navLinks.map((item) => (
            <Link key={`${item.href}-${item.label}`} href={item.href} className="hover:text-white/85">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/45">
          {legalLinks.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-white/75">
              {item.label}
            </a>
          ))}
          <Link href="/kontakt/" className="hover:text-white/75">
            Kontakt
          </Link>
        </div>

        <p className="mt-6 text-xs text-white/30">Org.nr. 937 643 543</p>
        <p className="mt-1 text-xs text-white/30">© {y} MJ Universe</p>
      </div>
    </footer>
  );
}
