import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingSaveContact } from '@/components/FloatingSaveContact';
import { getProfilePageSchema } from '@/lib/schema';
import { PROFILE_DATA } from '@/lib/data/profile';
import { CinematicReveal } from '@/components/CinematicReveal';
import { ImageReveal } from '@/components/ImageReveal';
import { AnimatedIcon } from '@/components/AnimatedIcon';
import { InteractiveTimelineRail } from '@/components/InteractiveTimelineRail';
import { CheckCircle2, Globe, Mail, Linkedin, Building2, Sparkles, User, Briefcase, Milestone } from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://joan-apio-portfolio.vercel.app';

export const metadata: Metadata = {
  title: "About Joan Apio — Biography, Career & KAVIBE® Platform",
  description: "Comprehensive professional biography of Joan Apio: Development Communications & Marketing Specialist, Lead Brand Strategist, and Founder of KAVIBE®. Discover her 15+ years of impact across Africa.",
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About Joan Apio — Strategic Communicator & Founder of KAVIBE®",
    description: "Development Communications · Marketing · Branding · Storytelling",
    url: `${siteUrl}/about`,
    images: [{ url: `${siteUrl}/images/joan/hero.png`, width: 1200, height: 630, alt: "Joan Apio Profile" }],
  },
};

export default function AboutPage() {
  const { name, primaryTitle, secondaryTitle, shortBio, extendedStory, kavibeOverview, projects, journey, competencies, contact, philosophy } = PROFILE_DATA;
  const jsonLd = getProfilePageSchema(`${siteUrl}/about`);

  return (
    <main className="min-h-screen bg-warm-bg text-ink-dark selection:bg-kavibe-primary selection:text-warm-bg">
      {/* Schema.org ProfilePage + Person JSON-LD for Google Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      {/* Hero Section */}
      <article className="pt-32 pb-20 bg-warm-surface border-b border-ink-dark/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Portrait Column — FIRST ON MOBILE (order-1 lg:order-2) */}
            <div className="w-full lg:col-span-5 relative order-1 lg:order-2 mb-6 lg:mb-0">
              <ImageReveal delay={0.2} className="shadow-elevated">
                <div className="aspect-[3/4] relative overflow-hidden bg-ink-dark/5 border border-ink-dark/10 group">
                  <Image
                    src="/images/joan/hero.png"
                    alt={`Joan Apio - ${primaryTitle}`}
                    fill
                    priority
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-ink-dark/80 to-transparent text-warm-bg">
                    <p className="font-serif text-lg font-light">{name}</p>
                    <p className="font-sans text-xs text-warm-bg/70 uppercase tracking-widest">{contact.location}</p>
                  </div>
                </div>
              </ImageReveal>
            </div>

            {/* Text Column — SECOND ON MOBILE (order-2 lg:order-1) */}
            <div className="w-full lg:col-span-7 space-y-6 order-2 lg:order-1">
              <CinematicReveal variant="lines" delay={0.25}>
                <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal text-ink-dark leading-[0.95]">
                  {name}
                </h1>
              </CinematicReveal>

              <CinematicReveal variant="words" delay={0.4}>
                <div className="space-y-1">
                  <p className="font-sans text-xl md:text-2xl font-medium text-ink-dark">
                    {primaryTitle}
                  </p>
                  <p className="font-sans text-sm text-ink-secondary">
                    {secondaryTitle} · {PROFILE_DATA.badge}
                  </p>
                </div>
              </CinematicReveal>

              <CinematicReveal variant="fade-up" delay={0.55}>
                <p className="font-sans text-base text-ink-secondary leading-relaxed border-l-2 border-kavibe-primary/40 pl-4">
                  {shortBio}
                </p>

                <div className="flex flex-wrap gap-4 pt-6">
                  <a
                    href={`mailto:${contact.email}`}
                    className="btn-editorial-primary inline-flex items-center gap-2"
                  >
                    <AnimatedIcon hoverScale={1.2} hoverRotate={10}>
                      <Mail className="w-4 h-4" />
                    </AnimatedIcon>
                    <span>Contact Joan</span>
                  </a>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-editorial-secondary inline-flex items-center gap-2"
                  >
                    <AnimatedIcon hoverScale={1.2} hoverRotate={-10}>
                      <Linkedin className="w-4 h-4 text-kavibe-primary" />
                    </AnimatedIcon>
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </CinematicReveal>
            </div>

          </div>

        </div>
      </article>

      {/* Main Biography & Philosophy */}
      <section className="py-24 bg-warm-bg border-b border-ink-dark/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            <div className="lg:col-span-8 space-y-8">
              <CinematicReveal variant="fade-up" delay={0.1}>
                <div className="inline-flex items-center gap-2">
                  <AnimatedIcon hoverScale={1.3} hoverRotate={12}>
                    <User className="w-4 h-4 text-kavibe-primary" />
                  </AnimatedIcon>
                  <span className="font-sans text-xs uppercase tracking-superwide text-kavibe-primary font-semibold block">
                    Professional Background &amp; Philosophy
                  </span>
                </div>
              </CinematicReveal>

              <CinematicReveal variant="lines" delay={0.2}>
                <h2 className="font-serif text-3xl sm:text-4xl text-ink-dark font-normal">
                  Human-Centric Communication in the African Development Sector
                </h2>
              </CinematicReveal>

              <div className="space-y-6 font-sans text-base text-ink-secondary leading-relaxed">
                {extendedStory.map((para, idx) => (
                  <CinematicReveal key={idx} variant="fade-up" delay={0.3 + idx * 0.15}>
                    <p>{para}</p>
                  </CinematicReveal>
                ))}
              </div>

              <CinematicReveal variant="words" delay={0.5}>
                <blockquote className="p-8 bg-warm-surface border-l-4 border-kavibe-primary my-8 space-y-4 shadow-tactile">
                  <p className="font-serif text-2xl text-ink-dark italic">
                    &ldquo;{philosophy.quote}&rdquo;
                  </p>
                  <cite className="font-sans text-xs uppercase tracking-wider font-semibold text-kavibe-primary block not-italic">
                    — {philosophy.author}
                  </cite>
                </blockquote>
              </CinematicReveal>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <CinematicReveal variant="fade-up" delay={0.3}>
                <div className="bg-warm-surface border border-ink-dark/10 p-8 space-y-6 shadow-tactile">
                  <h3 className="font-serif text-2xl text-ink-dark font-normal border-b border-ink-dark/10 pb-4">
                    Core Competencies
                  </h3>
                  <ul className="space-y-3">
                    {competencies.map((comp) => (
                      <li key={comp} className="flex items-center gap-3 font-sans text-sm text-ink-dark">
                        <AnimatedIcon hoverScale={1.3} hoverRotate={10}>
                          <CheckCircle2 className="w-4 h-4 text-kavibe-primary flex-shrink-0" />
                        </AnimatedIcon>
                        <span>{comp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CinematicReveal>

              <CinematicReveal variant="fade-up" delay={0.45}>
                <div className="bg-ink-dark text-warm-bg p-8 space-y-4 shadow-elevated">
                  <AnimatedIcon hoverScale={1.2} hoverRotate={8}>
                    <Building2 className="w-6 h-6 text-kavibe-accent" />
                  </AnimatedIcon>
                  <h3 className="font-serif text-2xl font-normal">KAVIBE® Platform</h3>
                  <p className="font-sans text-xs text-warm-bg/70 leading-relaxed">
                    {kavibeOverview.description}
                  </p>
                  <a
                    href={kavibeOverview.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-editorial-link text-warm-bg hover:text-kavibe-accent inline-flex items-center gap-2 pt-2"
                  >
                    <span>Visit KAVIBE.com</span>
                    <AnimatedIcon hoverScale={1.3} hoverRotate={12}>
                      <Globe className="w-3.5 h-3.5" />
                    </AnimatedIcon>
                  </a>
                </div>
              </CinematicReveal>
            </div>

          </div>

        </div>
      </section>

      {/* Selected Case Studies */}
      <section className="py-24 bg-warm-surface border-b border-ink-dark/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="max-w-2xl mb-16 space-y-2">
            <CinematicReveal variant="fade-up" delay={0.1}>
              <div className="inline-flex items-center gap-2">
                <AnimatedIcon hoverScale={1.3} hoverRotate={12}>
                  <Briefcase className="w-4 h-4 text-kavibe-primary" />
                </AnimatedIcon>
                <span className="font-sans text-xs uppercase tracking-superwide text-kavibe-primary font-semibold block">
                  Crawlable Work Portfolio
                </span>
              </div>
            </CinematicReveal>
            <CinematicReveal variant="lines" delay={0.2}>
              <h2 className="font-serif text-4xl text-ink-dark font-normal">
                High-Impact Consultancies &amp; Projects
              </h2>
            </CinematicReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <CinematicReveal key={project.id} variant="fade-up" delay={0.2 + idx * 0.1}>
                <div className="p-8 bg-warm-bg border border-ink-dark/10 space-y-4 shadow-tactile h-full flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2">
                      <AnimatedIcon hoverScale={1.3} hoverRotate={10}>
                        <Sparkles className="w-3.5 h-3.5 text-kavibe-primary" />
                      </AnimatedIcon>
                      <span className="font-sans text-xs uppercase tracking-wider text-kavibe-primary font-semibold">
                        {project.category} · {project.year}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl text-ink-dark font-normal mt-2">
                      {project.title}
                    </h3>
                    <p className="font-sans text-sm text-ink-secondary leading-relaxed mt-3">
                      {project.summary}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-ink-dark/10 text-xs font-sans text-ink-muted">
                    <strong>Role:</strong> {project.role} ({project.organization})
                  </div>
                </div>
              </CinematicReveal>
            ))}
          </div>

        </div>
      </section>

      {/* Career Trajectory */}
      <section className="py-24 bg-warm-bg border-b border-ink-dark/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="max-w-2xl mb-16 space-y-2">
            <CinematicReveal variant="fade-up" delay={0.1}>
              <div className="inline-flex items-center gap-2">
                <AnimatedIcon hoverScale={1.3} hoverRotate={15}>
                  <Milestone className="w-4 h-4 text-kavibe-primary" />
                </AnimatedIcon>
                <span className="font-sans text-xs uppercase tracking-superwide text-kavibe-primary font-semibold block">
                  Professional Timeline
                </span>
              </div>
            </CinematicReveal>
            <CinematicReveal variant="lines" delay={0.2}>
              <h2 className="font-serif text-4xl text-ink-dark font-normal">
                Career Experience &amp; Engagements
              </h2>
            </CinematicReveal>
          </div>

          <InteractiveTimelineRail journey={journey} />

        </div>
      </section>

      <FloatingSaveContact />
      <Footer />
    </main>
  );
}

