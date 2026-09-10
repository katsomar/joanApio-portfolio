'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { User, Briefcase, Sparkles, Compass, Layers, Send } from 'lucide-react';
import { PROFILE_DATA } from '@/lib/data/profile';
import { AnimatedIcon } from './AnimatedIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ink-dark text-warm-bg/70 py-16 border-t border-warm-bg/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-warm-bg/10">
          
          <div className="flex items-center gap-6">
            <div className="relative w-28 h-8 opacity-90">
              <Image
                src="/logo/kavibe.png"
                alt="KAVIBE Logo"
                fill
                className="object-contain object-left brightness-0 invert"
              />
            </div>
            <div className="h-8 w-[1px] bg-warm-bg/20 hidden sm:block" />
            <div>
              <span className="font-serif text-xl text-warm-bg font-normal block">
                JOAN APIO
              </span>
              <p className="font-sans text-[11px] text-warm-bg/60 tracking-wide">
                {PROFILE_DATA.secondaryTitle}
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-6 text-xs font-sans uppercase tracking-widest text-warm-bg/70">
            <Link href="/about" className="hover:text-kavibe-soft transition-colors flex items-center gap-1.5 group">
              <AnimatedIcon hoverScale={1.25} hoverRotate={10}>
                <User className="w-3.5 h-3.5 text-kavibe-accent group-hover:text-kavibe-soft" />
              </AnimatedIcon>
              <span>About</span>
            </Link>
            <Link href="#work" className="hover:text-kavibe-soft transition-colors flex items-center gap-1.5 group">
              <AnimatedIcon hoverScale={1.25} hoverRotate={10}>
                <Briefcase className="w-3.5 h-3.5 text-kavibe-accent group-hover:text-kavibe-soft" />
              </AnimatedIcon>
              <span>Work</span>
            </Link>
            <Link href="#kavibe" className="hover:text-kavibe-soft transition-colors flex items-center gap-1.5 group">
              <AnimatedIcon hoverScale={1.25} hoverRotate={10}>
                <Sparkles className="w-3.5 h-3.5 text-kavibe-accent group-hover:text-kavibe-soft" />
              </AnimatedIcon>
              <span>KAVIBE®</span>
            </Link>
            <Link href="#journey" className="hover:text-kavibe-soft transition-colors flex items-center gap-1.5 group">
              <AnimatedIcon hoverScale={1.25} hoverRotate={10}>
                <Compass className="w-3.5 h-3.5 text-kavibe-accent group-hover:text-kavibe-soft" />
              </AnimatedIcon>
              <span>Journey</span>
            </Link>
            <Link href="/explore" className="hover:text-kavibe-soft transition-colors flex items-center gap-1.5 group">
              <AnimatedIcon hoverScale={1.25} hoverRotate={10}>
                <Layers className="w-3.5 h-3.5 text-kavibe-accent group-hover:text-kavibe-soft" />
              </AnimatedIcon>
              <span>Explore</span>
            </Link>
            <Link href="#connect" className="hover:text-kavibe-soft transition-colors flex items-center gap-1.5 group">
              <AnimatedIcon hoverScale={1.25} hoverRotate={10}>
                <Send className="w-3.5 h-3.5 text-kavibe-accent group-hover:text-kavibe-soft" />
              </AnimatedIcon>
              <span>Connect</span>
            </Link>
          </nav>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-warm-bg/40">
          <p>© {new Date().getFullYear()} Joan Apio. All rights reserved. Founder of KAVIBE®.</p>
          <p>Art-Directed &amp; Crafted for NFC &amp; Web Presentation</p>
        </div>
      </div>
    </footer>
  );
};

