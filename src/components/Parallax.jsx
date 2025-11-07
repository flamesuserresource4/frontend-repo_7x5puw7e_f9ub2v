import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function ParallaxItem({ speed = 0.15, className = '', children }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (v) => v * speed * 0.2);
  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

export default ParallaxItem;
