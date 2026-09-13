'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { downloadVCard } from '@/lib/vcard';
import { PROFILE_DATA } from '@/lib/data/profile';
import { AnimatedIcon } from './AnimatedIcon';
import {
  X,
  Download,
  Copy,
  Check,
  Phone,
  Mail,
  Globe,
  Linkedin,
  MapPin,
  QrCode,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface VCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VCardModal: React.FC<VCardModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const { name, primaryTitle, contact, badge } = PROFILE_DATA;

  const handleCopyDetails = () => {
    const details = `${name}
${primaryTitle} | ${badge}
Phone: ${contact.phone}
Email: ${contact.email}
Portfolio: ${contact.portfolioWebsite}
Website: ${contact.website}
LinkedIn: ${contact.linkedin}
Location: ${contact.location}`;

    navigator.clipboard.writeText(details);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = async () => {
    setLoading(true);
    await downloadVCard();
    setLoading(false);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink-dark/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-warm-surface border border-ink-dark/15 shadow-elevated rounded-xl overflow-hidden z-10 my-auto"
          >
            {/* Top Decorative Header Banner */}
            <div className="bg-[#681423] p-6 text-white relative overflow-hidden">
              <div className="circle-bg-primary w-64 h-64 -right-16 -top-16 opacity-30" />
              
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close vCard Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-1.5 text-[#E5C887]">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                <span className="font-sans text-xs font-semibold tracking-wider uppercase">
                  Digital Contact Card (.vcf)
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold tracking-tight">
                {name}
              </h3>
              <p className="font-sans text-xs text-white/90 tracking-wide mt-1 font-medium">
                {primaryTitle}
              </p>
            </div>

            {/* Main Content Body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Executive Business Card Preview Frame */}
              <div className="relative p-5 bg-warm-bg border border-ink-dark/10 rounded-lg shadow-tactile space-y-4">
                <div className="flex items-start justify-between gap-4 border-b border-ink-dark/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-kavibe-primary shadow-sm flex-shrink-0">
                      <Image
                        src="/images/joan/9.jpg"
                        alt={name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-ink-dark">{name}</h4>
                      <p className="font-sans text-xs text-kavibe-primary font-medium">{badge}</p>
                      <p className="font-sans text-[11px] text-ink-muted flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-kavibe-primary" />
                        <span>{contact.location}</span>
                      </p>
                    </div>
                  </div>

                  {/* QR Badge Icon */}
                  <div className="p-2 bg-kavibe-soft/60 border border-kavibe-primary/20 rounded-md flex items-center justify-center text-kavibe-primary">
                    <QrCode className="w-6 h-6" />
                  </div>
                </div>

                {/* Direct Action Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-sans">
                  
                  {/* Portfolio Website */}
                  <a
                    href={contact.portfolioWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 bg-warm-surface border border-ink-dark/10 hover:border-kavibe-primary transition-colors rounded group sm:col-span-2"
                  >
                    <div className="p-1.5 bg-kavibe-primary/10 text-kavibe-primary rounded">
                      <Globe className="w-3.5 h-3.5" />
                    </div>
                    <div className="truncate flex-1">
                      <span className="text-[10px] text-ink-muted uppercase block leading-none">Portfolio Website</span>
                      <span className="font-medium text-ink-dark group-hover:text-kavibe-primary transition-colors truncate block">
                        joan-apio-portfolio.vercel.app
                      </span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-ink-muted group-hover:text-kavibe-primary flex-shrink-0" />
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}
                    className="flex items-center gap-3 p-2.5 bg-warm-surface border border-ink-dark/10 hover:border-kavibe-primary transition-colors rounded group"
                  >
                    <div className="p-1.5 bg-kavibe-primary/10 text-kavibe-primary rounded">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] text-ink-muted uppercase block leading-none">Phone</span>
                      <span className="font-medium text-ink-dark group-hover:text-kavibe-primary transition-colors">
                        {contact.phone}
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-3 p-2.5 bg-warm-surface border border-ink-dark/10 hover:border-kavibe-primary transition-colors rounded group"
                  >
                    <div className="p-1.5 bg-kavibe-primary/10 text-kavibe-primary rounded">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] text-ink-muted uppercase block leading-none">Email</span>
                      <span className="font-medium text-ink-dark group-hover:text-kavibe-primary transition-colors">
                        {contact.email}
                      </span>
                    </div>
                  </a>

                  {/* KAVIBE Company Website */}
                  <a
                    href={contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 bg-warm-surface border border-ink-dark/10 hover:border-kavibe-primary transition-colors rounded group"
                  >
                    <div className="p-1.5 bg-kavibe-primary/10 text-kavibe-primary rounded">
                      <Globe className="w-3.5 h-3.5" />
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] text-ink-muted uppercase block leading-none">KAVIBE® Website</span>
                      <span className="font-medium text-ink-dark group-hover:text-kavibe-primary transition-colors">
                        www.kavibe.com
                      </span>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 bg-warm-surface border border-ink-dark/10 hover:border-kavibe-primary transition-colors rounded group"
                  >
                    <div className="p-1.5 bg-kavibe-primary/10 text-kavibe-primary rounded">
                      <Linkedin className="w-3.5 h-3.5" />
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] text-ink-muted uppercase block leading-none">LinkedIn</span>
                      <span className="font-medium text-ink-dark group-hover:text-kavibe-primary transition-colors">
                        in/apiojoan
                      </span>
                    </div>
                  </a>

                </div>
              </div>

              {/* Primary Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleDownload}
                  disabled={loading}
                  className={`w-full py-3.5 px-6 font-sans font-semibold text-xs tracking-wider uppercase rounded shadow-tactile transition-all duration-300 flex items-center justify-center gap-2 ${
                    downloaded
                      ? 'bg-emerald-800 text-warm-bg'
                      : 'bg-kavibe-primary hover:bg-kavibe-secondary text-warm-bg'
                  } ${loading ? 'opacity-70 cursor-wait' : ''}`}
                >
                  <AnimatedIcon hoverScale={1.2} hoverRotate={-10}>
                    {downloaded ? (
                      <Check className="w-4 h-4 text-warm-bg" />
                    ) : (
                      <Download className="w-4 h-4 text-warm-bg" />
                    )}
                  </AnimatedIcon>
                  <span>
                    {loading
                      ? 'Saving Contact (.vcf)...'
                      : downloaded
                      ? 'Contact Saved (.vcf)'
                      : 'Save Contact to Phone (.vcf)'}
                  </span>
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handleCopyDetails}
                    className="py-2.5 px-4 bg-warm-bg border border-ink-dark/15 hover:border-kavibe-primary font-sans text-xs font-medium text-ink-dark hover:text-kavibe-primary rounded transition-all flex items-center justify-center gap-2"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied Details' : 'Copy Text Info'}</span>
                  </button>

                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 bg-warm-bg border border-ink-dark/15 hover:border-kavibe-primary font-sans text-xs font-medium text-ink-dark hover:text-kavibe-primary rounded transition-all flex items-center justify-center gap-2"
                  >
                    <span>View LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="bg-warm-bg p-4 border-t border-ink-dark/10 text-center">
              <p className="font-sans text-[11px] text-ink-muted">
                Official vCard 3.0 Compatible Contact File • KAVIBE® Platform
              </p>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
