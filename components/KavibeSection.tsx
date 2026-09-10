'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, CheckCircle2, Layers, Sparkles } from 'lucide-react';
import { PROFILE_DATA } from '@/lib/data/profile';
import { AnimatedIcon } from './AnimatedIcon';

export const KavibeSection: React.FC = () => {
  const { kavibeOverview } = PROFILE_DATA;

  return (
    <section id="kavibe" className="py-24 md:py-36 bg-ink-dark text-warm-bg relative overflow-hidden">
      {/* Subtle brand graphic accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-kavibe-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Brand Relationship Breadcrumb */}
        <div className="flex items-center gap-3 mb-12">
          <AnimatedIcon hoverScale={1.3} hoverRotate={15}>
            <Layers className="w-4 h-4 text-kavibe-accent" />
          </AnimatedIcon>
          <span className="font-sans text-xs uppercase tracking-superwide text-kavibe-soft/80 font-semibold">
            Brand Platform Relationship
          </span>
          <span className="w-8 h-[1px] bg-kavibe-primary" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main KAVIBE Brand Card */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Official KAVIBE Logo */}
            <div className="inline-block p-4 bg-warm-bg/10 border border-warm-bg/15 backdrop-blur-md rounded-sm">
              <div className="relative w-36 h-12">
                <Image
                  src="/logo/kavibe.png"
                  alt="KAVIBE® Logo"
                  fill
                  className="object-contain object-left brightness-0 invert"
                  priority
                />
              </div>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-warm-bg font-normal flex items-center gap-2">
              KAVIBE<span className="text-kavibe-accent text-3xl font-light">®</span>
            </h2>

            <p className="font-serif text-xl md:text-2xl text-warm-bg/90 italic font-light">
              &ldquo;{kavibeOverview.tagline}&rdquo;
            </p>

            <p className="font-sans text-base text-warm-bg/70 leading-relaxed">
              {kavibeOverview.description}
            </p>

            {/* Link to Official KAVIBE Web */}
            <div className="pt-4">
              <a
                href={kavibeOverview.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-kavibe-primary hover:bg-kavibe-secondary text-warm-bg font-sans font-medium text-xs tracking-superwide uppercase transition-all duration-300 active:scale-95 shadow-elevated"
              >
                <span>Visit Official KAVIBE® Website</span>
                <AnimatedIcon hoverScale={1.3} hoverRotate={15}>
                  <ExternalLink className="w-4 h-4" />
                </AnimatedIcon>
              </a>
            </div>
          </div>

          {/* Core Pillars & Role Card */}
          <div className="lg:col-span-6 bg-warm-bg/5 border border-warm-bg/10 p-8 md:p-12 space-y-8 backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-warm-bg/10 pb-6">
              <div>
                <span className="font-sans text-xs uppercase tracking-widest text-kavibe-accent font-semibold block mb-1">
                  Joan Apio&apos;s Leadership
                </span>
                <h3 className="font-serif text-2xl text-warm-bg font-normal">
                  Founder &amp; Managing Consultant
                </h3>
              </div>
              <div className="relative w-16 h-8 opacity-80">
                <Image
                  src="/logo/kavibe.png"
                  alt="KAVIBE Brand Mark"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <AnimatedIcon hoverScale={1.2} hoverRotate={10}>
                  <Sparkles className="w-3.5 h-3.5 text-kavibe-accent" />
                </AnimatedIcon>
                <span className="font-sans text-xs uppercase tracking-wider text-warm-bg/60 block">
                  Platform Capabilities &amp; Specializations:
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {kavibeOverview.corePillars.map((pillar) => (
                  <div key={pillar} className="flex items-start gap-3">
                    <AnimatedIcon hoverScale={1.3} hoverRotate={12}>
                      <CheckCircle2 className="w-4 h-4 text-kavibe-primary flex-shrink-0 mt-0.5" />
                    </AnimatedIcon>
                    <span className="font-sans text-xs text-warm-bg/80 leading-snug">
                      {pillar}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Conceptual relationship flow */}
            <div className="pt-6 border-t border-warm-bg/10 text-xs font-sans text-warm-bg/50 flex flex-wrap items-center gap-2">
              <span>JOAN APIO</span>
              <span>→</span>
              <span className="text-warm-bg/80">Experience &amp; Storytelling</span>
              <span>→</span>
              <span className="text-kavibe-primary font-semibold">KAVIBE® Impact</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

