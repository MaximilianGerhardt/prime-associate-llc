import { 
  generateOrganizationSchema, 
  generateWebSiteSchema,
  generateServiceSchema,
  generateFAQSchema 
} from '@/lib/seo'

const organizationSchema = generateOrganizationSchema()
const webSiteSchema = generateWebSiteSchema()
const serviceSchema = generateServiceSchema()
const faqSchema = generateFAQSchema()

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  )
}
