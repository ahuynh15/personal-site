import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { DownIcon } from '@/Icons';

function ScrollIndicator() {
  const { scrollYProgress } = useViewportScroll();

  const transform = (x) => Math.max((0.1 - x) / 0.1, 0);

  const opacity = useTransform(scrollYProgress, (value) => transform(value));

  return (
    <motion.div
      className="pointer-events-none animate-bounce rounded-full"
      style={{
        opacity,
      }}
    >
      <DownIcon size={24} />
    </motion.div>
  );
}

ScrollIndicator.propTypes = {};

export default ScrollIndicator;
