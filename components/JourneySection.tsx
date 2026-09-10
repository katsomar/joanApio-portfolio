'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Milestone } from 'lucide-react';
import { PROFILE_DATA } from '@/lib/data/profile';
import { CinematicReveal } from './CinematicReveal';
import { AnimatedIcon } from './AnimatedIcon';
import { InteractiveTimelineRail } from './InteractiveTimelineRail';

export const JourneySection: React.FC = () => {
  const { journey } = PROFILE_DATA;

  return (
    <section id="journey" className="py-24 md:py-36 bg-warm-surface border-y border-ink-dark/10 relative overflow-hidden">
      {/* Signature Background Circular Accents */}
      <div className="circle-bg-primary w-[480px] h-[480px] -right-36 -bottom-36 z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-ink-dark/10">
          <div>
            <CinematicReveal variant="fade-up" delay={0.1}>
              <div className="inline-flex items-center gap-2 mb-3">
                <AnimatedIcon hoverScale={1.3} hoverRotate={15}>
                  <Milestone className="w-4 h-4 text-kavibe-primary" />
                </AnimatedIcon>
                <span className="font-sans text-xs uppercase tracking-superwide text-kavibe-primary font-semibold block">
                  Career Trajectory
                </span>
              </div>
            </CinematicReveal>

            <CinematicReveal variant="lines" delay={0.2}>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-ink-dark">
                Professional <span className="italic font-light text-kavibe-primary">Journey</span>
              </h2>
            </CinematicReveal>
          </div>

          <CinematicReveal variant="fade-up" delay={0.3}>
            <p className="font-sans text-sm text-ink-secondary max-w-md mt-4 md:mt-0">
              Over 15 years leading communications across university networks, international development programs, and regional branding consultancies.
            </p>
          </CinematicReveal>
        </div>

        {/* Interactive Scroll Timeline Rail Layout */}
        <InteractiveTimelineRail journey={journey} />

        {/* Pathway to Deeper Profile */}
        <CinematicReveal variant="fade-up" delay={0.2} className="mt-16 text-center">
          <Link
            href="/explore#journey"
            className="btn-editorial-secondary inline-flex items-center gap-2"
          >
            <span>Read Full Narrative &amp; Experience</span>
            <AnimatedIcon hoverScale={1.3} hoverRotate={15}>
              <ArrowRight className="w-4 h-4" />
            </AnimatedIcon>
          </Link>
        </CinematicReveal>

      </div>
    </section>
  );
};


