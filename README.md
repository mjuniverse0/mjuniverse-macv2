# MJ Universe — mac v2 (Next.js)

Offentlig **referanse-build** av MJ Universe-hubben: forsiden, skapere, univers/domener og kontakt. Bygget med **Next.js 15** (App Router), **React 19** og **Tailwind CSS**, med **statisk eksport** (`output: "export"`) klar for vanlig webhotell eller CDN.

## Hovedhub

Den **kanoniske** full-opplevelsen (community, polls, konto, demo, m.m.) ligger i hovedrepoet under [`web/`](../web) på **https://mj-universe.net**. Dette prosjektet er en **lettere, frittstående kopi** av den visuelle «mac v2»-retningen — nyttig som eget repo, prototype eller speil.

## Kom i gang

```bash
npm install
npm run dev    # http://localhost:3010
npm run build  # genererer out/
npm run lint
```

## Viktige filer

| Fil / mappe | Formål |
|-------------|--------|
| `lib/site.ts` | Hub-URL, sosiale lenker, liste over `hubDomains` (synk med `web/lib/domain-config.ts` ved endring) |
| `app/` | Sider: forsiden, Mariell, Jhonatan, Univers, Kontakt |
| `components/` | Header, footer, hero, bento, skaper-stripe |
| `next.config.ts` | Statisk eksport, `trailingSlash`, bilder uoptimert (for `out/`) |

## Dokumentasjon

- **[docs/DEVELOPMENT.md](docs/DEVELOPMENT.md)** — videre utvikling: synk med `web/`, deploy, sjekkliste.

## Lisens

Privat prosjekt (`private: true` i `package.json`). Rettigheter følger MJ Universe / utgiver.
