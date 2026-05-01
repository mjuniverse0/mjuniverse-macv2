/** Canonical hub (full app + community). This v2 site is the public front door. */
export const HUB = "https://mj-universe.net" as const;

export const social = {
  snapchat: "https://www.snapchat.com/add/mj_universe",
  youtube: "https://www.youtube.com/@MJUniverse-1",
  /** Oppdater når offisiell TikTok-URL er bekreftet */
  tiktok: "https://www.tiktok.com/",
} as const;

export type HubDomain = {
  host: string;
  title: string;
  subtitle: string;
  path: string;
};

/** Speiler web/lib/domain-config.ts — lenker til hovedhubben. */
export const hubDomains: HubDomain[] = [
  {
    host: "mj-universe.net",
    title: "Hovedhub",
    subtitle: "App, forsiden og alt samlet",
    path: "/",
  },
  {
    host: "mj-universe.vip",
    title: "VIP",
    subtitle: "Støtte, betaling og VIP-innhold",
    path: "/vip/",
  },
  {
    host: "mj-universe.social",
    title: "Social",
    subtitle: "Snapchat, TikTok, YouTube og community",
    path: "/community/",
  },
  {
    host: "mj-universe.media",
    title: "Media",
    subtitle: "Video, embeds og utvalgt media",
    path: "/media/",
  },
  {
    host: "mj-universe.live",
    title: "Live",
    subtitle: "Direktesendinger",
    path: "/live/",
  },
  {
    host: "mj-universe.date",
    title: "Date",
    subtitle: "Vlogs og timeline",
    path: "/date/",
  },
  {
    host: "mj-universe.lol",
    title: "Challenges",
    subtitle: "Utfordringer og moro",
    path: "/challenges/",
  },
  {
    host: "mj-universe.watch",
    title: "Watch",
    subtitle: "Ekstra klipp",
    path: "/watch/",
  },
  {
    host: "mj-universe.store",
    title: "Store",
    subtitle: "Verdant og checkout",
    path: "/store/",
  },
  {
    host: "mj-universe.shop",
    title: "Shop",
    subtitle: "Digitale produkter og medlemskap",
    path: "/shop/",
  },
];

export function hubUrl(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${HUB}${p}`;
}
