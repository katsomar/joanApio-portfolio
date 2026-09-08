'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { downloadVCard } from '@/lib/vcard';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'KAVIBE®', href: '#kavibe' },
    { label: 'Journey', href: '#journey' },
    { label: 'Story', href: '/explore' },
    { label: 'Connect', href: '#connect' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-warm-bg/90 backdrop-blur-md border-b border-ink-dark/10 py-4 shadow-tactile'
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
            JOAN APIO
          </span>
          <span className="font-sans text-[10px] uppercase tracking-superwide text-ink-muted">
            Strategic Communicator
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-sans text-xs uppercase tracking-widest text-ink-secondary hover:text-kavibe-primary transition-colors duration-200 relative group py-1"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-kavibe-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop Action & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={downloadVCard}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-ink-dark/20 hover:border-kavibe-primary text-ink-dark hover:text-kavibe-primary font-sans text-xs tracking-wider uppercase transition-all duration-300 active:scale-95"
            title="Save contact card (.vcf)"
          >
            <span>Save Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-ink-dark hover:text-kavibe-primary focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[70px] bg-warm-bg/98 backdrop-blur-lg z-50 flex flex-col justify-between p-8 border-t border-ink-dark/10 animate-fadeIn">
          <nav className="flex flex-col gap-6 pt-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-3xl font-normal text-ink-dark hover:text-kavibe-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-4 pb-8 border-t border-ink-dark/10 pt-6">
            <button
              onClick={() => {
                downloadVCard();
                setMobileMenuOpen(false);
              }}
              className="w-full py-4 bg-kavibe-primary text-warm-bg font-sans font-medium text-xs tracking-widest uppercase flex items-center justify-center gap-2"
            >
              <span>Save Contact Card (.vcf)</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="font-sans text-xs text-ink-muted text-center">
              Founder of KAVIBE® · Kampala, Uganda
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
