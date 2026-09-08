'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingSaveContact } from '@/components/FloatingSaveContact';
import { downloadVCard } from '@/lib/vcard';
import { PROFILE_DATA } from '@/lib/data/profile';
import { getProfilePageSchema } from '@/lib/schema';
import { CinematicReveal } from '@/components/CinematicReveal';
import { ImageReveal } from '@/components/ImageReveal';
import { ArrowLeft, UserCheck, CheckCircle2, Award, BookOpen, ExternalLink, Sparkles, BookMarked } from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://joan-apio-portfolio.vercel.app';

export default function ExplorePage() {
  const { name, extendedStory, kavibeOverview, projects, journey, competencies, contact } = PROFILE_DATA;
  const jsonLd = getProfilePageSchema(`${siteUrl}/explore`);

  return (
    <main className="min-h-screen bg-warm-bg text-ink-dark selection:bg-kavibe-primary selection:text-warm-bg">
      {/* Schema.org ProfilePage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      {/* Hero Header Banner */}
      <section className="pt-32 pb-20 bg-warm-surface border-b border-ink-dark/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <CinematicReveal variant="fade-up" delay={0.1}>
            <div className="flex items-center gap-6 mb-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-ink-muted hover:text-kavibe-primary font-sans text-xs uppercase tracking-superwide transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>NFC Quick Profile</span>
              </Link>

              <span className="text-ink-muted text-xs">•</span>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-kavibe-primary hover:text-kavibe-secondary font-sans text-xs uppercase tracking-superwide font-semibold transition-colors"
              >
                <BookMarked className="w-4 h-4" />
                <span>Read Full Indexable Bio (/about)</span>
              </Link>
            </div>
          </CinematicReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 space-y-4">
              <CinematicReveal variant="fade-up" delay={0.2}>
                <span className="font-sans text-xs uppercase tracking-superwide text-kavibe-primary font-semibold block">
                  Level 2 — Deeper Profile &amp; Narrative
                </span>
              </CinematicReveal>

              <CinematicReveal variant="lines" delay={0.3}>
                <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-ink-dark font-normal leading-[0.95]">
                  The Story &amp; Work of <span className="italic font-light text-kavibe-primary">{name}</span>
                </h1>
              </CinematicReveal>

              <CinematicReveal variant="words" delay={0.45}>
                <p className="font-sans text-lg text-ink-secondary max-w-2xl">
                  A deeper exploration into 15+ years of strategic communication, institutional identity, and development storytelling across Africa.
                </p>
              </CinematicReveal>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <CinematicReveal variant="fade-up" delay={0.5}>
                <button
                  onClick={downloadVCard}
                  className="btn-editorial-primary inline-flex items-center gap-2"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>Save Contact (.vcf)</span>
                </button>
              </CinematicReveal>
            </div>
          </div>

        </div>
      </section>

      {/* Section 1: Extended Story & Narrative */}
      <section id="story" className="py-24 bg-warm-bg border-b border-ink-dark/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Story Portrait with ImageReveal */}
            <div className="lg:col-span-5 relative">
              <ImageReveal delay={0.2} className="shadow-elevated">
                <div className="aspect-[4/5] relative overflow-hidden bg-ink-dark/5 border border-ink-dark/10 group">
                  <Image
                    src="/images/joan/story.png"
                    alt="Joan Apio - Creative Director & Communicator"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-dark/70 via-transparent to-transparent p-6 flex items-end">
                    <span className="font-serif text-warm-bg text-lg italic">
                      Joan Apio in Kampala, Uganda
                    </span>
                  </div>
                </div>
              </ImageReveal>
            </div>

            {/* Narrative Text */}
            <div className="lg:col-span-7 space-y-6">
              <CinematicReveal variant="fade-up" delay={0.1}>
                <span className="font-sans text-xs uppercase tracking-superwide text-kavibe-primary font-semibold block">
                  Her Professional Journey
                </span>
              </CinematicReveal>
              
              <CinematicReveal variant="lines" delay={0.25}>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink-dark font-normal">
                  Storytelling as a Catalyst for Sustainable Development
                </h2>
              </CinematicReveal>

              <div className="space-y-4 font-sans text-base text-ink-secondary leading-relaxed">
                {extendedStory.map((paragraph, idx) => (
                  <CinematicReveal key={idx} variant="fade-up" delay={0.35 + idx * 0.15}>
                    <p>{paragraph}</p>
                  </CinematicReveal>
                ))}
              </div>

              {/* Competencies Badges */}
              <CinematicReveal variant="fade-up" delay={0.65}>
                <div className="pt-6 border-t border-ink-dark/10 space-y-3">
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-ink-dark block">
                    Core Specializations:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {competencies.map((comp) => (
                      <span
                        key={comp}
                        className="px-3.5 py-1.5 bg-warm-surface border border-ink-dark/10 text-ink-dark font-sans text-xs tracking-wide"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              </CinematicReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Complete Project Case Studies */}
      <section id="projects" className="py-24 bg-warm-surface border-b border-ink-dark/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="max-w-2xl mb-16 space-y-3">
            <CinematicReveal variant="fade-up" delay={0.1}>
              <span className="font-sans text-xs uppercase tracking-superwide text-kavibe-primary font-semibold block">
                Curated Case Studies
              </span>
            </CinematicReveal>

            <CinematicReveal variant="lines" delay={0.2}>
              <h2 className="font-serif text-4xl md:text-5xl text-ink-dark font-normal">
                Deep Case Studies &amp; Projects
              </h2>
            </CinematicReveal>

            <CinematicReveal variant="words" delay={0.3}>
              <p className="font-sans text-sm text-ink-secondary">
                Evidence of impact through institutional rebrandings, multimedia field documentaries, and knowledge repositories.
              </p>
            </CinematicReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, idx) => (
              <CinematicReveal key={project.id} variant="fade-up" delay={0.2 + idx * 0.15}>
                <div className="bg-warm-bg border border-ink-dark/10 p-8 shadow-tactile space-y-6 flex flex-col justify-between group h-full">
                  <div>
                    <ImageReveal className="aspect-[16/9] bg-ink-dark/5 border border-ink-dark/10 mb-6">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </ImageReveal>

                    <div className="flex items-center justify-between text-xs font-sans text-ink-muted mb-2">
                      <span className="uppercase tracking-wider text-kavibe-primary font-semibold">
                        {project.category}
                      </span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-serif text-2xl text-ink-dark font-normal mb-3 group-hover:text-kavibe-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="font-sans text-sm text-ink-secondary leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-ink-dark/10">
                      <span className="font-sans text-xs font-semibold uppercase tracking-wider text-ink-dark block">
                        Role &amp; Deliverables:
                      </span>
                      <p className="font-sans text-xs text-ink-secondary">
                        {project.role}
                      </p>
                      {project.impact && (
                        <ul className="space-y-1 pt-2">
                          {project.impact.map((imp) => (
                            <li key={imp} className="font-sans text-xs text-ink-muted flex items-start gap-2">
                              <span className="text-kavibe-accent">•</span>
                              <span>{imp}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-ink-dark/10 flex items-center justify-between">
                    <span className="font-sans text-xs text-ink-muted">
                      {project.organization}
                    </span>
                    <span className="font-sans text-xs uppercase tracking-wider text-kavibe-primary font-semibold flex items-center gap-1">
                      Featured Project
                      <Sparkles className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </CinematicReveal>
            ))}
          </div>

        </div>
      </section>

      {/* Section 3: Deep Journey Timeline */}
      <section id="journey" className="py-24 bg-warm-bg border-b border-ink-dark/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="max-w-2xl mb-16 space-y-3">
            <CinematicReveal variant="fade-up" delay={0.1}>
              <span className="font-sans text-xs uppercase tracking-superwide text-kavibe-primary font-semibold block">
                Professional Progression
              </span>
            </CinematicReveal>

            <CinematicReveal variant="lines" delay={0.2}>
              <h2 className="font-serif text-4xl md:text-5xl text-ink-dark font-normal">
                Leadership &amp; Institutional Experience
              </h2>
            </CinematicReveal>
          </div>

          <div className="space-y-12 max-w-4xl">
            {journey.map((item, idx) => (
              <CinematicReveal key={item.organization} variant="fade-up" delay={0.2 + idx * 0.15}>
                <div className="p-8 bg-warm-surface border border-ink-dark/10 shadow-tactile space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-ink-dark/10">
                    <div>
                      <h3 className="font-serif text-2xl text-ink-dark font-normal">
                        {item.role}
                      </h3>
                      <span className="font-sans text-xs uppercase tracking-widest text-kavibe-primary font-semibold">
                        {item.organization}
                      </span>
                    </div>
                    <span className="font-serif text-xl italic text-ink-muted">
                      {item.period}
                    </span>
                  </div>

                  <p className="font-sans text-sm text-ink-dark font-medium">
                    {item.highlight}
                  </p>

                  <ul className="space-y-2 pt-2">
                    {item.details.map((detail) => (
                      <li key={detail} className="font-sans text-xs text-ink-secondary flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-kavibe-primary flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CinematicReveal>
            ))}
          </div>

        </div>
      </section>

      {/* Section 4: KAVIBE® Platform & Mentorship */}
      <section className="py-24 bg-ink-dark text-warm-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <CinematicReveal variant="fade-up" delay={0.1}>
                <div className="inline-block p-3 bg-warm-bg/10 border border-warm-bg/15 backdrop-blur-md rounded-sm mb-2">
                  <div className="relative w-32 h-10">
                    <Image
                      src="/logo/kavibe.png"
                      alt="KAVIBE® Logo"
                      fill
                      className="object-contain object-left brightness-0 invert"
                    />
                  </div>
                </div>

                <span className="font-sans text-xs uppercase tracking-superwide text-kavibe-accent font-semibold block mt-2">
                  Platform &amp; Capacity Building
                </span>
              </CinematicReveal>

              <CinematicReveal variant="lines" delay={0.25}>
                <h2 className="font-serif text-4xl md:text-5xl text-warm-bg font-normal">
                  KAVIBE® Platform &amp; Mentorship Initiatives
                </h2>
              </CinematicReveal>

              <CinematicReveal variant="fade-up" delay={0.4}>
                <p className="font-sans text-base text-warm-bg/70 leading-relaxed">
                  Beyond agency client work, Joan is dedicated to nurturing mid-career communicators through structured mentorship programs and digital skilling bootcamps.
                </p>

                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-3 text-warm-bg/80 font-sans text-sm">
                    <Award className="w-5 h-5 text-kavibe-accent" />
                    <span>300+ Development Officers Trained in Digital Skilling</span>
                  </div>
                  <div className="flex items-center gap-3 text-warm-bg/80 font-sans text-sm">
                    <BookOpen className="w-5 h-5 text-kavibe-accent" />
                    <span>Mid-Career Communications Mentorship Network</span>
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href={kavibeOverview.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-editorial-primary inline-flex items-center gap-2"
                  >
                    <span>Explore KAVIBE.com</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </CinematicReveal>
            </div>

            <div className="lg:col-span-6">
              <CinematicReveal variant="fade-up" delay={0.3}>
                <div className="bg-warm-bg/5 border border-warm-bg/10 p-8 md:p-12 space-y-6">
                  <h3 className="font-serif text-2xl text-warm-bg font-normal">
                    Direct Contact &amp; Consultities
                  </h3>
                  <p className="font-sans text-sm text-warm-bg/70">
                    Reach Joan directly for institutional consultancies, speaking engagements, or strategic partnerships.
                  </p>
                  <div className="space-y-3 text-sm font-sans text-warm-bg/80 pt-4 border-t border-warm-bg/10">
                    <p><strong className="text-warm-bg">Email:</strong> {contact.email}</p>
                    <p><strong className="text-warm-bg">Phone:</strong> {contact.phone}</p>
                    <p><strong className="text-warm-bg">Location:</strong> {contact.location}</p>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={downloadVCard}
                      className="w-full py-3.5 bg-warm-bg text-ink-dark hover:bg-warm-surface font-sans font-medium text-xs tracking-wider uppercase transition-colors"
                    >
                      Download vCard Contact Card (.vcf)
                    </button>
                  </div>
                </div>
              </CinematicReveal>
            </div>

          </div>
        </div>
      </section>

      <FloatingSaveContact />
      <Footer />
    </main>
  );
}
