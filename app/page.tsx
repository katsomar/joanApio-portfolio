import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { PositioningSection } from '@/components/PositioningSection';
import { SelectedWorkSection } from '@/components/SelectedWorkSection';
import { KavibeSection } from '@/components/KavibeSection';
import { JourneySection } from '@/components/JourneySection';
import { ContactSection } from '@/components/ContactSection';
import { FloatingSaveContact } from '@/components/FloatingSaveContact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-warm-bg text-ink-dark relative selection:bg-kavibe-primary selection:text-warm-bg">
      <Header />
      <HeroSection />
      <PositioningSection />
      <SelectedWorkSection />
      <KavibeSection />
      <JourneySection />
      <ContactSection />
      <FloatingSaveContact />
      <Footer />
    </main>
  );
}
