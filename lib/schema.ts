import { PROFILE_DATA } from './data/profile';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://joan-apio-portfolio.vercel.app';

export function getPersonSchema() {
  const { name, primaryTitle, secondaryTitle, shortBio, contact, kavibeOverview, competencies } = PROFILE_DATA;

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: "Joan Apio",
    givenName: "Joan",
    familyName: "Apio",
    additionalName: "E.",
    alternateName: [
      'Joan Apio',
      'Joan E. Apio',
      'Joan E Apio',
      'Apio Joan',
      'Joan Apio KAVIBE',
      'Joan Apio Uganda',
      'Joan Apio Strategic Communicator',
      'Joan Apio Portfolio'
    ],
    jobTitle: primaryTitle,
    description: `${shortBio} ${secondaryTitle}. Founder of KAVIBE®.`,
    url: SITE_URL,
    image: `${SITE_URL}/images/joan/hero.png`,
    sameAs: [
      contact.linkedin,
      'https://gfair.network/content/apio-joan',
      contact.website,
      contact.portfolioWebsite,
      'https://www.kavibe.com/'
    ],
    founder: {
      '@type': 'Organization',
      '@id': 'https://www.kavibe.com/#organization',
      name: kavibeOverview.name,
      url: kavibeOverview.websiteUrl,
      description: kavibeOverview.description,
      foundingDate: kavibeOverview.foundedYear,
      logo: `${SITE_URL}/logo/kavibe.png`,
    },
    worksFor: {
      '@type': 'Organization',
      '@id': 'https://www.kavibe.com/#organization',
      name: kavibeOverview.name,
      url: kavibeOverview.websiteUrl,
      description: kavibeOverview.description,
      foundingDate: kavibeOverview.foundedYear,
      logo: `${SITE_URL}/logo/kavibe.png`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kampala',
        addressCountry: 'Uganda'
      }
    },
    knowsAbout: competencies,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kampala',
      addressCountry: 'Uganda'
    }
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Joan Apio — Official Personal Portfolio & Executive Profile',
    alternateName: 'Joan Apio Portfolio',
    description: 'Official portfolio website for Joan Apio (Joan E. Apio), Strategic Communicator and Founder of KAVIBE® in Uganda.',
    author: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Joan Apio'
    }
  };
}

export function getProfilePageSchema(url: string = `${SITE_URL}/about`) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${url}#profilepage`,
    url,
    name: `Joan Apio — Official Professional Profile & Biography`,
    description: `Official indexable profile page for Joan Apio (Joan E. Apio), Ugandan Development Communications & Marketing Specialist and founder of KAVIBE®.`,
    mainEntity: getPersonSchema()
  };
}

