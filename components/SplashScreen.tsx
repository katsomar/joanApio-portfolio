'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  onComplete?: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show splash screen for 4.8s so user can enjoy the visual craftsmanship
    const timer = setTimeout(() => {
      handleDismiss();
    }, 4800);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    if (onComplete) onComplete();
  };

  const nameWords = [
    { text: 'Joan', highlight: false },
    { text: 'E.', highlight: true },
    { text: 'Apio', highlight: false },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', opacity: 1 }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-[#121010] via-[#1A1314] to-[#121010] text-[#FAF8F5] flex flex-col items-center justify-center p-6 sm:p-10 overflow-hidden select-none"
        >
          {/* Ambient Soft Glow Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#A1243A]/15 rounded-full blur-[140px] pointer-events-none" />

          {/* Center Stage Presentation Container */}
          <div className="relative z-10 my-auto text-center space-y-6 max-w-2xl mx-auto flex flex-col items-center">
            
            {/* 1. KAVIBE Logo (MUCH LARGER & PROMINENT) */}
            <motion.div
              initial={{ scale: 0.75, opacity: 0, y: -25 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 240, damping: 22, delay: 0.2 }}
              className="relative w-72 sm:w-[380px] md:w-[460px] h-28 sm:h-36 md:h-40"
            >
              <Image
                src="/logo/kavibe.png"
                alt="KAVIBE® Logo"
                fill
                priority
                className="object-contain brightness-0 invert"
              />
            </motion.div>

            {/* 2. Bouncy Name Animation ("Joan", "E.", "Apio") (Reduced slightly to keep logo as primary focus) */}
            <div className="flex items-center justify-center gap-2.5 sm:gap-3 overflow-hidden py-1">
              {nameWords.map((item, idx) => (
                <div key={item.text} className="overflow-hidden inline-block">
                  <motion.span
                    initial={{ y: 50, opacity: 0, scale: 0.7 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 320,
                      damping: 18,
                      delay: 0.55 + idx * 0.14,
                    }}
                    className={`inline-block font-serif text-2xl sm:text-3xl md:text-4xl tracking-tight ${
                      item.highlight
                        ? 'text-[#C5A059] italic font-light'
                        : 'text-[#FAF8F5] font-normal'
                    }`}
                  >
                    {item.text}
                  </motion.span>
                </div>
              ))}
            </div>

            {/* 3. Founder / KAVIBE Line */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.55 }}
            >
              <span className="font-sans text-xs sm:text-sm uppercase tracking-superwide text-[#C5A059] font-semibold block">
                Founder / KAVIBE®
              </span>
            </motion.div>

            {/* 4. Strategic Communicator & Creative Storyteller */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.45, duration: 0.55 }}
            >
              <span className="font-sans text-xs sm:text-sm uppercase tracking-widest text-white/80 font-medium block">
                Strategic Communicator &amp; Creative Storyteller
              </span>
            </motion.div>

            {/* 5. Custom Unique Concentric Orbit Ring Loader (Slightly Increased Size) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.85, duration: 0.5 }}
              className="pt-6 flex flex-col items-center gap-3"
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                {/* Outer Breathing Gold Ring */}
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.25, 0.6, 0.25] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                  className="absolute inset-0 rounded-full border border-[#C5A059]/40"
                />
                {/* Middle Spinning Arc */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}
                  className="absolute inset-1.5 rounded-full border-2 border-transparent border-t-[#C5A059] border-r-[#A1243A]"
                />
                {/* Inner Glowing Core Dot */}
                <div className="w-3.5 h-3.5 rounded-full bg-[#C5A059] shadow-[0_0_12px_#C5A059]" />
              </div>

              <span className="font-sans text-[11px] text-white/50 uppercase tracking-superwide block mt-1">
                Kampala, Uganda · Africa
              </span>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
