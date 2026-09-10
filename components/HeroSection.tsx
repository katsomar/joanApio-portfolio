'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { downloadVCard } from '@/lib/vcard';
import { ArrowRight, UserCheck, Sparkles } from 'lucide-react';
import { PROFILE_DATA } from '@/lib/data/profile';
import { CinematicReveal } from './CinematicReveal';
import { ImageReveal } from './ImageReveal';
import { AnimatedIcon } from './AnimatedIcon';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden bg-warm-bg">
      {/* Signature Circular Background Motif — Faint, Non-glowing, Bleeding off Left/Bottom */}
      <div className="circle-bg-primary w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] -left-40 sm:-left-56 -bottom-40 sm:-bottom-56 z-0" />
      <div className="circle-bg-accent w-72 sm:w-96 h-72 sm:h-96 -right-24 top-16 z-0" />

      {/* Background Subtle Editorial Grid Lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none grid grid-cols-12 max-w-7xl mx-auto px-6 z-0">
        <div className="col-span-1 border-r border-ink-dark h-full" />
        <div className="col-span-3 border-r border-ink-dark h-full" />
        <div className="col-span-4 border-r border-ink-dark h-full" />
        <div className="col-span-4 border-r border-ink-dark h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Integrated Portrait Column — FIRST ON MOBILE (order-1 lg:order-2) */}
          <div className="w-full lg:col-span-5 relative order-1 lg:order-2 mb-6 lg:mb-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Subtle Circle Behind Portrait */}
              <div className="circle-bg-primary w-72 sm:w-80 h-72 sm:h-80 -top-6 sm:-top-10 -right-6 sm:-right-10 z-0" />

              {/* Backing Editorial Canvas Frame */}
              <div className="absolute -inset-4 bg-warm-surface border border-ink-dark/10 -rotate-1 pointer-events-none transition-transform duration-700 hover:rotate-0" />

              {/* Main Portrait Frame with ImageReveal */}
              <ImageReveal delay={0.2} className="shadow-elevated relative z-10">
                <div className="relative aspect-[3/4] overflow-hidden bg-ink-dark/5 group">
                  <Image
                    src="/images/joan/9.jpg"
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
                    <AnimatedIcon>
                      <div className="p-2 bg-kavibe-primary text-warm-bg text-xs">
                        <Sparkles className="w-4 h-4" />
                      </div>
                    </AnimatedIcon>
                  </div>
                </div>
              </ImageReveal>

              {/* Floating NFC Identity Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-warm-bg border border-ink-dark/15 p-4 shadow-tactile max-w-xs z-20"
              >
                <AnimatedIcon hoverScale={1.15}>
                  <div className="relative w-12 h-6 flex-shrink-0">
                    <Image
                      src="/logo/kavibe.png"
                      alt="KAVIBE Logo"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                </AnimatedIcon>
                <div>
                  <p className="font-sans text-xs font-semibold text-ink-dark">NFC Digital Identity</p>
                  <p className="font-sans text-[11px] text-ink-muted">Tap to connect &amp; explore work</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Text & Identity Column — SECOND ON MOBILE (order-2 lg:order-1) */}
          <div className="w-full lg:col-span-7 flex flex-col items-start z-10 order-2 lg:order-1">
            
            {/* KAVIBE Tag & Logo Chip */}
            <CinematicReveal variant="fade-up" delay={0.1}>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-warm-surface border border-ink-dark/10 rounded-full mb-6 shadow-tactile">
                <AnimatedIcon hoverScale={1.15}>
                  <div className="relative w-14 h-4">
                    <Image
                      src="/logo/kavibe.png"
                      alt="KAVIBE Logo"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                </AnimatedIcon>
                <span className="text-ink-muted text-xs">•</span>
                <span className="font-sans text-xs font-semibold tracking-wider text-kavibe-primary uppercase">
                  {PROFILE_DATA.badge}
                </span>
              </div>
            </CinematicReveal>

            {/* Main Name Heading with Cinematic Reveal */}
            <CinematicReveal variant="lines" delay={0.25}>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-ink-dark leading-[0.95] mb-6">
                JOAN <span className="italic font-light text-kavibe-primary">APIO</span>
              </h1>
            </CinematicReveal>

            {/* Sub-titles */}
            <CinematicReveal variant="words" delay={0.4} className="mb-8">
              <p className="font-sans text-lg sm:text-xl md:text-2xl font-medium text-ink-dark tracking-tight">
                Strategic Communicator <span className="text-kavibe-accent">&amp;</span> Creative Storyteller
              </p>
              <p className="font-sans text-sm md:text-base text-ink-secondary tracking-wide mt-1">
                Development Communications · Marketing · Branding
              </p>
            </CinematicReveal>

            {/* Short 5-Second NFC Statement */}
            <CinematicReveal variant="fade-up" delay={0.55} className="w-full">
              <p className="font-sans text-base md:text-lg text-ink-secondary leading-relaxed max-w-xl mb-10 border-l-2 border-kavibe-primary/40 pl-5">
                {PROFILE_DATA.tagline}
              </p>
            </CinematicReveal>

            {/* CTAs */}
            <CinematicReveal variant="fade-up" delay={0.7} className="w-full">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/explore"
                  className="btn-editorial-primary group w-full sm:w-auto text-center"
                >
                  <span>Explore Joan</span>
                  <AnimatedIcon hoverScale={1.3} hoverRotate={12}>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </AnimatedIcon>
                </Link>

                <button
                  onClick={downloadVCard}
                  className="btn-editorial-secondary group w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <AnimatedIcon hoverScale={1.25} hoverRotate={-10}>
                    <UserCheck className="w-4 h-4 text-kavibe-primary" />
                  </AnimatedIcon>
                  <span>Save Contact Card</span>
                </button>

                <Link
                  href="#connect"
                  className="btn-editorial-link px-2 py-3 text-center sm:text-left"
                >
                  Connect Directly
                </Link>
              </div>
            </CinematicReveal>

            {/* Quick Stats / Provenance */}
            <CinematicReveal variant="fade-up" delay={0.85} className="w-full max-w-md">
              <div className="mt-14 pt-8 border-t border-ink-dark/10 grid grid-cols-3 gap-6 w-full">
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
            </CinematicReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
