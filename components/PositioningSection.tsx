'use client';

import React from 'react';
import { PROFILE_DATA } from '@/lib/data/profile';
import { CinematicReveal } from './CinematicReveal';
import { AnimatedIcon } from './AnimatedIcon';
import { Sparkles, Target, Building2, TrendingUp, Quote } from 'lucide-react';

export const PositioningSection: React.FC = () => {
  const { philosophy } = PROFILE_DATA;

  const pillarIcons = [
    <Target key="target" className="w-4 h-4 text-kavibe-primary" />,
    <Building2 key="building" className="w-4 h-4 text-kavibe-primary" />,
    <TrendingUp key="trending" className="w-4 h-4 text-kavibe-primary" />,
  ];

  return (
    <section className="py-20 md:py-32 bg-warm-surface border-y border-ink-dark/10 relative overflow-hidden">
      {/* Subtle Background Circle Accent */}
      <div className="circle-bg-primary w-[500px] h-[500px] -right-32 -top-32 z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Editorial Quote */}
          <div className="lg:col-span-8 space-y-6">
            <CinematicReveal variant="fade-up" delay={0.1}>
              <div className="inline-flex items-center gap-2">
                <AnimatedIcon hoverScale={1.3} hoverRotate={15}>
                  <Sparkles className="w-4 h-4 text-kavibe-primary" />
                </AnimatedIcon>
                <span className="font-sans text-xs uppercase tracking-superwide text-kavibe-primary font-semibold block">
                  Professional Philosophy
                </span>
              </div>
            </CinematicReveal>

            <CinematicReveal variant="words" delay={0.2}>
              <div className="relative">
                <AnimatedIcon hoverScale={1.15} hoverRotate={-10} className="absolute -left-6 -top-4 opacity-15 pointer-events-none hidden sm:inline-flex">
                  <Quote className="w-12 h-12 text-kavibe-primary" />
                </AnimatedIcon>
                <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-ink-dark leading-[1.2]">
                  &ldquo;{philosophy.quote}&rdquo;
                </blockquote>
              </div>
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
                <div className="space-y-1 group">
                  <div className="flex items-center gap-2.5">
                    <AnimatedIcon hoverScale={1.3} hoverRotate={12}>
                      {pillarIcons[idx % pillarIcons.length]}
                    </AnimatedIcon>
                    <span className="font-serif text-sm text-kavibe-primary italic font-normal">
                      0{idx + 1}.
                    </span>
                    <h4 className="font-sans text-sm font-semibold text-ink-dark uppercase tracking-wider group-hover:text-kavibe-primary transition-colors">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="font-sans text-xs text-ink-secondary leading-relaxed pl-7">
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

