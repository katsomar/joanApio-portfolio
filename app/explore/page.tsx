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
import { AnimatedIcon } from '@/components/AnimatedIcon';
import { InteractiveTimelineRail } from '@/components/InteractiveTimelineRail';
import { ArrowLeft, UserCheck, CheckCircle2, Award, BookOpen, ExternalLink, Sparkles, BookMarked, User, Briefcase, Milestone } from 'lucide-react';

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
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headline & Subtitle */}
            <div className="lg:col-span-7 space-y-6">
              <CinematicReveal variant="lines" delay={0.1}>
                <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-ink-dark font-normal leading-[0.95]">
                  The Story &amp; Work of <span className="italic font-light text-kavibe-primary">{name}</span>
                </h1>
              </CinematicReveal>

              <CinematicReveal variant="words" delay={0.25}>
                <p className="font-sans text-lg text-ink-secondary max-w-xl leading-relaxed">
                  A deeper exploration into 15+ years of strategic communication, institutional identity, and development storytelling across Africa.
                </p>
              </CinematicReveal>

              <CinematicReveal variant="fade-up" delay={0.4}>
                <div className="pt-2">
                  <button
                    onClick={downloadVCard}
                    className="btn-editorial-primary inline-flex items-center gap-2"
                  >
                    <AnimatedIcon hoverScale={1.2} hoverRotate={10}>
                      <UserCheck className="w-4 h-4" />
                    </AnimatedIcon>
                    <span>Save Contact (.vcf)</span>
                  </button>
                </div>
              </CinematicReveal>
            </div>

            {/* Right Column: Organic Rock-Shaped Joan Portrait */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <CinematicReveal variant="fade-up" delay={0.3}>
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 group">
                  {/* Outer organic decorative aura ring */}
                  <div className="absolute -inset-2 rounded-[58%_42%_65%_35%/48%_55%_45%_52%] bg-kavibe-primary/10 blur-sm pointer-events-none group-hover:scale-105 transition-transform duration-700" />
                  
                  {/* Main Organic Rock-Shaped Image Mask Container */}
                  <ImageReveal className="w-full h-full rounded-[58%_42%_65%_35%/48%_55%_45%_52%] border-2 border-kavibe-primary/30 overflow-hidden shadow-elevated relative bg-ink-dark/5">
                    <Image
                      src="/images/joan/hero.png"
                      alt={`Joan Apio - ${PROFILE_DATA.primaryTitle}`}
                      fill
                      priority
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </ImageReveal>
                </div>
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
                <div className="inline-flex items-center gap-2">
                  <AnimatedIcon hoverScale={1.3} hoverRotate={12}>
                    <User className="w-4 h-4 text-kavibe-primary" />
                  </AnimatedIcon>
                  <span className="font-sans text-xs uppercase tracking-superwide text-kavibe-primary font-semibold block">
                    Her Professional Journey
                  </span>
                </div>
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
                        className="px-3.5 py-1.5 bg-warm-surface border border-ink-dark/10 text-ink-dark font-sans text-xs tracking-wide flex items-center gap-1.5"
                      >
                        <AnimatedIcon hoverScale={1.25} hoverRotate={10}>
                          <Sparkles className="w-3 h-3 text-kavibe-primary" />
                        </AnimatedIcon>
                        <span>{comp}</span>
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
              <div className="inline-flex items-center gap-2">
                <AnimatedIcon hoverScale={1.3} hoverRotate={12}>
                  <Briefcase className="w-4 h-4 text-kavibe-primary" />
                </AnimatedIcon>
                <span className="font-sans text-xs uppercase tracking-superwide text-kavibe-primary font-semibold block">
                  Curated Case Studies
                </span>
              </div>
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
                              <AnimatedIcon hoverScale={1.3} hoverRotate={12}>
                                <span className="text-kavibe-accent">•</span>
                              </AnimatedIcon>
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
                      <AnimatedIcon hoverScale={1.3} hoverRotate={15}>
                        <Sparkles className="w-3.5 h-3.5" />
                      </AnimatedIcon>
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
              <div className="inline-flex items-center gap-2">
                <AnimatedIcon hoverScale={1.3} hoverRotate={15}>
                  <Milestone className="w-4 h-4 text-kavibe-primary" />
                </AnimatedIcon>
                <span className="font-sans text-xs uppercase tracking-superwide text-kavibe-primary font-semibold block">
                  Professional Progression
                </span>
              </div>
            </CinematicReveal>

            <CinematicReveal variant="lines" delay={0.2}>
              <h2 className="font-serif text-4xl md:text-5xl text-ink-dark font-normal">
                Leadership &amp; Institutional Experience
              </h2>
            </CinematicReveal>
          </div>

          <InteractiveTimelineRail journey={journey} />

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
                    <AnimatedIcon hoverScale={1.3} hoverRotate={12}>
                      <Award className="w-5 h-5 text-kavibe-accent" />
                    </AnimatedIcon>
                    <span>300+ Development Officers Trained in Digital Skilling</span>
                  </div>
                  <div className="flex items-center gap-3 text-warm-bg/80 font-sans text-sm">
                    <AnimatedIcon hoverScale={1.3} hoverRotate={-12}>
                      <BookOpen className="w-5 h-5 text-kavibe-accent" />
                    </AnimatedIcon>
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
                    <AnimatedIcon hoverScale={1.3} hoverRotate={15}>
                      <ExternalLink className="w-4 h-4" />
                    </AnimatedIcon>
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

