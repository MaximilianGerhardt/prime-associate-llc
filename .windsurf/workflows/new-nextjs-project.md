---
description: Starte ein neues Next.js Projekt mit Performance, SEO und Funnel-Optimierungen
---

# Next.js Projekt Setup - Best Practices

Nutze diesen Workflow beim Start eines neuen Next.js Projekts, um von Anfang an Performance, SEO und Funnel-Optimierungen einzubauen.

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

## 9. Deployment (Netlify)

1. GitHub Repo verbinden
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Environment Variables setzen
5. Auto-Deploy bei Push aktivieren

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
