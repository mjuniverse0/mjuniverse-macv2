# Videre utvikling — MJ Universe mac v2

Dette dokumentet er ment for deg (eller team) som videreutvikler **mj-universe-macv2** separat fra eller parallelt med hovedmonorepoet.

## 1. Forhold til hovedprosjektet (`../web`)

| Område | mac v2 (`mj-universe-macv2`) | Hovedhub (`MJUniverse/web`) |
|--------|------------------------------|------------------------------|
| Formål | Slank markedsførings-/hub-forside, statisk eksport | Full app: auth, community, polls, demo, shop, m.m. |
| Domene | Typisk ikke egen produksjon — pek brukere til **mj-universe.net** | Kanonisk **https://mj-universe.net** |
| `hubDomains` / domener | `lib/site.ts` | `web/lib/domain-config.ts` |

**Regel:** Når dere legger til et nytt hub-domene eller endrer titler/undertekster, oppdater **begge** steder (eller arkiver dette repoet og bruk kun `web/`).

## 2. Teknologistakk

- **Node** ≥ 20  
- **Next.js 15** (App Router), **React 19**, **TypeScript**  
- **Tailwind CSS 3**  
- **Eksport:** `next.config.ts` har `output: "export"` og `images.unoptimized: true` (påkrevd for statisk hosting uten Image Optimization API).

## 3. Lokalt arbeid

```bash
npm install
npm run dev     # port 3010 (unngår kollisjon med web/ på 3000)
npm run lint
npm run build   # validerer at statisk eksport bygger; artefakt: out/
```

## 4. Deploy (statisk `out/`)

1. `npm run build`  
2. Last opp innholdet i **`out/`** til webserver (FTP, rsync, S3+CloudFront, CloudPanel `htdocs/`, osv.).  
3. Sikre at serveren støtter **client-side routing** for undersider (f.eks. nginx `try_files` til `index.html` der det trengs — for ren statisk eksport har hver rute ofte egen `index.html` i `out/`, så det er vanligvis OK).

**Ikke** legg `.env*.local` i git (allerede i `.gitignore`).

## 5. Innhold og merkevare

- **Hub-lenke:** `lib/site.ts` → `HUB` skal peke på produksjons-URL for full opplevelse.  
- **Sosiale lenker:** Oppdater `social` når offisiell TikTok (eller annet) er bekreftet.  
- **Footer / header:** `components/site-footer.tsx`, `components/site-header.tsx` — hold språk og lenker konsistente med `web/components/shell.tsx` / juridiske sider på hovedhubben.

## 6. Kvalitetssjekk før release

- [ ] `npm run lint` uten feil  
- [ ] `npm run build` fullført  
- [ ] Manuell klikk gjennom: `/`, `/mariell/`, `/jhonatan/`, `/univers/`, `/kontakt/`  
- [ ] Alle eksterne lenker (Sosiale, Verdant, hub) fungerer  
- [ ] Sammenlign `hubDomains` med `web/lib/domain-config.ts`  

## 7. GitHub-repo

Repo-navn: **mjuniverse-macv2**. Dette katalogen er rot i det repoet (ikke hele `MJUniverse`-monorepoet med mindre dere bevisst endrer det).

## 8. Idéer for senere (valgfritt)

- CI (GitHub Actions) som kjører `lint` + `build` på PR.  
- Automatisk deploy av `out/` til samme host som `mj-universe.net` **kun** hvis dere vil erstatte en del av hubben — koordiner med `web/`-deploy.  
- Delte design tokens: vurder å ekstrahere felles Tailwind-tema til et lite delt pakke-repo — lav prioritet så lenge to kodebaser er små.

---

*Sist oppdatert ved opprettelse av GitHub-repo.*
