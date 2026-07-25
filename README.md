# FlugblattGestalten.de 🌻

> „Wir bieten an, Flugblätter zu gestalten, damit Leute wieder das Gefühl bekommen: Ihre Meinung ist unperfekt, absolut
> politisch – und darf gehört werden."

Landing-Page für FlugblattGestalten — eine Hannoveraner Initiative, die irgendwo zwischen Kunst & Aktivismus mit 'ner
Prise groben Unfugs sitzt.

**Live:** [flugblattgestalten.de](https://flugblattgestalten.de)

## 🎯 Über das Projekt

FlugblattGestalten ist eine Initiative, die Menschen zusammenbringt, um gemeinsam kreativ zu werden und politisch
sichtbar zu sein. Wir gestalten Flugblätter, Postkarten, Plakate — und schaffen Räume, in denen Selbstwirksamkeit
spürbar wird.

### Unsere Werte

- **Jede Stimme zählt** – auch die unperfekte, unsichere, wütende, hoffnungsvolle
- **Selbstwirksamkeit ist ansteckend** – wer einmal erlebt, dass die eigene Aktion etwas bewirkt, macht weiter
- **Gemeinschaft stärker als Spaltung** – uns verbindet mehr, als der Algorithmus uns weismachen will
- **Kreativität als Widerstand** – Kunst, Humor und Provokation gegen soziale Kälte und demokratischen Abbau

### Was wir machen

- **Kreative Aktionen:** Guerilla Gardening, Postkarten-Aktionen, Street Art, Plakate
- **Workshops & Bildung:** Siebdruck, Plakatgestaltung, politische Bildung
- **Gemeinschaft schaffen:** Niedrigschwellige Räume, in denen Menschen sich begegnen

**Motto:** „Alles kann, nix muss. Lokal vor viral. Erstmal Hannover."

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build) 7.1.3
- **Sprache:** TypeScript
- **Styling:** Custom CSS mit Design Tokens
- **Runtime:** Node.js ≥22.12.0
- **Package Manager:** Bun
- **Deployment:** Cloudflare Pages (via Wrangler)

## 🚀 Development

### Voraussetzungen

- Node.js ≥22.12.0
- Bun (empfohlen) oder npm

### Installation

```sh
bun install
```

### Commands

| Command           | Action                                    |
| :---------------- | :---------------------------------------- |
| `bun run dev`     | Dev-Server starten auf `localhost:4321`   |
| `bun run build`   | Production-Build erstellen nach `./dist/` |
| `bun run preview` | Build lokal testen                        |
| `bun run check`   | Astro & TypeScript prüfen                 |

## 📁 Projektstruktur

```
/
├── public/              # Statische Assets (Bilder, OG-Image)
├── src/
│   ├── assets/          # Lokale Bilder (werden optimiert)
│   ├── components/      # Astro-Komponenten
│   │   ├── sections/    # Hero, Mission, HowItWorks
│   │   └── Footer.astro
│   ├── content/         # Content-Daten (landing.de.json)
│   ├── layouts/         # Layout-Templates
│   ├── pages/           # Routes (index.astro → /)
│   └── styles/          # Globale Styles & Design Tokens
├── astro.config.mjs     # Astro-Konfiguration
└── package.json
```

## 📝 Content bearbeiten

Alle Texte und Inhalte der Landing-Page sind in [`src/content/landing.de.json`](src/content/landing.de.json)
zentralisiert.

```json
{
  "seo": { ... },
  "hero": { ... },
  "mission": { ... },
  "howItWorks": { ... },
  "contact": { ... },
  "footer": { ... }
}
```

Änderungen an diesem File werden automatisch auf der Seite reflektiert.

## 🎨 Design-System

Design Tokens sind in [`src/styles/tokens.css`](src/styles/tokens.css) definiert:

- Farben (Primary, Accent, Neutrals)
- Typography (Schriftgrößen, Line Heights)
- Spacing (Konsistente Abstände)
- Breakpoints (Responsive Layout)

## 📞 Kontakt & Mitmachen

**E-Mail:** <mitmachen@flugblattgestalten.de>

**Treffen:** Jeden Dienstag um 17 Uhr  
Garage Nord, Weidendamm 28, 30167 Hannover

## 🌈 Vision

In 1 Jahr (2027):

- 5+ neue feste Mitglieder aus verschiedenen Bubbles
- Hannover ist ein bisschen bunter geworden
- Druckerinfrastruktur funktioniert, Material ist griffbereit
- Workshops, Aktionen, Demos erprobt und dokumentiert

Langfristig (5+ Jahre):

- Bekannt in der Region als „die, die Leute aktivieren"
- Methoden werden von anderen Gruppen übernommen
- Menschen streiten sich wieder über die 5%, die uns unterscheiden – nicht über billigen Populismus

## 📎 O-Töne (zum Erinnern)

- „Irgendwas zwischen Kunst & Aktivismus mit ner Prise groben Unfugs"
- „Wofür braucht es Erfolg? Mir reicht's wenn Leutz sich drüber freuen"
- „pLOLitik & Kritzeln sollten so etwa den selben Raum einnehmen"
- „Wir arbeiten nicht fürs Projekt sondern immer vorallem fürs gute Gefühl der Beteiligten"

---

**FlugblattGestalten · Hannover · Lokal vor viral.**
