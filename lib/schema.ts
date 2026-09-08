import { PROFILE_DATA } from './data/profile';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://joan-apio-portfolio.vercel.app';

export function getPersonSchema() {
  const { name, primaryTitle, secondaryTitle, shortBio, contact, kavibeOverview, competencies } = PROFILE_DATA;

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name,
    jobTitle: primaryTitle,
    description: `${shortBio} ${secondaryTitle}.`,
    url: SITE_URL,
    image: `${SITE_URL}/images/joan/hero.png`,
    sameAs: [
      contact.linkedin,
      contact.website
    ],
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

export function getProfilePageSchema(url: string = `${SITE_URL}/about`) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${url}#profilepage`,
    url,
    name: `Joan Apio — Official Professional Profile & Biography`,
    description: `Official indexable profile page for Joan Apio, Ugandan Development Communications & Marketing Specialist and founder of KAVIBE®.`,
    mainEntity: getPersonSchema()
  };
}
