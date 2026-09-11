'use client';

import React from 'react';
import Image from 'next/image';
import { downloadVCard } from '@/lib/vcard';
import { Mail, Phone, Linkedin, Globe, MapPin, UserCheck, ArrowUpRight } from 'lucide-react';
import { PROFILE_DATA } from '@/lib/data/profile';
import { CinematicReveal } from './CinematicReveal';
import { AnimatedIcon } from './AnimatedIcon';

export const ContactSection: React.FC = () => {
  const { contact, name, primaryTitle } = PROFILE_DATA;

  return (
    <section id="connect" className="py-16 md:py-36 bg-warm-bg relative overflow-hidden">
      {/* Signature Background Circular Accents */}
      <div className="circle-bg-primary w-[600px] h-[600px] -left-48 -bottom-48 z-0" />
      <div className="circle-bg-accent w-[350px] h-[350px] -right-24 top-12 z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Headline Column */}
          <div className="lg:col-span-6 space-y-6">
            <CinematicReveal variant="fade-up" delay={0.1}>
              <span className="font-sans text-xs uppercase tracking-superwide text-kavibe-primary font-semibold block">
                Direct Connection
              </span>
            </CinematicReveal>

            <CinematicReveal variant="lines" delay={0.25}>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink-dark font-normal leading-tight">
                Let&apos;s Build <span className="italic font-light text-kavibe-primary">Meaningful Impact</span> Together.
              </h2>
            </CinematicReveal>

            <CinematicReveal variant="fade-up" delay={0.4}>
              <p className="font-sans text-base text-ink-secondary leading-relaxed max-w-lg">
                Whether you are looking to revitalize an institutional brand, capture field storytelling across Africa, or train your communications team, Joan is always open to strategic conversations.
              </p>
            </CinematicReveal>

            {/* Fancy Editorial Portrait Frame Under Title */}
            <CinematicReveal variant="fade-up" delay={0.45}>
              <div className="relative my-4 max-w-xs sm:max-w-sm group">
                <div className="absolute -inset-2 bg-warm-surface border border-ink-dark/15 -rotate-2 rounded-sm pointer-events-none transition-transform duration-500 group-hover:rotate-0" />
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-ink-dark/10 shadow-tactile bg-ink-dark/5">
                  <Image
                    src="/images/joan/3.jpg"
                    alt="Joan Apio - Strategic Communicator"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 360px"
                  />
                  <div className="absolute bottom-2 left-2 right-2 p-2 bg-warm-bg/90 backdrop-blur-md border border-ink-dark/10 flex items-center justify-between text-xs">
                    <span className="font-serif italic text-ink-dark font-medium">Joan Apio</span>
                    <span className="font-sans text-[10px] uppercase tracking-wider text-kavibe-primary font-semibold">Kampala, Uganda</span>
                  </div>
                </div>
              </div>
            </CinematicReveal>

            {/* Quick Action Button */}
            <CinematicReveal variant="fade-up" delay={0.55}>
              <div className="pt-4">
                <button
                  onClick={downloadVCard}
                  className="btn-editorial-primary inline-flex items-center gap-3"
                >
                  <AnimatedIcon hoverScale={1.25} hoverRotate={12}>
                    <UserCheck className="w-4 h-4" />
                  </AnimatedIcon>
                  <span>Save Contact to Phone (.vcf)</span>
                </button>
              </div>
            </CinematicReveal>
          </div>

          {/* Contact Direct Links Grid */}
          <div className="lg:col-span-6">
            <CinematicReveal variant="fade-up" delay={0.3}>
              <div className="bg-warm-surface border border-ink-dark/10 p-8 md:p-12 shadow-tactile space-y-8 relative overflow-hidden">
                {/* Internal Decorative Circle */}
                <div className="circle-bg-primary w-64 h-64 -right-16 -top-16 z-0" />

                <div className="border-b border-ink-dark/10 pb-6 relative z-10">
                  <span className="font-serif text-2xl font-normal text-ink-dark block">
                    {name}
                  </span>
                  <span className="font-sans text-xs text-ink-muted uppercase tracking-wider">
                    {primaryTitle}
                  </span>
                </div>

                <div className="space-y-6 relative z-10">
                  
                  {/* Email Link */}
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center justify-between p-4 bg-warm-bg border border-ink-dark/10 hover:border-kavibe-primary transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <AnimatedIcon hoverScale={1.2} hoverRotate={10}>
                        <div className="p-2.5 bg-kavibe-soft text-kavibe-primary">
                          <Mail className="w-5 h-5" />
                        </div>
                      </AnimatedIcon>
                      <div>
                        <span className="font-sans text-[11px] uppercase tracking-wider text-ink-muted block">Direct Email</span>
                        <span className="font-sans text-sm font-medium text-ink-dark group-hover:text-kavibe-primary transition-colors">
                          {contact.email}
                        </span>
                      </div>
                    </div>
                    <AnimatedIcon hoverScale={1.3} hoverRotate={12}>
                      <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-kavibe-primary transition-all" />
                    </AnimatedIcon>
                  </a>

                  {/* Phone Link */}
                  <a
                    href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                    className="flex items-center justify-between p-4 bg-warm-bg border border-ink-dark/10 hover:border-kavibe-primary transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <AnimatedIcon hoverScale={1.2} hoverRotate={10}>
                        <div className="p-2.5 bg-warm-card text-ink-dark">
                          <Phone className="w-5 h-5" />
                        </div>
                      </AnimatedIcon>
                      <div>
                        <span className="font-sans text-[11px] uppercase tracking-wider text-ink-muted block">Direct Phone</span>
                        <span className="font-sans text-sm font-medium text-ink-dark group-hover:text-kavibe-primary transition-colors">
                          {contact.phone}
                        </span>
                      </div>
                    </div>
                    <AnimatedIcon hoverScale={1.3} hoverRotate={12}>
                      <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-kavibe-primary transition-all" />
                    </AnimatedIcon>
                  </a>

                  {/* LinkedIn Link */}
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-warm-bg border border-ink-dark/10 hover:border-kavibe-primary transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <AnimatedIcon hoverScale={1.2} hoverRotate={10}>
                        <div className="p-2.5 bg-warm-card text-ink-dark">
                          <Linkedin className="w-5 h-5" />
                        </div>
                      </AnimatedIcon>
                      <div>
                        <span className="font-sans text-[11px] uppercase tracking-wider text-ink-muted block">LinkedIn Profile</span>
                        <span className="font-sans text-sm font-medium text-ink-dark group-hover:text-kavibe-primary transition-colors">
                          in/joan-apio
                        </span>
                      </div>
                    </div>
                    <AnimatedIcon hoverScale={1.3} hoverRotate={12}>
                      <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-kavibe-primary transition-all" />
                    </AnimatedIcon>
                  </a>

                  {/* KAVIBE Website Link */}
                  <a
                    href={contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-warm-bg border border-ink-dark/10 hover:border-kavibe-primary transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <AnimatedIcon hoverScale={1.2} hoverRotate={10}>
                        <div className="p-2.5 bg-kavibe-primary text-warm-bg">
                          <Globe className="w-5 h-5" />
                        </div>
                      </AnimatedIcon>
                      <div>
                        <span className="font-sans text-[11px] uppercase tracking-wider text-ink-muted block">Company Platform</span>
                        <span className="font-sans text-sm font-medium text-ink-dark group-hover:text-kavibe-primary transition-colors">
                          www.kavibe.com
                        </span>
                      </div>
                    </div>
                    <AnimatedIcon hoverScale={1.3} hoverRotate={12}>
                      <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-kavibe-primary transition-all" />
                    </AnimatedIcon>
                  </a>

                </div>

                <div className="pt-4 flex items-center justify-between text-xs font-sans text-ink-muted border-t border-ink-dark/10 relative z-10">
                  <span className="flex items-center gap-1.5">
                    <AnimatedIcon hoverScale={1.2} hoverRotate={8}>
                      <MapPin className="w-3.5 h-3.5 text-kavibe-primary" />
                    </AnimatedIcon>
                    <span>{contact.location}</span>
                  </span>
                  <span>Available for global consultancies</span>
                </div>
              </div>
            </CinematicReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
