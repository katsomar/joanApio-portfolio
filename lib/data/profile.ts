export interface FeaturedProject {
  id: string;
  title: string;
  category: string;
  categories?: string[];
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
    portfolioWebsite: string;
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
  name: "Joan E. Apio",
  primaryTitle: "Strategic Communicator & Creative Storyteller",
  secondaryTitle: "Development Communications · Marketing · Branding",
  tagline: "Bridging complex development initiatives and human impact through story-driven strategy.",
  badge: "Founder / KAVIBE®",
  shortBio: "Senior Development Communications & Marketing Specialist with over 15 years of experience shaping strategic narratives, leading institutional rebrandings, and mentoring the next generation of communicators across Africa.",
  extendedStory: [
    "Joan E. Apio is an empowerment catalyst, strategic communicator, and the founder of KAVIBE®. Over the past decade and a half, she has operated at the intersection of international development, higher education, strategic marketing, and human storytelling.",
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
    email: "j.apio@kavibe.com",
    phone: "+256 772 946826",
    linkedin: "https://www.linkedin.com/in/apiojoan/",
    website: "https://www.kavibe.com/",
    portfolioWebsite: "https://joan-apio-portfolio.vercel.app/",
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
    // Category 1: Training. Strategic Communication. Facilitation
    {
      id: "uganda-aids-commission",
      title: "Uganda AIDs Commission Strategic Communication & Training",
      category: "Training · Strategic Communication · Facilitation",
      categories: ["Training", "Strategic Communication", "Facilitation"],
      organization: "Uganda AIDs Commission",
      year: "2023 — Present",
      location: "Kampala, Uganda",
      summary: "Strategic communication capacity building, media training, and workshop facilitation for national HIV/AIDS advocacy and public health campaigns.",
      role: "Lead Trainer & Workshop Facilitator",
      image: "/images/joan/11.jpg",
      impact: [
        "Facilitated capacity-building workshops for multi-sectoral communication leads",
        "Strengthened national media advocacy & public health narrative alignment"
      ],
      featuredOnHome: true,
      editorialLayout: "asymmetric"
    },
    {
      id: "research-and-education-agency",
      title: "The Research and Education Agency (RAE) Capacity Building",
      category: "Training · Strategic Communication · Facilitation",
      categories: ["Training", "Strategic Communication", "Facilitation"],
      organization: "The Research and Education Agency (RAE)",
      year: "2022 — Present",
      location: "Kampala, Uganda",
      summary: "Designing and delivering interactive training modules on development communications and strategic dissemination for education researchers.",
      role: "Lead Trainer & Workshop Facilitator",
      image: "/images/joan/16.jpg",
      impact: [
        "Trained research officers on policy brief communication and stakeholder engagement",
        "Facilitated regional knowledge-sharing roundtables"
      ],
      featuredOnHome: false,
      editorialLayout: "image-left"
    },
    {
      id: "hunger-relief-africa",
      title: "Hunger Relief Africa (HRA) Communication Training",
      category: "Training · Strategic Communication · Facilitation",
      categories: ["Training", "Strategic Communication", "Facilitation"],
      organization: "Hunger Relief Africa (HRA)",
      year: "2023 — Present",
      location: "East Africa",
      summary: "Strategic communications training and workshop facilitation focusing on food security, emergency relief campaigns, and community advocacy.",
      role: "Lead Trainer & Workshop Facilitator",
      image: "/images/joan/huner.jpeg",
      impact: [
        "Developed grassroots communication toolkits for field coordinators",
        "Facilitated regional stakeholder strategy workshops"
      ],
      featuredOnHome: false,
      editorialLayout: "image-right"
    },
    {
      id: "ruforum",
      title: "RUFORUM Institutional Communication & Capacity Building",
      category: "Training · Strategic Communication · Facilitation",
      categories: ["Training", "Strategic Communication", "Facilitation"],
      organization: "RUFORUM Network",
      year: "2018 — Present",
      location: "Kampala, Uganda",
      summary: "Capacity building and strategic communication workshops empowering university researchers, scholars, and communication leads across 120+ member universities.",
      role: "Lead Trainer & Workshop Facilitator",
      image: "/images/joan/17.jpg",
      impact: [
        "Built open repository & knowledge communication frameworks indexed globally",
        "Facilitated higher education communications bootcamps across Africa"
      ],
      featuredOnHome: false,
      editorialLayout: "image-left"
    },

    // Category 2: Visual Documentation. Impact Stories. Strategic Communication.
    {
      id: "saferworld",
      title: "SAFERWORLD Visual Documentation & Impact Storytelling",
      category: "Visual Documentation · Impact Stories · Strategic Communication",
      categories: ["Visual Documentation", "Impact Stories", "Strategic Communication"],
      organization: "SAFERWORLD",
      year: "2022 — Present",
      location: "East Africa",
      summary: "Visual documentation and impact storytelling highlighting community peacebuilding, conflict prevention, and governance initiatives in East Africa.",
      role: "Strategic Communications & Creative Director",
      image: "/images/joan/2.jpg",
      impact: [
        "Produced visual case studies and field documentary series",
        "Crafted strategic communication collateral for international partners"
      ],
      featuredOnHome: false,
      editorialLayout: "image-left"
    },
    {
      id: "craft-project",
      title: "CRAFT Climate-Smart Agribusiness Impact Stories",
      category: "Visual Documentation · Impact Stories · Strategic Communication",
      categories: ["Visual Documentation", "Impact Stories", "Strategic Communication"],
      organization: "CRAFT Project",
      year: "2021 — Present",
      location: "East Africa",
      summary: "Visual documentation and impact story campaigns showcasing climate-smart agribusiness innovations and smallholder farmer resilience.",
      role: "Strategic Communications & Creative Director",
      image: "/images/joan/10.jpg",
      impact: [
        "Captured multimedia field stories across climate-smart farming hubs",
        "Directed publication of regional impact stories and video showcases"
      ],
      featuredOnHome: false,
      editorialLayout: "image-right"
    },
    {
      id: "airtea",
      title: "AIRTEA Agricultural Innovation Documentation",
      category: "Visual Documentation · Impact Stories · Strategic Communication",
      categories: ["Visual Documentation", "Impact Stories", "Strategic Communication"],
      organization: "AIRTEA Project",
      year: "2021 — 2024",
      location: "East & Central Africa",
      summary: "Strategic communication and visual storytelling documenting agricultural innovation platforms and technology transfer in East and Central Africa.",
      role: "Strategic Communications & Creative Director",
      image: "/images/joan/15.jpg",
      impact: [
        "Documented multi-stakeholder research and agribusiness partnerships",
        "Produced high-impact visual narratives for regional policy dialogues"
      ],
      featuredOnHome: false,
      editorialLayout: "asymmetric"
    },
    {
      id: "mastercard-tagdev",
      title: "MASTERCARD Impact Storytelling Series",
      category: "Visual Documentation · Impact Stories · Strategic Communication",
      categories: ["Visual Documentation", "Impact Stories", "Strategic Communication"],
      organization: "MASTERCARD",
      year: "2018 — 2023",
      location: "East & West Africa",
      summary: "Multi-country visual documentation and impact storytelling capturing how agricultural higher education transforms rural youth entrepreneurship and community livelihoods.",
      role: "Strategic Communications & Creative Director",
      image: "/images/joan/tag.jpg",
      impact: [
        "Produced 25+ multimedia impact feature stories",
        "Engaged regional donor stakeholders & policymakers",
        "Published high-end print editorial impact showcase"
      ],
      featuredOnHome: true,
      editorialLayout: "image-right"
    },

    // Category 3: Copywriting. Digital. Branding & Visual Identity
    {
      id: "akec-consulting",
      title: "Akec Consulting Limited Brand & Digital Presence",
      category: "Copywriting · Digital · Branding & Visual Identity",
      categories: ["Copywriting", "Digital", "Branding & Visual Identity"],
      organization: "Akec Consulting Limited",
      year: "2023 — Present",
      location: "Kampala, Uganda",
      summary: "Brand identity creation, digital platform strategy, and executive copywriting for advisory and management consultancies.",
      role: "Creative Director & Lead Copywriter",
      image: "/images/joan/akec.jpg",
      impact: [
        "Crafted brand positioning, visual identity suite, and digital messaging",
        "Developed corporate profile and executive copywriting assets"
      ],
      featuredOnHome: false,
      editorialLayout: "image-left"
    },
    {
      id: "university-of-juba",
      title: "Institutional Rebranding of University of Juba",
      category: "Copywriting · Digital · Branding & Visual Identity",
      categories: ["Copywriting", "Digital", "Branding & Visual Identity"],
      organization: "University of Juba",
      year: "2021 — 2022",
      location: "Juba, South Sudan",
      summary: "Comprehensive identity revitalization for South Sudan's premier higher education institution, aligning visual heritage with modern academic positioning.",
      role: "Creative Director & Lead Copywriter",
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
      id: "sena-advocate-consult",
      title: "Brand Identity & Digital Presence for SENA Advocate",
      category: "Copywriting · Digital · Branding & Visual Identity",
      categories: ["Copywriting", "Digital", "Branding & Visual Identity"],
      organization: "SENA Advocate & Consult",
      year: "2023",
      location: "Kampala, Uganda",
      summary: "Tailored brand design, bespoke executive portraiture, and high-impact website copywriting for a premier legal and development advisory firm.",
      role: "Creative Director & Lead Copywriter",
      image: "/images/joan/sena.jpg",
      impact: [
        "Executive brand identity & collateral suite",
        "On-location photography & profile direction",
        "Responsive digital portal launch"
      ],
      featuredOnHome: true,
      editorialLayout: "full-width"
    },

    // Category 4: Mentorship. Rapporteur. Personal Branding
    {
      id: "african-union-commission",
      title: "African Union Commission Executive Mentorship & Rapporteur",
      category: "Mentorship · Rapporteur · Personal Branding",
      categories: ["Mentorship", "Rapporteur", "Personal Branding"],
      organization: "African Union Commission",
      year: "2022 — Present",
      location: "Addis Ababa, Ethiopia",
      summary: "Rapporteur services for high-level summits, personal branding advisories for emerging leaders, and communications mentorship at continental policy forums.",
      role: "Lead Mentor & Lead Copywriter",
      image: "/images/joan/image.jpeg",
      impact: [
        "Delivered comprehensive summit rapporteur reports & executive summaries",
        "Provided strategic mentorship and executive personal branding for development leaders"
      ],
      featuredOnHome: false,
      editorialLayout: "asymmetric"
    },
    {
      id: "kavibe-academy",
      title: "KAVIBE ACADEMY Mentorship & Personal Branding Hub",
      category: "Mentorship · Rapporteur · Personal Branding",
      categories: ["Mentorship", "Rapporteur", "Personal Branding"],
      organization: "KAVIBE ACADEMY",
      year: "2020 — Present",
      location: "Regional Africa",
      summary: "Structured mentorship programs, personal branding masterclasses, and rapporteur support for development officers, NGO leaders, and communications professionals across Africa.",
      role: "Lead Mentor & Lead Copywriter",
      image: "/images/joan/About.jpg",
      impact: [
        "Mentored 300+ communication officers across Africa",
        "Guided professionals on personal branding & executive communications",
        "Established mid-career mentorship network & capacity workshops"
      ],
      featuredOnHome: true,
      editorialLayout: "asymmetric"
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
