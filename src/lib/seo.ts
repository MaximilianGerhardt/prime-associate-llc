export const siteConfig = {
  name: 'Prime Associates LLC',
  description: 'The world\'s most exclusive investment business accelerator for the digital age. Global AI Business Accelerator, Tier-1 Digital Investment Catalyst, AI-Driven Revenue Scaling.',
  url: 'https://primeassociate.com',
  ogImage: 'https://primeassociate.com/og.jpg',
  links: {
    linkedin: 'https://linkedin.com/company/primeassociate',
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
      email: 'inquiries@primeassociate.com',
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
          text: 'Prime Associates LLC is a sovereign investment catalyst operating globally. We leverage our proprietary Nexus Framework to inject exponential Momentum into digital business models, focusing on high-end AI ventures, autonomous sales systems, and algorithmic revenue generation.',
        },
      },
      {
        '@type': 'Question',
        name: 'What types of businesses does Prime Associates work with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We exclusively partner with high-end AI ventures, digital businesses with proven scalability, and entrepreneurs who understand that time is the ultimate currency. We do not work with early-stage concepts or businesses that require extensive validation.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the Nexus Framework?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Nexus Framework is our proprietary stability bedrock—a systematic approach that provides immovable foundation for rapid scaling. It ensures that acceleration does not compromise structural integrity.',
        },
      },
      {
        '@type': 'Question',
        name: 'What investment range does Prime Associates consider?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We operate exclusively in high-ticket engagements. Minimum partnership thresholds start at $500,000. This is non-negotiable and by design—it ensures alignment with partners who are serious about exponential growth.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the qualification process work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our qualification process is rigorous and by invitation. Submit your inquiry through our form. If there is alignment, our team will reach out within 48 hours. Not every submission proceeds—this selectivity is what ensures results.',
        },
      },
      {
        '@type': 'Question',
        name: 'What makes Prime Associates different from traditional VCs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We are not a traditional VC. We are a catalyst. Traditional VCs provide capital and wait. We provide capital, infrastructure, AI systems, and direct execution support. Every second of engagement multiplies enterprise revenue.',
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
