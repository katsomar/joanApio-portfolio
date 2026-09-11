'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { downloadVCard } from '@/lib/vcard';
import { UserPlus, Check } from 'lucide-react';
import { AnimatedIcon } from './AnimatedIcon';

export const FloatingSaveContact: React.FC = () => {
  const [saved, setSaved] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    downloadVCard();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  if (!visible) return null;

  return (
    <aside className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 animate-fadeIn">
      <div className="relative group flex items-center">
        
        {/* Hover Label Tooltip (Desktop) */}
        <div className="absolute right-full mr-3 hidden sm:flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span className="px-3 py-1.5 bg-ink-dark text-warm-bg font-sans text-[11px] uppercase tracking-wider font-medium rounded shadow-elevated whitespace-nowrap">
            {saved ? 'Contact Saved (.vcf)' : 'Save Contact (.vcf)'}
          </span>
        </div>

        {/* Rotating Broken Circular Line Ring */}
        <div className="absolute -inset-2 sm:-inset-2.5 pointer-events-none flex items-center justify-center">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
            className="w-full h-full"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="44"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="14 8 4 8"
              className={saved ? 'text-emerald-700/60' : 'text-kavibe-primary/50 group-hover:text-kavibe-primary'}
            />
          </motion.svg>
        </div>

        {/* Main Circular Floating Button */}
        <button
          onClick={handleClick}
          className={`relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center border transition-all duration-300 active:scale-90 shadow-tactile ${
            saved
              ? 'bg-emerald-800 text-warm-bg border-emerald-700'
              : 'bg-kavibe-primary hover:bg-kavibe-secondary text-warm-bg border-kavibe-secondary'
          }`}
          aria-label="Save Joan Apio Contact Card (.vcf)"
          title="Save Contact Card (.vcf)"
        >
          {saved ? (
            <AnimatedIcon hoverScale={1.3} hoverRotate={-10}>
              <Check className="w-5 h-5 text-warm-bg" />
            </AnimatedIcon>
          ) : (
            <AnimatedIcon hoverScale={1.3} hoverRotate={12}>
              <UserPlus className="w-5 h-5 text-warm-bg" />
            </AnimatedIcon>
          )}
        </button>

      </div>
    </aside>
  );
};
