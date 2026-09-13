'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { downloadVCard } from '@/lib/vcard';
import { VCardModal } from './VCardModal';
import {
  Menu,
  X,
  ArrowUpRight,
  User,
  Briefcase,
  Layers,
  Home,
  Sparkles,
  Send,
  ChevronRight,
} from 'lucide-react';
import { AnimatedIcon } from './AnimatedIcon';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [vcardModalOpen, setVcardModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Home', href: '/', icon: Home, subtitle: 'Main Portfolio & Introduction' },
    { label: 'About', href: '/about', icon: User, subtitle: 'Biography & Career Journey' },
    { label: 'Explore', href: '/explore', icon: Sparkles, subtitle: 'Interactive Consultancy Archive' },
    { label: 'Connect', href: '/#connect', icon: Send, subtitle: 'Direct Advisory Contact Form' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-warm-bg/95 backdrop-blur-md border-b border-ink-dark/10 py-4 shadow-tactile'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand identity mark */}
          <Link
            href="/"
            className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-kavibe-primary"
          >
            <span className="font-serif font-bold text-xl md:text-2xl tracking-tight text-ink-dark group-hover:text-kavibe-primary transition-colors duration-300">
              JOAN E. APIO
            </span>
            <span className="font-sans text-[10px] uppercase tracking-superwide text-ink-muted">
              Strategic Communicator
            </span>
          </Link>

          {/* Desktop Navigation with Animated Icons */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-sans text-xs uppercase tracking-widest text-ink-secondary hover:text-kavibe-primary transition-colors duration-200 relative group py-1 flex items-center gap-1.5"
                >
                  <AnimatedIcon hoverScale={1.25} hoverRotate={10}>
                    <IconComponent className="w-3.5 h-3.5 text-kavibe-primary/80 group-hover:text-kavibe-primary transition-colors" />
                  </AnimatedIcon>
                  <span>{item.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-kavibe-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setVcardModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-ink-dark/20 hover:border-kavibe-primary text-ink-dark hover:text-kavibe-primary font-sans text-xs tracking-wider uppercase transition-all duration-300 active:scale-95"
              title="Save contact card (.vcf)"
            >
              <span>Save Contact</span>
              <AnimatedIcon hoverScale={1.3} hoverRotate={12}>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </AnimatedIcon>
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2.5 bg-warm-surface border border-ink-dark/15 text-ink-dark hover:text-kavibe-primary focus:outline-none rounded transition-colors shadow-sm"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Top Roll-Down Curtain Glassmorphic Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex flex-col">
            {/* Dark Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-ink-dark/65 backdrop-blur-sm"
            />

            {/* Roll-Down Glass Curtain Panel */}
            <motion.div
              initial={{ y: '-100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="relative w-full bg-warm-bg/97 backdrop-blur-2xl border-b-2 border-kavibe-primary/20 shadow-elevated rounded-b-2xl z-50 max-h-[92vh] flex flex-col justify-between overflow-hidden"
            >
              {/* Header Bar inside Roll-Down Panel */}
              <div className="px-6 py-5 border-b border-ink-dark/10 flex items-center justify-between bg-warm-surface/80 backdrop-blur-md">
                <div>
                  <span className="font-serif text-xl font-bold tracking-tight text-ink-dark block">
                    JOAN E. APIO
                  </span>
                  <span className="font-sans text-[10px] uppercase tracking-superwide text-kavibe-primary font-medium">
                    Strategic Communicator &amp; Founder
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-ink-dark/70 hover:text-kavibe-primary hover:bg-ink-dark/5 rounded-full transition-colors"
                  aria-label="Close Navigation Menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Items - Staggered Fade-in/Fade-out Cards */}
              <div className="p-6 overflow-y-auto space-y-2.5 max-h-[55vh]">
                {navItems.map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: -15, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -12, scale: 0.97 }}
                      transition={{
                        delay: 0.1 + idx * 0.045,
                        duration: 0.25,
                        ease: 'easeOut',
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="group flex items-center justify-between p-3.5 bg-warm-surface/90 hover:bg-warm-surface border border-ink-dark/10 hover:border-kavibe-primary/40 rounded-xl shadow-tactile transition-all duration-300"
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="p-2.5 bg-kavibe-primary/10 text-kavibe-primary rounded-lg group-hover:bg-kavibe-primary group-hover:text-warm-bg transition-colors duration-300">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="font-serif text-xl font-semibold text-ink-dark group-hover:text-kavibe-primary transition-colors block leading-tight">
                              {item.label}
                            </span>
                            <span className="font-sans text-[11px] text-ink-muted block mt-0.5">
                              {item.subtitle}
                            </span>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-ink-muted group-hover:text-kavibe-primary group-hover:translate-x-1 transition-all" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer Action Bar */}
              <div className="p-6 border-t border-ink-dark/10 bg-warm-surface/60 backdrop-blur-md space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setVcardModalOpen(true);
                  }}
                  className="btn-editorial-primary w-full py-3.5 font-sans font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2"
                >
                  <span>Save Contact to Phone (.vcf)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <p className="font-sans text-[11px] text-ink-muted text-center">
                  Joan E. Apio · Founder of KAVIBE® · Kampala, Uganda
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* VCard Modal Trigger */}
      <VCardModal isOpen={vcardModalOpen} onClose={() => setVcardModalOpen(false)} />
    </>
  );
};
