'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';
import { Crown, BookOpen, Award, MapPin, CheckCircle2, Sparkles, Building2, Milestone } from 'lucide-react';
import { JourneyItem } from '@/lib/data/profile';
import { AnimatedIcon } from './AnimatedIcon';

interface InteractiveTimelineRailProps {
  journey: JourneyItem[];
}

const roleIcons = [
  <Crown key="crown" className="w-5 h-5" />,
  <BookOpen key="book" className="w-5 h-5" />,
  <Award key="award" className="w-5 h-5" />,
  <Building2 key="building" className="w-5 h-5" />,
];

export const InteractiveTimelineRail: React.FC<InteractiveTimelineRailProps> = ({ journey }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through this container section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 60%', 'end 85%'],
  });

  // Smooth spring physics for liquid scroll fill
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 28,
    restDelta: 0.001,
  });

  // Height percentage string for active vertical rail
  const railHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  return (
    <div ref={containerRef} className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Experience Cards (8 cols on desktop) */}
        <div className="lg:col-span-7 space-y-12">
          {journey.map((item, idx) => (
            <JourneyCard
              key={item.organization}
              item={item}
              index={idx}
              total={journey.length}
              progress={smoothProgress}
            />
          ))}
        </div>

        {/* Right Column: Interactive Scroll Progress Rail & Icons (5 cols on desktop) */}
        <div className="lg:col-span-5 hidden lg:block sticky top-32 pl-8 border-l border-ink-dark/10">
          <div className="space-y-4 mb-8">
            <div className="inline-flex items-center gap-2">
              <AnimatedIcon hoverScale={1.3} hoverRotate={12}>
                <Milestone className="w-4 h-4 text-kavibe-primary" />
              </AnimatedIcon>
              <span className="font-sans text-xs uppercase tracking-superwide text-kavibe-primary font-semibold block">
                Scroll Progression Tracker
              </span>
            </div>
            <p className="font-sans text-xs text-ink-secondary leading-relaxed">
              Scroll down to fill the progression rail and activate each milestone icon. Scroll back up to drain the sequence.
            </p>
          </div>

          {/* Vertical Rail track & nodes */}
          <div className="relative min-h-[420px] flex flex-col justify-between py-4 pl-6">
            
            {/* Background Track Rail Line */}
            <div className="absolute left-3 top-4 bottom-4 w-1 bg-ink-dark/10 rounded-full overflow-hidden">
              {/* Dynamic Active Dark Progress Line */}
              <motion.div
                style={{ height: railHeight }}
                className="w-full bg-kavibe-primary rounded-full origin-top shadow-tactile"
              />
            </div>

            {/* Icon Nodes on the Rail */}
            {journey.map((item, idx) => (
              <RailNode
                key={item.organization}
                item={item}
                index={idx}
                total={journey.length}
                progress={smoothProgress}
              />
            ))}

          </div>
        </div>

      </div>
    </div>
  );
};

/* Individual Journey Card on the Left */
const JourneyCard: React.FC<{
  item: JourneyItem;
  index: number;
  total: number;
  progress: any;
}> = ({ item, index, total, progress }) => {
  const [isActive, setIsActive] = useState(false);
  const threshold = total <= 1 ? 0.5 : index / (total - 1);

  useMotionValueEvent(progress, 'change', (latest: number) => {
    setIsActive(latest >= threshold - 0.12);
  });

  return (
    <motion.div
      animate={{
        scale: isActive ? 1.02 : 1,
        borderColor: isActive ? 'rgba(155, 44, 44, 0.4)' : 'rgba(26, 26, 26, 0.1)',
      }}
      transition={{ duration: 0.4 }}
      className={`p-8 bg-warm-surface border rounded-sm shadow-tactile transition-all duration-500 relative ${
        isActive ? 'ring-1 ring-kavibe-primary/20 bg-warm-bg/90' : 'opacity-90'
      }`}
    >
      {/* Top Header */}
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-ink-dark/10 pb-4 mb-4">
        <div>
          <span className="font-sans text-xs uppercase tracking-widest text-kavibe-primary font-semibold block mb-1">
            0{index + 1} · {item.organization}
          </span>
          <h3 className="font-serif text-2xl md:text-3xl text-ink-dark font-normal">
            {item.role}
          </h3>
        </div>
        <div className="text-right">
          <span className="font-serif text-xl italic text-kavibe-primary block">
            {item.period}
          </span>
          <div className="flex items-center gap-1 text-xs font-sans text-ink-muted justify-end mt-1">
            <MapPin className="w-3 h-3 text-kavibe-accent" />
            <span>{item.location}</span>
          </div>
        </div>
      </div>

      {/* Highlight */}
      <p className="font-sans text-sm text-ink-dark font-medium leading-relaxed mb-4">
        {item.highlight}
      </p>

      {/* Details List */}
      <ul className="space-y-2 pt-2 border-t border-ink-dark/10">
        {item.details.map((detail) => (
          <li key={detail} className="font-sans text-xs text-ink-secondary flex items-start gap-2.5">
            <AnimatedIcon hoverScale={1.3} hoverRotate={10}>
              <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 transition-colors duration-300 ${
                isActive ? 'text-kavibe-primary' : 'text-ink-muted'
              }`} />
            </AnimatedIcon>
            <span>{detail}</span>
          </li>
        ))}
      </ul>

      {/* Active Marker Indicator */}
      {isActive && (
        <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 bg-kavibe-primary/10 border border-kavibe-primary/20 rounded-full text-[10px] font-sans font-semibold text-kavibe-primary uppercase tracking-wider">
          <Sparkles className="w-3 h-3 animate-spin" />
          <span>Active Focus</span>
        </div>
      )}
    </motion.div>
  );
};

/* Interactive Rail Node Icon on the Right Track */
const RailNode: React.FC<{
  item: JourneyItem;
  index: number;
  total: number;
  progress: any;
}> = ({ item, index, total, progress }) => {
  const [isActive, setIsActive] = useState(false);
  const threshold = total <= 1 ? 0.5 : index / (total - 1);

  useMotionValueEvent(progress, 'change', (latest: number) => {
    setIsActive(latest >= threshold - 0.08);
  });

  const icon = roleIcons[index % roleIcons.length];

  return (
    <div className="relative flex items-center gap-4 group">
      
      {/* Milestone Node Circle */}
      <motion.div
        animate={{
          scale: isActive ? 1.35 : 1,
          backgroundColor: isActive ? '#9B2C2C' : '#F8F6F0',
          color: isActive ? '#F8F6F0' : '#8C857B',
          borderColor: isActive ? '#C5A059' : 'rgba(26, 26, 26, 0.2)',
          boxShadow: isActive ? '0 10px 25px -5px rgba(155, 44, 44, 0.4)' : 'none',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 20 }}
        className="w-12 h-12 rounded-full border-2 flex items-center justify-center relative z-10 cursor-pointer select-none transition-colors duration-300"
      >
        {icon}

        {/* Pulsing ring when active */}
        {isActive && (
          <span className="absolute inset-0 rounded-full bg-kavibe-primary/30 animate-ping pointer-events-none" />
        )}
      </motion.div>

      {/* Node Info Label next to icon */}
      <div className="flex-1 pl-2">
        <motion.div
          animate={{
            opacity: isActive ? 1 : 0.6,
            x: isActive ? 4 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <span className={`font-serif text-sm font-medium block transition-colors ${
            isActive ? 'text-kavibe-primary font-semibold' : 'text-ink-dark'
          }`}>
            {item.role}
          </span>
          <span className="font-sans text-[11px] uppercase tracking-wider text-ink-muted block">
            {item.organization} ({item.period})
          </span>
        </motion.div>
      </div>

    </div>
  );
};
