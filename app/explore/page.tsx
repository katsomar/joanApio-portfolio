'use client';

import React, { useState } from 'react';
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
import {
  Briefcase,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Award,
  BookOpen,
  ExternalLink,
  UserCheck,
  Filter,
} from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://joan-apio-portfolio.vercel.app';

const filterCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'branding', label: 'Branding & Strategy' },
  { id: 'documentary', label: 'Visual Documentaries' },
  { id: 'skilling', label: 'Capacity Building' },
  { id: 'knowledge', label: 'Knowledge Repositories' },
];

export default function ExplorePage() {
  const { name, kavibeOverview, projects, contact } = PROFILE_DATA;
  const [activeFilter, setActiveFilter] = useState('all');
  const jsonLd = getProfilePageSchema(`${siteUrl}/explore`);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'branding') return project.category.toLowerCase().includes('branding');
    if (activeFilter === 'documentary') return project.category.toLowerCase().includes('documentar');
    if (activeFilter === 'skilling') return project.category.toLowerCase().includes('capacity') || project.category.toLowerCase().includes('skilling');
    if (activeFilter === 'knowledge') return project.category.toLowerCase().includes('knowledge') || project.category.toLowerCase().includes('librar');
    return true;
  });

  return (
    <main className="min-h-screen bg-warm-bg text-ink-dark selection:bg-kavibe-primary selection:text-warm-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      {/* Hero Header Banner */}
      <section className="pt-32 pb-20 bg-warm-surface border-b border-ink-dark/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <CinematicReveal variant="fade-up" delay={0.1}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-warm-bg border border-ink-dark/10 rounded-full">
                  <AnimatedIcon hoverScale={1.3} hoverRotate={12}>
                    <Briefcase className="w-3.5 h-3.5 text-kavibe-primary" />
                  </AnimatedIcon>
                  <span className="font-sans text-xs font-semibold tracking-wider text-kavibe-primary uppercase">
                    Interactive Portfolio &amp; Case Studies
                  </span>
                </div>
              </CinematicReveal>

              <CinematicReveal variant="lines" delay={0.25}>
                <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-ink-dark font-normal leading-[0.95]">
                  Explore the Work of <span className="italic font-light text-kavibe-primary">{name}</span>
                </h1>
              </CinematicReveal>

              <CinematicReveal variant="words" delay={0.4}>
                <p className="font-sans text-lg text-ink-secondary max-w-xl leading-relaxed">
                  Interactive case studies, institutional rebrandings, multimedia field documentaries, and digital capacity building across Africa.
                </p>
              </CinematicReveal>

              <CinematicReveal variant="fade-up" delay={0.55}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link href="/about" className="btn-editorial-primary inline-flex items-center gap-2">
                    <AnimatedIcon hoverScale={1.2} hoverRotate={10}>
                      <Sparkles className="w-4 h-4" />
                    </AnimatedIcon>
                    <span>Read Full Biography (/about)</span>
                  </Link>
                  <button onClick={downloadVCard} className="btn-editorial-secondary inline-flex items-center gap-2">
                    <AnimatedIcon hoverScale={1.2} hoverRotate={-10}>
                      <UserCheck className="w-4 h-4 text-kavibe-primary" />
                    </AnimatedIcon>
                    <span>Save Contact (.vcf)</span>
                  </button>
                </div>
              </CinematicReveal>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <CinematicReveal variant="fade-up" delay={0.3}>
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 group">
                  <div className="absolute -inset-2 rounded-[58%_42%_65%_35%/48%_55%_45%_52%] bg-kavibe-primary/10 blur-sm pointer-events-none group-hover:scale-105 transition-transform duration-700" />
                  <ImageReveal className="w-full h-full rounded-[58%_42%_65%_35%/48%_55%_45%_52%] border-2 border-kavibe-primary/30 overflow-hidden shadow-elevated relative bg-ink-dark/5">
                    <Image
                      src="/images/joan/3.jpg"
                      alt={`Joan Apio - Portfolio`}
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

      {/* Interactive Case Studies Section */}
      <section id="projects" className="py-24 bg-warm-bg border-b border-ink-dark/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Section Heading & Category Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-ink-dark/10 gap-8">
            <div>
              <CinematicReveal variant="fade-up" delay={0.1}>
                <div className="inline-flex items-center gap-2 mb-2">
                  <AnimatedIcon hoverScale={1.3} hoverRotate={12}>
                    <Filter className="w-4 h-4 text-kavibe-primary" />
                  </AnimatedIcon>
                  <span className="font-sans text-xs uppercase tracking-superwide text-kavibe-primary font-semibold block">
                    Filterable Archive
                  </span>
                </div>
              </CinematicReveal>

              <CinematicReveal variant="lines" delay={0.2}>
                <h2 className="font-serif text-4xl sm:text-5xl text-ink-dark font-normal">
                  Case Studies &amp; Consultancies
                </h2>
              </CinematicReveal>
            </div>

            {/* Filter Pills */}
            <CinematicReveal variant="fade-up" delay={0.3}>
              <div className="flex flex-wrap items-center gap-2">
                {filterCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id)}
                    className={`px-4 py-2 font-sans text-xs font-medium tracking-wide uppercase transition-all duration-300 rounded-full border ${
                      activeFilter === cat.id
                        ? 'bg-kavibe-primary text-warm-bg border-kavibe-primary shadow-tactile'
                        : 'bg-warm-surface text-ink-secondary border-ink-dark/10 hover:border-kavibe-primary hover:text-kavibe-primary'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </CinematicReveal>
          </div>

          {/* Filtered Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.map((project, idx) => (
              <CinematicReveal key={project.id} variant="fade-up" delay={0.1 + idx * 0.1}>
                <div className="group bg-warm-surface border border-ink-dark/10 shadow-tactile h-full flex flex-col justify-between overflow-hidden hover:shadow-elevated transition-all duration-500">
                  
                  {/* Image Header */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-ink-dark/5 border-b border-ink-dark/10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-warm-bg/90 backdrop-blur-md border border-ink-dark/10 text-ink-dark font-sans text-[11px] font-medium tracking-wider uppercase shadow-sm">
                      {project.organization}
                    </div>
                    <div className="absolute top-3 right-3 px-2.5 py-1 bg-kavibe-primary text-warm-bg font-sans text-[11px] font-semibold tracking-wide rounded-sm shadow-sm">
                      {project.year}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-sans text-xs uppercase tracking-wider text-kavibe-primary font-semibold">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl text-ink-dark font-normal leading-snug group-hover:text-kavibe-primary transition-colors">
                        {project.title}
                      </h3>

                      <p className="font-sans text-sm text-ink-secondary leading-relaxed mt-3">
                        {project.summary}
                      </p>

                      {project.impact && project.impact.length > 0 && (
                        <div className="mt-5 pt-4 border-t border-ink-dark/10 space-y-2">
                          <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-ink-dark block">
                            Key Outcomes &amp; Impact:
                          </span>
                          <ul className="space-y-1.5">
                            {project.impact.map((item) => (
                              <li key={item} className="font-sans text-xs text-ink-secondary flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-kavibe-primary flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-ink-dark/10 flex items-center justify-between">
                      <span className="font-sans text-xs text-ink-muted">
                        <strong className="text-ink-dark font-medium">Role:</strong> {project.role}
                      </span>
                      <span className="font-sans text-xs font-semibold text-kavibe-primary flex items-center gap-1">
                        Featured Case Study
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                </div>
              </CinematicReveal>
            ))}
          </div>

        </div>
      </section>

      {/* KAVIBE® Platform & Capacity Building Hub */}
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
                    Direct Contact &amp; Consultancies
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
