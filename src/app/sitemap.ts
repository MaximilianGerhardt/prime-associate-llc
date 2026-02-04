import { MetadataRoute } from 'next'

const SITE_URL = 'https://p-a.llc'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/expertise', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/expertise/ai-acceleration', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/expertise/revenue-systems', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/expertise/digital-dominance', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/resources/ai-automation-costs', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/industries/saas', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/industries/ecommerce', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/industries/agencies', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/newsletter', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/newsletter/assessment', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/newsletter/calculator', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
