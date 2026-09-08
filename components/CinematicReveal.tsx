'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CinematicRevealProps {
  children: React.ReactNode;
  variant?: 'lines' | 'words' | 'fade-up';
  delay?: number;
  duration?: number;
  className?: string;
  as?: React.ElementType;
}

export const CinematicReveal: React.FC<CinematicRevealProps> = ({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.8,
  className = '',
  as: Component = 'div',
}) => {
  if (variant === 'words' && typeof children === 'string') {
    const words = children.split(' ');

    return (
      <Component className={`flex flex-wrap gap-x-[0.25em] ${className}`}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden py-0.5">
            <motion.span
              className="inline-block"
              initial={{ y: '100%', opacity: 0 }}
              whileInView={{ y: '0%', opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration,
                delay: delay + i * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </Component>
    );
  }

  if (variant === 'lines') {
    return (
      <Component className={`overflow-hidden ${className}`}>
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          whileInView={{ y: '0%', opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{
            duration,
            delay,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {children}
        </motion.div>
      </Component>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
