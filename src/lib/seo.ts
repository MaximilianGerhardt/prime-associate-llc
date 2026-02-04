export const siteConfig = {
  name: 'Prime Associates LLC',
  description: 'The world\'s most exclusive investment business accelerator for the digital age. Global AI Business Accelerator, Tier-1 Digital Investment Catalyst, AI-Driven Revenue Scaling.',
  url: 'https://p-a.llc',
  ogImage: 'https://p-a.llc/og-image.png',
  links: {
    linkedin: 'https://linkedin.com/company/primeassociates',
  },
  keywords: [
    'Global AI Business Accelerator',
    'High-Ticket Investment Accelerator',
    'Tier-1 Digital Investment Catalyst',
    'AI-Driven Revenue Scaling',
    'Autonomous AI Sales Systems',
    'Digital Business Acceleration',
    'UHNW Investment Partners',
    'Family Office Investment',
    'AI Venture Capital',
    'Global Digital Marketing Dominance',
  ],
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Prime Associates LLC',
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    foundingDate: '2024',
    sameAs: [siteConfig.links.linkedin],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '23160 Fashion Dr Ste 220',
      addressLocality: 'Estero',
      addressRegion: 'FL',
      postalCode: '33928',
      addressCountry: 'US',
    },
    taxID: '41-3650497',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Business Development',
      email: 'info@p-a.llc',
    },
  }
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Investment Business Acceleration',
    provider: {
      '@type': 'Organization',
      name: 'Prime Associates LLC',
    },
    description: 'Tier-1 digital investment catalyst providing AI-driven revenue scaling, autonomous sales systems, and exponential business acceleration for qualified ventures.',
    areaServed: {
      '@type': 'Place',
      name: 'Global',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Investment Acceleration Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Nexus Framework Implementation',
            description: 'Proprietary stability bedrock for digital ventures',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Momentum Injection',
            description: 'Exponential velocity acceleration for qualified businesses',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Revenue Systems',
            description: 'Autonomous AI-driven sales and revenue generation',
          },
        },
      ],
    },
  }
}

export function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Prime Associates LLC?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Prime Associates LLC is a global AI business accelerator and investment catalyst headquartered in Estero, Florida (EIN: 41-3650497). We specialize in three core areas: AI Business Acceleration, Autonomous Revenue Systems, and Digital Market Dominance. We partner with ventures seeking $500K to $10M+ in investment acceleration, providing capital, AI infrastructure, and direct execution support.',
        },
      },
      {
        '@type': 'Question',
        name: 'What types of businesses does Prime Associates work with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We exclusively partner with: (1) High-end AI ventures with proven technology, (2) Digital businesses demonstrating scalability with $500K+ annual revenue, (3) Entrepreneurs seeking rapid 10x growth through AI automation. We do not work with early-stage concepts, businesses requiring extensive validation, or ventures below our minimum investment threshold of $500,000.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the Nexus Framework?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Nexus Framework is Prime Associates\' proprietary methodology for business acceleration. It consists of three phases: (1) Foundation - establishing stable operational infrastructure, (2) Acceleration - deploying AI systems for revenue generation, (3) Dominance - scaling to category leadership.',
        },
      },
      {
        '@type': 'Question',
        name: 'What investment range does Prime Associates consider?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Prime Associates operates in high-ticket investment ranges: Minimum $500,000, typical range $1M-$5M, maximum $10M+. Investment includes capital injection plus AI infrastructure deployment, execution team support, and access to our partner network.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the qualification process work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our qualification process has four stages: (1) Application submission via our online form, (2) Initial review within 48 hours, (3) Strategy call with our investment team, (4) Due diligence and partnership agreement. Approval rate is approximately 8% of applications.',
        },
      },
      {
        '@type': 'Question',
        name: 'What makes Prime Associates different from traditional VCs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Prime Associates differs from traditional VCs in four key ways: (1) We provide execution, not just capital—our team actively builds and deploys AI systems, (2) We deliver results in 90 days, not years, (3) We focus exclusively on AI-driven revenue acceleration, (4) We maintain a hands-on partnership model.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Prime Associates located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Prime Associates LLC is headquartered at 23160 Fashion Dr Ste 220, Estero, FL 33928, United States. We operate globally with partners across North America, Europe, and Asia-Pacific regions. Contact us at info@p-a.llc for partnership inquiries.',
        },
      },
      {
        '@type': 'Question',
        name: 'What results can partners expect from Prime Associates?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our portfolio companies typically achieve: 3-5x revenue growth within 12 months, 65% reduction in operational costs through AI automation, 24/7 autonomous revenue generation capability, and category leadership positioning in their market.',
        },
      },
    ],
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
