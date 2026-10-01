'use client';

import React from 'react';
import { PROFILE_DATA } from '@/lib/data/profile';
import { CinematicReveal } from './CinematicReveal';
import { AnimatedIcon } from './AnimatedIcon';
import { Target, Building2, TrendingUp, Quote } from 'lucide-react';

export const PositioningSection: React.FC = () => {
  const { philosophy } = PROFILE_DATA;

  const pillarIcons = [
    <Target key="target" className="w-4 h-4 text-[#C5A059]" />,
    <Building2 key="building" className="w-4 h-4 text-[#C5A059]" />,
    <TrendingUp key="trending" className="w-4 h-4 text-[#C5A059]" />,
  ];

  return (
    <section className="py-20 md:py-36 border-y border-ink-dark/10 relative overflow-hidden bg-gradient-to-br from-[#1C1416] via-[#161314] to-[#25171B] text-white">
      {/* Background Graphic Accents — Professional Deep Brand Tone Motif */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Subtle Theme Radial Orbs */}
        <div className="circle-bg-primary w-[550px] h-[550px] -left-48 -bottom-48 opacity-40 z-0" />
        <div className="circle-bg-accent w-[380px] h-[380px] -right-28 top-8 opacity-30 z-0" />

        {/* Faint Architectural Grid Lines */}
        <div className="absolute inset-0 opacity-[0.03] grid grid-cols-12 max-w-7xl mx-auto px-6">
          <div className="col-span-1 border-r border-warm-bg h-full" />
          <div className="col-span-3 border-r border-warm-bg h-full" />
          <div className="col-span-4 border-r border-warm-bg h-full" />
          <div className="col-span-4 border-r border-warm-bg h-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Main Editorial Quote Column */}
          <div className="lg:col-span-8 space-y-6 md:space-y-8">
            <CinematicReveal variant="fade-up" delay={0.1}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-warm-bg/5 border border-warm-bg/10 rounded-full">
                <span className="w-2 h-2 rounded-full bg-kavibe-primary animate-pulse" />
                <span className="font-sans text-xs sm:text-sm uppercase tracking-superwide text-[#E5C887] font-semibold block">
                  Professional Philosophy
                </span>
              </div>
            </CinematicReveal>

            <CinematicReveal variant="words" delay={0.2}>
              <div className="relative">
                <AnimatedIcon hoverScale={1.15} hoverRotate={-10} className="absolute -left-8 -top-6 opacity-25 pointer-events-none hidden sm:inline-flex">
                  <Quote className="w-16 h-16 text-[#C5A059]" />
                </AnimatedIcon>
                <blockquote className="font-serif text-2xl sm:text-4xl md:text-5xl font-light text-white leading-[1.25] tracking-tight">
                  &ldquo;{philosophy.quote}&rdquo;
                </blockquote>
              </div>
            </CinematicReveal>

            <CinematicReveal variant="fade-up" delay={0.4}>
              <div className="flex items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
                <div className="w-8 sm:w-14 h-[1px] bg-[#C5A059] flex-shrink-0" />
                <cite className="font-sans text-xs sm:text-sm font-semibold tracking-wider text-[#E5C887] not-italic uppercase whitespace-nowrap">
                  {philosophy.author} · Founder of KAVIBE®
                </cite>
              </div>
            </CinematicReveal>
          </div>

          {/* Pillars List Column */}
          <div className="hidden lg:block lg:col-span-4 space-y-5 border-l border-warm-bg/15 lg:pl-10">
            {philosophy.pillars.map((pillar, idx) => (
              <CinematicReveal key={pillar.title} variant="fade-up" delay={0.3 + idx * 0.15}>
                <div className="space-y-2 group p-4 rounded-xl bg-warm-bg/[0.04] border border-warm-bg/10 hover:bg-warm-bg/[0.08] hover:border-[#C5A059]/40 transition-all duration-300 shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <AnimatedIcon hoverScale={1.3} hoverRotate={12}>
                      {pillarIcons[idx % pillarIcons.length]}
                    </AnimatedIcon>
                    <span className="font-serif text-sm text-[#C5A059] italic font-normal">
                      0{idx + 1}.
                    </span>
                    <h4 className="font-sans text-xs font-semibold text-white uppercase tracking-wider group-hover:text-[#E5C887] transition-colors">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="font-sans text-xs text-warm-bg/80 leading-relaxed pl-7 line-clamp-3">
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


