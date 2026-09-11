'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
      viewport={{ once: true, margin: '0px' }}
      transition={{
        duration: 1.1,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1.0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.4,
          delay: delay + 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
