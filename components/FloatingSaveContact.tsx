'use client';

import React, { useState, useEffect } from 'react';
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
    <aside className="fixed bottom-6 right-6 z-40 animate-fadeIn">
      <button
        onClick={handleClick}
        className={`group flex items-center gap-3 px-5 py-3.5 shadow-elevated border transition-all duration-300 active:scale-95 focus:outline-none ${
          saved
            ? 'bg-emerald-800 text-warm-bg border-emerald-700'
            : 'bg-kavibe-primary hover:bg-kavibe-secondary text-warm-bg border-kavibe-secondary'
        }`}
        aria-label="Save Joan Apio Contact Card (.vcf)"
        title="Save Joan Apio Contact Card (.vcf)"
      >
        {saved ? (
          <>
            <AnimatedIcon hoverScale={1.3} hoverRotate={-10}>
              <Check className="w-4 h-4 text-warm-bg" />
            </AnimatedIcon>
            <span className="font-sans text-xs uppercase tracking-wider font-semibold">
              Contact Saved (.vcf)
            </span>
          </>
        ) : (
          <>
            <AnimatedIcon hoverScale={1.3} hoverRotate={12}>
              <UserPlus className="w-4 h-4 text-warm-bg" />
            </AnimatedIcon>
            <span className="font-sans text-xs uppercase tracking-wider font-semibold">
              Save Contact
            </span>
          </>
        )}
      </button>
    </aside>
  );
};
