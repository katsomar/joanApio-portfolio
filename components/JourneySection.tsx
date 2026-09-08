'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { PROFILE_DATA } from '@/lib/data/profile';

export const JourneySection: React.FC = () => {
  const { journey } = PROFILE_DATA;

  return (
    <section id="journey" className="py-24 md:py-36 bg-warm-surface border-y border-ink-dark/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-ink-dark/10">
          <div>
            <span className="font-sans text-xs uppercase tracking-superwide text-kavibe-primary font-semibold block mb-3">
              Career Trajectory
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-ink-dark">
              Professional <span className="italic font-light text-kavibe-primary">Journey</span>
            </h2>
          </div>
          <p className="font-sans text-sm text-ink-secondary max-w-md mt-4 md:mt-0">
            Over 15 years leading communications across university networks, international development programs, and regional branding consultancies.
          </p>
        </div>

        {/* Editorial Journey Layout */}
        <div className="space-y-16">
          {journey.map((item, index) => (
            <div
              key={item.organization}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start pb-12 border-b border-ink-dark/10 last:border-b-0"
            >
              {/* Period & Location */}
              <div className="lg:col-span-3">
                <span className="font-serif text-3xl font-light text-kavibe-primary block">
                  {item.period}
                </span>
                <div className="flex items-center gap-1.5 text-ink-muted text-xs font-sans mt-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Role & Org */}
              <div className="lg:col-span-4">
                <h3 className="font-serif text-2xl text-ink-dark font-normal mb-1">
                  {item.role}
                </h3>
                <span className="font-sans text-xs uppercase tracking-widest text-kavibe-accent font-semibold">
                  {item.organization}
                </span>
              </div>

              {/* Highlights */}
              <div className="lg:col-span-5 space-y-3">
                <p className="font-sans text-sm text-ink-dark font-medium leading-relaxed">
                  {item.highlight}
                </p>
                <ul className="space-y-1.5">
                  {item.details.slice(0, 2).map((detail) => (
                    <li key={detail} className="font-sans text-xs text-ink-secondary flex items-start gap-2">
                      <span className="text-kavibe-primary font-serif">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Pathway to Deeper Profile */}
        <div className="mt-16 text-center">
          <Link
            href="/explore#journey"
            className="btn-editorial-secondary inline-flex items-center gap-2"
          >
            <span>Read Full Narrative &amp; Experience</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
