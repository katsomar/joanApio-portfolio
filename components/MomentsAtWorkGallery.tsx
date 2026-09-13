'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { CinematicReveal } from './CinematicReveal';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

interface WorkMoment {
  id: string;
  image: string;
  title: string;
  location: string;
  category: string;
}

const workMoments: WorkMoment[] = [
  {
    id: 'moment-1',
    image: '/images/joan/1.jpg',
    title: 'Development Communication & Strategy',
    location: 'East Africa Region',
    category: 'Field Leadership',
  },
  {
    id: 'moment-2',
    image: '/images/joan/4.jpg',
    title: 'Capacity Building & Workshop Facilitation',
    location: 'Regional Workshop',
    category: 'Institutional Engagement',
  },
  {
    id: 'moment-3',
    image: '/images/joan/8.jpg',
    title: 'Visual Storytelling & Field Documentaries',
    location: 'Community Engagement',
    category: 'Media Production',
  },
  {
    id: 'moment-4',
    image: '/images/joan/10.jpg',
    title: 'Brand Advisory & Stakeholder Summit',
    location: 'KAVIBE® Executive Office',
    category: 'Brand Governance',
  },
];

export const MomentsAtWorkGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<WorkMoment | null>(null);

  // Auto-scroll loop by default (changes every 4 seconds)
  useEffect(() => {
    if (lightboxImage !== null) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % workMoments.length);
    }, 4200);

    return () => clearInterval(timer);
  }, [lightboxImage]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % workMoments.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + workMoments.length) % workMoments.length);
  };

  return (
    <section className="py-20 md:py-32 bg-warm-surface border-b border-ink-dark/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <CinematicReveal variant="lines" delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-5xl text-ink-dark font-normal">
              Moments at Work
            </h2>
          </CinematicReveal>
        </div>

        {/* Gallery Carousel Display Container */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden border border-ink-dark/15 shadow-elevated bg-ink-dark/10 group">
          
          {/* Active Auto-Scrolling Photo (Seamless Cross-Fade) */}
          <AnimatePresence initial={false}>
            <motion.div
              key={workMoments[currentIndex].id}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={workMoments[currentIndex].image}
                alt={workMoments[currentIndex].title}
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow (Manual Scroll Back) */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110 shadow-xl z-20 focus:outline-none"
            aria-label="Previous Photo"
            title="Previous Photo"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow (Manual Scroll Forward) */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110 shadow-xl z-20 focus:outline-none"
            aria-label="Next Photo"
            title="Next Photo"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Bottom Info Overlay & Lightbox Button */}
          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 flex items-end justify-between gap-6 z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={workMoments[currentIndex].id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="space-y-1 text-white max-w-2xl"
              >
                <span className="font-sans text-xs uppercase tracking-widest text-[#E5C887] font-semibold block drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {workMoments[currentIndex].category} · {workMoments[currentIndex].location}
                </span>
                <h3 className="font-serif text-xl sm:text-3xl md:text-4xl text-white font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  {workMoments[currentIndex].title}
                </h3>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-3">
              {/* Pagination Dots */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
                {workMoments.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentIndex ? 'w-6 bg-[#E5C887]' : 'w-2 bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Fullscreen Modal Button */}
              <button
                onClick={() => setLightboxImage(workMoments[currentIndex])}
                className="p-3 sm:p-3.5 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-all shadow-lg flex-shrink-0 border border-white/20"
                aria-label="View Fullscreen"
                title="Expand Fullscreen"
              >
                <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-20"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl max-h-[88vh] w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-xl bg-black shadow-2xl border border-white/10"
            >
              <Image
                src={lightboxImage.image}
                alt={lightboxImage.title}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white space-y-1">
                <span className="font-sans text-xs uppercase tracking-widest text-[#E5C887] font-semibold">
                  {lightboxImage.category} · {lightboxImage.location}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light">
                  {lightboxImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
