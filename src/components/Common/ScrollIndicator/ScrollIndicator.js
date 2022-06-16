import { DownIcon } from '../Icons';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

const ScrollIndicator = () => {
  const { scrollYProgress } = useViewportScroll();

  const transform = (x) => {
    return Math.max((0.1 - x) / 0.1, 0);
  };

  const opacity = useTransform(scrollYProgress, (value) => transform(value));

  return (
    <motion.div
      className="pointer-events-none animate-bounce rounded-full"
      style={{
        opacity: opacity,
      }}
    >
      <DownIcon size={'24'} />
    </motion.div>
  );
};

ScrollIndicator.propTypes = {};

export default ScrollIndicator;
