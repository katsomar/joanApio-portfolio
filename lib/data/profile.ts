export interface FeaturedProject {
  id: string;
  title: string;
  category: string;
  organization: string;
  year: string;
  location?: string;
  summary: string;
  role: string;
  image: string;
  impact?: string[];
  featuredOnHome: boolean;
  editorialLayout: 'image-left' | 'image-right' | 'full-width' | 'asymmetric';
}

export interface JourneyItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  highlight: string;
  details: string[];
}

export interface ProfileData {
  name: string;
  primaryTitle: string;
  secondaryTitle: string;
  tagline: string;
  badge: string;
  shortBio: string;
  extendedStory: string[];
  kavibeOverview: {
    name: string;
    tagline: string;
    description: string;
    corePillars: string[];
    websiteUrl: string;
    foundedYear: string;
  };
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    website: string;
    location: string;
    organization: string;
  };
  philosophy: {
    quote: string;
    author: string;
    pillars: Array<{
      title: string;
      description: string;
    }>;
  };
  projects: FeaturedProject[];
  journey: JourneyItem[];
  competencies: string[];
}

export const PROFILE_DATA: ProfileData = {
  name: "JOAN APIO",
  primaryTitle: "Strategic Communicator & Creative Storyteller",
  secondaryTitle: "Development Communications · Marketing · Branding",
  tagline: "Bridging complex development initiatives and human impact through story-driven strategy.",
  badge: "Founder / KAVIBE®",
  shortBio: "Senior Development Communications & Marketing Specialist with over 15 years of experience shaping strategic narratives, leading institutional rebrandings, and mentoring the next generation of communicators across Africa.",
  extendedStory: [
    "Joan Apio is an empowerment catalyst, strategic communicator, and the founder of KAVIBE®. Over the past decade and a half, she has operated at the intersection of international development, higher education, strategic marketing, and human storytelling.",
    "Her approach rejects generic corporate communication. Instead, she crafts authentic narratives that translate complex agricultural research, institutional missions, and community programs into clear visual and written stories that drive measurable engagement.",
    "Through KAVIBE®, Joan partners with universities, development agencies, and non-profits across Africa—delivering everything from end-to-end institutional rebrandings and digital skilling workshops to documentary production and mentorship for mid-career professionals."
  ],
  kavibeOverview: {
    name: "KAVIBE®",
    tagline: "Story-Based Marketing, Branding & Strategic Communication",
    description: "KAVIBE® is a specialized branding, communication, and marketing platform based in Uganda. We build long-lasting brand identity systems and communication assets that illuminate organizational impact across Africa.",
    corePillars: [
      "Strategic Communication Planning",
      "Development Sector Branding & Rebranding",
      "Field Documentaries & Visual Storytelling",
      "Digital Marketing & Upskilling Workshops",
      "Communications Mentorship Program"
    ],
    websiteUrl: "https://www.kavibe.com/",
    foundedYear: "2017"
  },
  contact: {
    email: "joan@kavibe.com",
    phone: "+256 700 000 000",
    linkedin: "https://www.linkedin.com/in/joan-apio/",
    website: "https://www.kavibe.com/",
    location: "Kampala, Uganda",
    organization: "KAVIBE® / Strategic Communication"
  },
  philosophy: {
    quote: "Communication is not about announcing what you do; it is about illuminating why it matters to the people you serve.",
    author: "Joan Apio",
    pillars: [
      {
        title: "Human-Centric Impact",
        description: "Behind every statistical report lies a human story waiting to be told with dignity and clarity."
      },
      {
        title: "Editorial Precision",
        description: "Restraint and visual intelligence elevate brands above noisy, template-driven marketing."
      },
      {
        title: "Sustainable Capacity",
        description: "True communication success leaves local teams empowered, trained, and equipped for the long run."
      }
    ]
  },
  projects: [
    {
      id: "university-of-juba",
      title: "Institutional Rebranding of University of Juba",
      category: "Branding · Institutional Strategy",
      organization: "University of Juba / KAVIBE®",
      year: "2021 — 2022",
      location: "Juba, South Sudan",
      summary: "Comprehensive identity revitalization for South Sudan's premier higher education institution, aligning visual heritage with modern academic positioning.",
      role: "Lead Brand Strategist & Editorial Director",
      image: "/images/projects/project_juba.png",
      impact: [
        "Modernized brand architecture & visual guidelines",
        "Redesigned official portal & academic publications",
        "Trained internal communications unit on brand governance"
      ],
      featuredOnHome: true,
      editorialLayout: "image-left"
    },
    {
      id: "tagdev-impact-stories",
      title: "TAGDev Impact Storytelling Series",
      category: "Development Communication · Visual Documentaries",
      organization: "TAGDev / Mastercard Foundation / RUFORUM",
      year: "2018 — 2023",
      location: "East & West Africa",
      summary: "Multi-country storytelling initiative capturing how agricultural higher education transforms rural youth entrepreneurship and community livelihoods.",
      role: "Communications Specialist & Documentary Producer",
      image: "/images/joan/2.jpg",
      impact: [
        "Produced 25+ multimedia impact feature stories",
        "Engaged regional donor stakeholders & policymakers",
        "Published high-end print editorial impact showcase"
      ],
      featuredOnHome: true,
      editorialLayout: "image-right"
    },
    {
      id: "sena-advocate-consult",
      title: "Brand Identity & Digital Presence for SENA Advocate",
      category: "Branding · Photography · Copywriting",
      organization: "SENA Advocate & Consult",
      year: "2023",
      location: "Kampala, Uganda",
      summary: "Tailored brand design, bespoke executive portraiture, and high-impact website copywriting for a premier legal and development advisory firm.",
      role: "Creative Director & Lead Copywriter",
      image: "/images/joan/1.jpg",
      impact: [
        "Executive brand identity & collateral suite",
        "On-location photography & profile direction",
        "Responsive digital portal launch"
      ],
      featuredOnHome: true,
      editorialLayout: "full-width"
    },
    {
      id: "digital-skilling-practitioners",
      title: "Digital Skilling for Development Practitioners",
      category: "Capacity Building · Workshop Facilitation",
      organization: "KAVIBE® Academy",
      year: "2020 — Present",
      location: "Regional Africa",
      summary: "Practical training modules empowering NGO officers, researchers, and university staff with digital communication, social strategy, and storytelling tools.",
      role: "Lead Trainer & Workshop Facilitator",
      image: "/images/joan/10.jpg",
      impact: [
        "Trained 300+ communication officers across Africa",
        "Hands-on modules in visual storytelling & social media",
        "Ongoing mid-career mentorship network"
      ],
      featuredOnHome: true,
      editorialLayout: "asymmetric"
    },
    {
      id: "ruforum-repository",
      title: "RUFORUM Institutional Knowledge Management",
      category: "Knowledge Management · Digital Libraries",
      organization: "RUFORUM Network",
      year: "2012 — 2018",
      location: "Kampala, Uganda",
      summary: "Pioneering the open-access institutional repository connecting 120+ African agricultural universities to globally accessible research findings.",
      role: "Information & Knowledge Management Specialist",
      image: "/images/joan/8.jpeg",
      impact: [
        "Built open repository indexed globally",
        "Cataloged thousands of research papers & policy briefs",
        "Championed Web 2.0 research sharing in Africa"
      ],
      featuredOnHome: false,
      editorialLayout: "image-left"
    }
  ],
  journey: [
    {
      period: "2017 — Present",
      role: "Founder & Lead Managing Consultant",
      organization: "KAVIBE® Uganda",
      location: "Kampala, Uganda",
      highlight: "Establishing and growing KAVIBE into a sought-after development communications & branding partner.",
      details: [
        "Leading strategic communication consultancies for international development partners.",
        "Directing field documentary teams, brand identity overhauls, and content strategy.",
        "Facilitating mentorship programs for rising African communicators."
      ]
    },
    {
      period: "2008 — 2018",
      role: "Communications & Knowledge Management Specialist",
      organization: "RUFORUM Network",
      location: "Kampala, Uganda",
      highlight: "Spearheading regional communication, media relations, and repository management across African universities.",
      details: [
        "Managed regional network communication campaigns across 38 African countries.",
        "Established institutional repositories and digital learning frameworks.",
        "Edited flagship publications, conference proceedings, and policy briefs."
      ]
    },
    {
      period: "2005 — 2008",
      role: "Development Communications Associate",
      organization: "Regional Agricultural & Higher Education Initiatives",
      location: "East Africa",
      highlight: "Early field-level story gathering, media outreach, and publication design.",
      details: [
        "Gathered grassroots community impact stories in rural Uganda & Kenya.",
        "Coordinated press briefings and media visits for development projects."
      ]
    }
  ],
  competencies: [
    "Development Communication",
    "Brand Strategy & Architecture",
    "Creative & Editorial Storytelling",
    "Field Documentaries & Photography",
    "Digital Skilling & Mentorship",
    "Executive Copywriting",
    "Knowledge Management",
    "Stakeholder & Media Relations"
  ]
};
