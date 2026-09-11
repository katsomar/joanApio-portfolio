'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Briefcase, Palette, Video, GraduationCap, Library, Sparkles, FolderKanban, ChevronDown } from 'lucide-react';
import { PROFILE_DATA, FeaturedProject } from '@/lib/data/profile';
import { CinematicReveal } from './CinematicReveal';
import { ImageReveal } from './ImageReveal';
import { AnimatedIcon } from './AnimatedIcon';

const categoryIconMap: Record<string, React.ReactNode> = {
  'Institutional Branding': <Palette className="w-3.5 h-3.5 text-kavibe-primary" />,
  'Multimedia Documentary': <Video className="w-3.5 h-3.5 text-kavibe-primary" />,
  'Strategic Communications': <FolderKanban className="w-3.5 h-3.5 text-kavibe-primary" />,
  'Knowledge Repository': <Library className="w-3.5 h-3.5 text-kavibe-primary" />,
};

export const SelectedWorkSection: React.FC = () => {
  const homeProjects = PROFILE_DATA.projects.filter((p) => p.featuredOnHome);

  return (
    <section id="work" className="py-16 md:py-36 bg-warm-bg relative overflow-hidden">
      {/* Signature Background Circular Accents */}
      <div className="circle-bg-primary w-[550px] h-[550px] -left-48 top-1/3 z-0" />
      <div className="circle-bg-accent w-[450px] h-[450px] -right-36 bottom-1/4 z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-20 pb-6 md:pb-8 border-b border-ink-dark/10">
          <div>
            <CinematicReveal variant="fade-up" delay={0.1}>
              <div className="inline-flex items-center gap-2 mb-2 md:mb-3">
                <AnimatedIcon hoverScale={1.3} hoverRotate={12}>
                  <Briefcase className="w-4 h-4 text-kavibe-primary" />
                </AnimatedIcon>
                <span className="font-sans text-xs uppercase tracking-superwide text-kavibe-primary font-semibold block">
                  Curated Portfolio
                </span>
              </div>
            </CinematicReveal>

            <CinematicReveal variant="lines" delay={0.2}>
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-ink-dark">
                Selected Work <span className="italic font-light text-ink-muted">&amp; Impact</span>
              </h2>
            </CinematicReveal>
          </div>

          <CinematicReveal variant="fade-up" delay={0.3}>
            <p className="font-sans text-xs sm:text-sm text-ink-secondary max-w-md mt-2 md:mt-0">
              A curated selection of strategic communications, institutional rebrandings, and field-based storytelling.
            </p>
          </CinematicReveal>
        </div>

        {/* Editorial Rhythmic Projects Stack (Exactly 1 project shown on mobile, all on desktop) */}
        <div className="space-y-16 md:space-y-36">
          {homeProjects.map((project, idx) => {
            const isHiddenOnMobile = idx > 0;
            return (
              <div key={project.id} className={isHiddenOnMobile ? 'hidden md:block' : 'block'}>
                <ProjectItem project={project} index={idx} />
              </div>
            );
          })}
        </div>

        {/* Pathway to Deeper Portfolio / About Page */}
        <CinematicReveal variant="fade-up" delay={0.2} className="mt-8 md:mt-28 text-center pt-6 md:pt-16 border-t border-ink-dark/10">
          <p className="font-serif text-base sm:text-2xl md:text-3xl text-ink-dark mb-3 md:mb-6">
            Interested in learning more about Joan&apos;s full body of work?
          </p>
          <Link
            href="/about"
            className="btn-editorial-primary inline-flex items-center justify-center gap-2 px-4 py-2.5 text-[11px] sm:text-xs md:px-8 md:py-4 tracking-wider"
          >
            <span>Read Joan&apos;s Story &amp; Biography</span>
            <AnimatedIcon hoverScale={1.3} hoverRotate={15}>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5" />
            </AnimatedIcon>
          </Link>
        </CinematicReveal>

      </div>
    </section>
  );
};

const ProjectItem: React.FC<{ project: FeaturedProject; index: number }> = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const categoryIcon = categoryIconMap[project.category] || <Sparkles className="w-3.5 h-3.5 text-kavibe-primary" />;

  if (project.editorialLayout === 'full-width') {
    return (
      <div className="group relative bg-warm-surface border border-ink-dark/10 overflow-hidden shadow-tactile">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[340px] md:min-h-[440px] overflow-hidden">
            <ImageReveal className="w-full h-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </ImageReveal>
            <div className="absolute inset-0 bg-ink-dark/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
          </div>

          <div className="lg:col-span-5 p-6 md:p-12 flex flex-col justify-between">
            <CinematicReveal variant="fade-up">
              <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4 flex-nowrap overflow-hidden">
                <div className="inline-flex items-center gap-1.5 flex-nowrap overflow-hidden">
                  <AnimatedIcon hoverScale={1.3} hoverRotate={10} className="flex-shrink-0">
                    {categoryIcon}
                  </AnimatedIcon>
                  <span className="font-sans text-[10px] sm:text-xs uppercase tracking-wider text-kavibe-primary font-semibold truncate">
                    {project.category}
                  </span>
                </div>
                <span className="font-sans text-[10px] sm:text-xs text-ink-muted whitespace-nowrap flex-shrink-0">
                  {project.year}
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-3xl md:text-4xl text-ink-dark mb-3 sm:mb-4 group-hover:text-kavibe-primary transition-colors">
                {project.title}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4 sm:mb-6">
                {project.summary}
              </p>

              <div className="hidden md:block space-y-2 mb-8 pt-4 border-t border-ink-dark/10">
                <span className="font-sans text-xs font-semibold uppercase tracking-wider text-ink-dark block">
                  Key Outcomes:
                </span>
                <ul className="space-y-1">
                  {project.impact?.map((item) => (
                    <li key={item} className="font-sans text-xs text-ink-secondary flex items-start gap-2">
                      <AnimatedIcon hoverScale={1.3} hoverRotate={12}>
                        <span className="text-kavibe-accent font-serif">•</span>
                      </AnimatedIcon>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CinematicReveal>

            <div className="hidden md:flex items-center justify-between pt-4 border-t border-ink-dark/10">
              <span className="font-sans text-xs uppercase tracking-wider text-ink-muted">
                Role: {project.role}
              </span>
              <Link
                href="/explore#projects"
                className="btn-editorial-link inline-flex items-center"
              >
                <span>View Details</span>
                <AnimatedIcon hoverScale={1.3} hoverRotate={15}>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </AnimatedIcon>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
      
      {/* Image Column */}
      <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <ImageReveal className="aspect-[16/10] bg-ink-dark/5 border border-ink-dark/10 shadow-tactile group relative">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 py-1 bg-warm-bg/90 backdrop-blur-sm border border-ink-dark/10 text-ink-dark font-sans text-[10px] sm:text-xs tracking-wider uppercase">
            {project.organization}
          </div>
        </ImageReveal>
      </div>

      {/* Content Column */}
      <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-4 md:space-y-6`}>
        <CinematicReveal variant="fade-up" delay={0.1}>
          <div className="flex items-center gap-2 sm:gap-3 flex-nowrap overflow-hidden">
            <span className="font-serif text-xs sm:text-sm italic text-kavibe-primary font-normal flex-shrink-0">
              0{index + 1}.
            </span>
            <AnimatedIcon hoverScale={1.3} hoverRotate={10} className="flex-shrink-0">
              {categoryIcon}
            </AnimatedIcon>
            <span className="font-sans text-[10px] sm:text-xs uppercase tracking-wider text-kavibe-primary font-semibold truncate">
              {project.category}
            </span>
            <span className="text-ink-muted text-xs flex-shrink-0">•</span>
            <span className="font-sans text-[10px] sm:text-xs text-ink-muted whitespace-nowrap flex-shrink-0">{project.year}</span>
          </div>
        </CinematicReveal>

        <CinematicReveal variant="lines" delay={0.2}>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink-dark font-normal leading-snug">
            {project.title}
          </h3>
        </CinematicReveal>

        <CinematicReveal variant="fade-up" delay={0.3}>
          <p className="font-sans text-xs sm:text-sm md:text-base text-ink-secondary leading-relaxed">
            {project.summary}
          </p>

          <div className="hidden md:block pt-4 border-t border-ink-dark/10 mt-4">
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-ink-muted block mb-2">
              Joan / KAVIBE® Role:
            </span>
            <p className="font-sans text-sm text-ink-dark font-medium">
              {project.role}
            </p>
          </div>

          <div className="hidden md:block pt-4">
            <Link
              href="/explore#projects"
              className="btn-editorial-link inline-flex items-center gap-1"
            >
              <span>Explore Case Study</span>
              <AnimatedIcon hoverScale={1.3} hoverRotate={15}>
                <ArrowRight className="w-4 h-4 ml-1" />
              </AnimatedIcon>
            </Link>
          </div>
        </CinematicReveal>
      </div>

    </div>
  );
};

