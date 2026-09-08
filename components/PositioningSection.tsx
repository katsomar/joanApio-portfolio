'use client';

import React from 'react';
import { PROFILE_DATA } from '@/lib/data/profile';
import { CinematicReveal } from './CinematicReveal';

export const PositioningSection: React.FC = () => {
  const { philosophy } = PROFILE_DATA;

  return (
    <section className="py-20 md:py-32 bg-warm-surface border-y border-ink-dark/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Editorial Quote */}
          <div className="lg:col-span-8 space-y-6">
            <CinematicReveal variant="fade-up" delay={0.1}>
              <span className="font-sans text-xs uppercase tracking-superwide text-kavibe-primary font-semibold block">
                Professional Philosophy
              </span>
            </CinematicReveal>

            <CinematicReveal variant="words" delay={0.2}>
              <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-ink-dark leading-[1.2]">
                &ldquo;{philosophy.quote}&rdquo;
              </blockquote>
            </CinematicReveal>

            <CinematicReveal variant="fade-up" delay={0.4}>
              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-[1px] bg-kavibe-primary" />
                <cite className="font-sans text-sm font-semibold tracking-wider text-ink-dark not-italic uppercase">
                  {philosophy.author} · Founder of KAVIBE®
                </cite>
              </div>
            </CinematicReveal>
          </div>

          {/* Pillars List */}
          <div className="lg:col-span-4 space-y-6 border-t lg:border-t-0 lg:border-l border-ink-dark/10 pt-8 lg:pt-0 lg:pl-12">
            {philosophy.pillars.map((pillar, idx) => (
              <CinematicReveal key={pillar.title} variant="fade-up" delay={0.3 + idx * 0.15}>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-sm text-kavibe-primary italic font-normal">
                      0{idx + 1}.
                    </span>
                    <h4 className="font-sans text-sm font-semibold text-ink-dark uppercase tracking-wider">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="font-sans text-xs text-ink-secondary leading-relaxed pl-5">
                    {pillar.description}
                  </p>
                </div>
              </CinematicReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
