'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedIconProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
  hoverRotate?: number;
  tapScale?: number;
}

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  children,
  className = '',
  hoverScale = 1.2,
  hoverRotate = 8,
  tapScale = 0.88,
}) => {
  return (
    <motion.div
      whileHover={{
        scale: hoverScale,
        rotate: hoverRotate,
      }}
      whileTap={{
        scale: tapScale,
        rotate: -hoverRotate * 1.5,
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 17,
      }}
      className={`inline-flex items-center justify-center cursor-pointer select-none ${className}`}
    >
      {children}
    </motion.div>
  );
};
