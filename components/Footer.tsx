'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PROFILE_DATA } from '@/lib/data/profile';

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
            <Link href="/about" className="hover:text-kavibe-soft transition-colors">About</Link>
            <Link href="#work" className="hover:text-kavibe-soft transition-colors">Work</Link>
            <Link href="#kavibe" className="hover:text-kavibe-soft transition-colors">KAVIBE®</Link>
            <Link href="#journey" className="hover:text-kavibe-soft transition-colors">Journey</Link>
            <Link href="/explore" className="hover:text-kavibe-soft transition-colors">Explore</Link>
            <Link href="#connect" className="hover:text-kavibe-soft transition-colors">Connect</Link>
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
