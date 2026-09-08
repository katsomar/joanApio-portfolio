import { PROFILE_DATA } from './data/profile';

export function getPersonSchema() {
  const { name, primaryTitle, secondaryTitle, shortBio, contact, kavibeOverview, competencies } = PROFILE_DATA;

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://www.kavibe.com/#person',
    name,
    jobTitle: primaryTitle,
    description: `${shortBio} ${secondaryTitle}.`,
    url: 'https://www.kavibe.com',
    image: 'https://www.kavibe.com/images/joan/hero.png',
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
      logo: 'https://www.kavibe.com/images/joan/hero.png',
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

export function getProfilePageSchema(url: string = 'https://www.kavibe.com/about') {
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
