---
description: Starte ein neues Next.js Projekt mit Performance, SEO und Funnel-Optimierungen
---

# Next.js Projekt Setup - Best Practices

Nutze diesen Workflow beim Start eines neuen Next.js Projekts, um von Anfang an Performance, SEO und Funnel-Optimierungen einzubauen.

---

## 0. Projekt-Abfrage (WICHTIG - zuerst klären!)

Bevor du startest, kläre folgende Fragen mit dem User:

1. **Zielmarkt:** EU (DSGVO streng) oder USA/International?
2. **Server-Standort:** Europa oder Amerika? (Für DB und Hosting)
3. **Hosting:** Vercel (empfohlen) oder Netlify?
4. **Domain:** Wie lautet die Domain?
5. **Analytics:** Google Analytics, Plausible, oder keine?
6. **E-Mail-Provider:** Resend, SendGrid, oder andere?

### Empfehlungen nach Markt:
- **EU-Markt:** Server in Frankfurt/EU, DSGVO-konformer Cookie-Banner, Double-Opt-In für Newsletter
- **US-Markt:** Server in US-East, CAN-SPAM compliant, Single-Opt-In erlaubt
- **Beide:** Höchsten Standard (DSGVO) für rechtliche Sicherheit

---

## 1. Projekt initialisieren

```bash
npx create-next-app@latest projektname --typescript --tailwind --eslint --app --src-dir
cd projektname
```

## 2. Abhängigkeiten installieren

```bash
# Database & ORM
npm install drizzle-orm postgres
npm install -D drizzle-kit

# E-Mail
npm install resend

# Validierung
npm install zod

# Icons
npm install lucide-react
```

## 3. Performance-Optimierungen

### next.config.ts
```typescript
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}
```

### .browserslistrc erstellen
```
last 2 Chrome versions
last 2 Firefox versions
last 2 Safari versions
last 2 Edge versions
not dead
not op_mini all
```

### Fonts optimieren (layout.tsx)
```typescript
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'], // Nur benötigte Weights
})
```

### Bilder optimieren
- Immer `next/image` mit `sizes` und `quality` nutzen
- Bilder vor Upload mit TinyPNG komprimieren
- Metadaten entfernen: `sips -d all image.jpg`
- WebP/AVIF wird automatisch generiert

### Dynamic Imports für Below-the-Fold
```typescript
import dynamic from 'next/dynamic'
const Component = dynamic(() => import('@/components/Component'))
```

## 4. SEO-Setup

### Metadata in layout.tsx
```typescript
export const metadata: Metadata = {
  title: { default: 'Site Title', template: '%s | Site Title' },
  description: 'Description',
  metadataBase: new URL('https://domain.com'),
  openGraph: { type: 'website', locale: 'en_US' },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}
```

### robots.txt (public/robots.txt)
```
User-agent: *
Allow: /
Sitemap: https://domain.com/sitemap.xml

Disallow: /api/
Disallow: /admin/
Disallow: /*/confirm
Disallow: /*/unsubscribe
```

### Sitemap generieren
```typescript
// src/app/sitemap.ts
export default function sitemap() {
  return [
    { url: 'https://domain.com', lastModified: new Date() },
    // ... weitere Seiten
  ]
}
```

## 5. Newsletter-Funnel Setup

### Erforderliche Seiten
- `/newsletter` - Landingpage mit Signup-Form
- `/newsletter/confirm` - Bestätigungsseite nach Anmeldung
- `/newsletter/unsubscribe` - Abmeldeseite
- Optional: `/newsletter/assessment`, `/newsletter/calculator` (Lead Magnets)

### API Routes
- `POST /api/newsletter/subscribe` - Anmeldung
- `GET/POST /api/newsletter/unsubscribe` - Abmeldung

### Datenbank-Schema (Drizzle)
```typescript
export const newsletter = pgTable('newsletter', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  firstName: varchar('first_name', { length: 100 }),
  status: varchar('status', { length: 20 }).default('active'),
  unsubscribeToken: varchar('unsubscribe_token', { length: 64 }),
  createdAt: timestamp('created_at').defaultNow(),
})
```

### E-Mail mit Resend
```typescript
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'Name <hello@mail.domain.com>',
  to: [email],
  subject: 'Subject',
  html: '<p>Content</p>',
})
```

## 6. Lead-Formular Setup

### Zod-Validierung
```typescript
const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().optional(),
})
```

### API Route Pattern
```typescript
export async function POST(request: Request) {
  const body = await request.json()
  const validated = schema.safeParse(body)
  if (!validated.success) {
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
  }
  // DB insert + E-Mail senden
  return NextResponse.json({ success: true })
}
```

## 7. Accessibility Checklist

- [ ] Links immer unterstrichen (nicht nur hover)
- [ ] Ausreichend Kontrast (WCAG AA)
- [ ] Alt-Tags für alle Bilder
- [ ] Semantisches HTML (header, main, footer, nav)
- [ ] Focus-States für interaktive Elemente

## 8. Environment Variables

```env
# Database
DATABASE_URL=postgresql://...
POSTGRES_URL=postgresql://...

# E-Mail
RESEND_API_KEY=re_...

# Optional: Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

## 9. Cookie-Consent / DSGVO (PFLICHT!)

### Cookie-Consent-Komponente erstellen
```typescript
// src/components/CookieConsent.tsx
'use client'
import { useState, useEffect } from 'react'

type ConsentSettings = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [consent, setConsent] = useState<ConsentSettings>({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  // Cookie lesen/schreiben, Banner anzeigen wenn keine Consent
  // Consent speichern und Analytics/Marketing aktivieren wenn erlaubt
  // Settings-Modal für granulare Kontrolle
}
```

### Anforderungen DSGVO:
- [ ] Banner beim ersten Besuch anzeigen
- [ ] "Nur notwendige" und "Alle akzeptieren" Buttons
- [ ] Einstellungen jederzeit änderbar (Link im Footer)
- [ ] Consent vor Tracking-Skripten laden
- [ ] Consent-Cookie speichern (1 Jahr)

### In Layout einbinden:
```typescript
// layout.tsx
import { CookieConsent } from '@/components/CookieConsent'

<body>
  {children}
  <CookieConsent />
</body>
```

### Footer: Cookie-Settings Link
```typescript
<CookieSettingsButton className="hover:text-foreground" />
```

---

## 10. Schema.org / Strukturierte Daten

### Organization Schema (layout.tsx oder page.tsx)
```typescript
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Company Name',
  url: 'https://domain.com',
  logo: 'https://domain.com/logo.png',
  sameAs: [
    'https://linkedin.com/company/...',
    'https://twitter.com/...',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@domain.com',
    contactType: 'customer service',
  },
}

// In <head> einfügen:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
/>
```

### FAQ Schema (für FAQ-Seiten)
```typescript
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Question 1?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Answer 1',
      },
    },
    // ... weitere Fragen
  ],
}
```

### Weitere wichtige Schemas:
- **LocalBusiness** - für lokale Unternehmen
- **Product** - für Produkte/Services
- **Article** - für Blog-Posts
- **BreadcrumbList** - für Navigation

---

## 11. Deployment

### Option A: Vercel (empfohlen)
```bash
npm i -g vercel
vercel
```

1. GitHub Repo verbinden
2. Framework: Next.js (auto-detected)
3. Environment Variables setzen
4. Region wählen:
   - EU: `fra1` (Frankfurt)
   - US: `iad1` (Washington DC)
5. Auto-Deploy bei Push

### Option B: Netlify
1. GitHub Repo verbinden
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Environment Variables setzen
5. Auto-Deploy bei Push aktivieren

---

## 12. SEO-Content-Seiten (GEO-optimiert)

Erstelle ausführliche Content-Seiten für organischen Traffic und AI-Suchen (GEO).

### Seiten-Typen mit hohem SEO-Wert:

**1. Pricing/Cost Guide** (`/resources/[topic]-costs`)
- Echte Zahlen und Investment-Ranges
- Cost-Breakdown (Wo geht das Geld hin?)
- Industry Benchmarks Tabelle
- ROI-Vergleich (z.B. AI vs Human)
- 6-8 FAQs mit Schema

**2. Industry Pages** (`/industries/[industry]`)
- 4 Use Cases mit Metriken
- Detaillierte Case Study (Before/After)
- 5 branchenspezifische FAQs
- ROI-Daten und Payback-Zeiten

**3. Implementation Guide** (`/resources/[topic]-guide`)
- Phasen-basierter Prozess
- Timeline pro Scope
- Common Pitfalls + Solutions
- Success Factors
- 6 FAQs

**4. Comparison Pages** (`/compare/[option-a]-vs-[option-b]`)
- Side-by-side Tabelle
- Vorteile beider Optionen
- "Best Fit" Entscheidungshilfe
- 6 Vergleichs-FAQs

### Seiten-Template Struktur:
```tsx
// Jede SEO-Seite sollte enthalten:

// 1. Metadata mit Keywords
export const metadata: Metadata = {
  title: 'Keyword-Rich Title | Brand',
  description: '155 chars mit Primary Keyword',
  keywords: ['8-10 relevante Keywords'],
  alternates: { canonical: '/path' },
}

// 2. FAQ Schema für Rich Snippets
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

// 3. In <main> einfügen:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
/>

// 4. Sektionen:
// - Hero mit Primary Keyword in H1
// - Quick Answer Box (für Featured Snippets)
// - Detailed Content mit H2s für Secondary Keywords
// - Data Tables/Comparisons
// - FAQs (6-8 pro Seite)
// - CTA Section
```

### FAQ Best Practices:
- Fragen wie echte Suchanfragen formulieren
- "How much does X cost?" 
- "What is the ROI of X?"
- "How long does X take?"
- Antworten mit Zahlen und Fakten
- 100-200 Wörter pro Antwort

### Internal Linking:
- Jede Seite verlinkt zu:
  - Pricing/Costs Seite
  - Apply/Contact Form
  - Related Industry Pages
  - Calculator/Assessment Tools

---

## Quick Reference Commands

```bash
# Development
npm run dev

# Build testen
npm run build && npm start

# DB Schema pushen
npx drizzle-kit push

# Bilder optimieren
sips -d all public/images/*.jpg
```
