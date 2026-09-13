'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { PROFILE_DATA } from '@/lib/data/profile';
import { CinematicReveal } from './CinematicReveal';
import { AnimatedIcon } from './AnimatedIcon';
import { Target, Building2, TrendingUp, Quote } from 'lucide-react';

const bgImages = [
  '/images/joan/7.jpg',
  '/images/joan/2.jpg',
];

export const PositioningSection: React.FC = () => {
  const { philosophy } = PROFILE_DATA;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bgImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const pillarIcons = [
    <Target key="target" className="w-4 h-4 text-[#C5A059]" />,
    <Building2 key="building" className="w-4 h-4 text-[#C5A059]" />,
    <TrendingUp key="trending" className="w-4 h-4 text-[#C5A059]" />,
  ];

  return (
    <section className="py-16 md:py-36 border-y border-ink-dark/10 relative overflow-hidden bg-[#141211] text-white">
      {/* Full Cross-Fade Photo Background (7.jpg and 2.jpg) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={bgImages[currentImageIndex]}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={bgImages[currentImageIndex]}
              alt="Joan E. Apio Background"
              fill
              priority
              className="object-cover object-center brightness-90 contrast-105"
            />
          </motion.div>
        </AnimatePresence>

        {/* Subtle Darkening Overlay (Just a little bit dark) */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Darkened Borders Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.75)_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Editorial Quote */}
          <div className="lg:col-span-8 space-y-4 md:space-y-6">
            <CinematicReveal variant="fade-up" delay={0.1}>
              <span className="font-sans text-xs sm:text-sm uppercase tracking-superwide text-[#E5C887] font-semibold block drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                Professional Philosophy
              </span>
            </CinematicReveal>

            <CinematicReveal variant="words" delay={0.2}>
              <div className="relative">
                <AnimatedIcon hoverScale={1.15} hoverRotate={-10} className="absolute -left-6 -top-4 opacity-30 pointer-events-none hidden sm:inline-flex">
                  <Quote className="w-12 h-12 text-[#C5A059]" />
                </AnimatedIcon>
                <blockquote className="font-serif text-2xl sm:text-4xl md:text-5xl font-light text-white leading-[1.25] tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
                  &ldquo;{philosophy.quote}&rdquo;
                </blockquote>
              </div>
            </CinematicReveal>

            <CinematicReveal variant="fade-up" delay={0.4}>
              <div className="flex items-center gap-2.5 sm:gap-4 pt-2 sm:pt-4">
                <div className="w-6 sm:w-12 h-[1px] bg-[#C5A059] flex-shrink-0" />
                <cite className="font-sans text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider text-[#E5C887] not-italic uppercase whitespace-nowrap drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
                  {philosophy.author} · Founder of KAVIBE®
                </cite>
              </div>
            </CinematicReveal>
          </div>

          {/* Pillars List (Visible on laptop/desktop) */}
          <div className="hidden lg:block lg:col-span-4 space-y-6 border-l border-white/20 lg:pl-12">
            {philosophy.pillars.map((pillar, idx) => (
              <CinematicReveal key={pillar.title} variant="fade-up" delay={0.3 + idx * 0.15}>
                <div className="space-y-1.5 group p-3.5 rounded-xl bg-black/50 border border-white/15 backdrop-blur-md hover:bg-black/70 hover:border-[#C5A059]/50 transition-all shadow-md">
                  <div className="flex items-center gap-2.5">
                    <AnimatedIcon hoverScale={1.3} hoverRotate={12}>
                      {pillarIcons[idx % pillarIcons.length]}
                    </AnimatedIcon>
                    <span className="font-serif text-sm text-[#C5A059] italic font-normal">
                      0{idx + 1}.
                    </span>
                    <h4 className="font-sans text-sm font-semibold text-white uppercase tracking-wider group-hover:text-[#E5C887] transition-colors">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="font-sans text-xs text-white/90 leading-relaxed pl-7 line-clamp-2 sm:line-clamp-none drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
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

