'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { downloadVCard } from '@/lib/vcard';
import { ArrowRight, UserCheck, Sparkles } from 'lucide-react';
import { PROFILE_DATA } from '@/lib/data/profile';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden bg-warm-bg">
      {/* Background Subtle Editorial Grid Lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none grid grid-cols-12 max-w-7xl mx-auto px-6">
        <div className="col-span-1 border-r border-ink-dark h-full" />
        <div className="col-span-3 border-r border-ink-dark h-full" />
        <div className="col-span-4 border-r border-ink-dark h-full" />
        <div className="col-span-4 border-r border-ink-dark h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text & Identity Column */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* KAVIBE Tag & Logo Chip */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-warm-surface border border-ink-dark/10 rounded-full mb-6 shadow-tactile">
              <div className="relative w-14 h-4">
                <Image
                  src="/logo/kavibe.png"
                  alt="KAVIBE Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <span className="text-ink-muted text-xs">•</span>
              <span className="font-sans text-xs font-semibold tracking-wider text-kavibe-primary uppercase">
                {PROFILE_DATA.badge}
              </span>
            </div>

            {/* Main Name Heading */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-ink-dark leading-[0.95] mb-6">
              JOAN <span className="italic font-light text-kavibe-primary">APIO</span>
            </h1>

            {/* Sub-titles */}
            <div className="space-y-2 mb-8">
              <p className="font-sans text-lg sm:text-xl md:text-2xl font-medium text-ink-dark tracking-tight">
                Strategic Communicator <span className="text-kavibe-accent">&amp;</span> Creative Storyteller
              </p>
              <p className="font-sans text-sm md:text-base text-ink-secondary tracking-wide">
                Development Communications · Marketing · Branding
              </p>
            </div>

            {/* Short 5-Second NFC Statement */}
            <p className="font-sans text-base md:text-lg text-ink-secondary leading-relaxed max-w-xl mb-10 border-l-2 border-kavibe-primary/40 pl-5">
              {PROFILE_DATA.tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Link
                href="/explore"
                className="btn-editorial-primary group w-full sm:w-auto text-center"
              >
                <span>Explore Joan</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <button
                onClick={downloadVCard}
                className="btn-editorial-secondary group w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <UserCheck className="w-4 h-4 text-kavibe-primary" />
                <span>Save Contact Card</span>
              </button>

              <Link
                href="#connect"
                className="btn-editorial-link px-2 py-3"
              >
                Connect Directly
              </Link>
            </div>

            {/* Quick Stats / Provenance */}
            <div className="mt-14 pt-8 border-t border-ink-dark/10 grid grid-cols-3 gap-6 w-full max-w-md">
              <div>
                <span className="block font-serif text-2xl md:text-3xl text-ink-dark font-normal">15+</span>
                <span className="font-sans text-[11px] uppercase tracking-wider text-ink-muted">Years Experience</span>
              </div>
              <div>
                <span className="block font-serif text-2xl md:text-3xl text-ink-dark font-normal">KAVIBE®</span>
                <span className="font-sans text-[11px] uppercase tracking-wider text-ink-muted">Founder &amp; Lead</span>
              </div>
              <div>
                <span className="block font-serif text-2xl md:text-3xl text-ink-dark font-normal">Africa</span>
                <span className="font-sans text-[11px] uppercase tracking-wider text-ink-muted">Regional Impact</span>
              </div>
            </div>
          </div>

          {/* Integrated Portrait Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Backing Editorial Canvas Frame */}
              <div className="absolute -inset-4 bg-warm-surface border border-ink-dark/10 -rotate-1 pointer-events-none transition-transform duration-700 hover:rotate-0" />

              {/* Main Portrait Frame */}
              <div className="relative aspect-[3/4] overflow-hidden bg-ink-dark/5 shadow-elevated group">
                <Image
                  src="/images/joan/hero.png"
                  alt="Joan Apio - Strategic Communicator & Creative Storyteller"
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />

                {/* Overlaid Editorial Watermark */}
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-ink-dark/80 via-ink-dark/30 to-transparent text-warm-bg flex items-end justify-between">
                  <div>
                    <span className="block font-serif text-lg font-light tracking-wide text-warm-bg">
                      Joan Apio
                    </span>
                    <span className="font-sans text-[10px] uppercase tracking-widest text-warm-bg/70">
                      Kampala, Uganda
                    </span>
                  </div>
                  <div className="p-2 bg-kavibe-primary text-warm-bg text-xs">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Floating NFC Identity Badge */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-warm-bg border border-ink-dark/15 p-4 shadow-tactile max-w-xs">
                <div className="relative w-12 h-6 flex-shrink-0">
                  <Image
                    src="/logo/kavibe.png"
                    alt="KAVIBE Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <div>
                  <p className="font-sans text-xs font-semibold text-ink-dark">NFC Digital Identity</p>
                  <p className="font-sans text-[11px] text-ink-muted">Tap to connect &amp; explore work</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
