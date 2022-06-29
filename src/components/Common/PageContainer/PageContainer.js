import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// Note, Z-Index ranges from 0-20 for animations

const PageContainer = ({ index, prevIndex, children }) => {
  return (
    <motion.div
      className={`absolute h-full w-full`}
      variants={{
        enter: () => {
          // Page transitions in the foreground
          if (index > prevIndex) {
            return { clipPath: 'circle(0% at 50% 50%)', zIndex: 20 };
          }
          // Page scales in the background
          else {
            return {
              clipPath: 'circle(100% at 50% 50%)',
              zIndex: 0,
              scale: 2,
            };
          }
        },
        visible: { clipPath: 'circle(100% at 50% 50%)', zIndex: 10, scale: 1 },
        exit: (custom) => {
          // Pages scales up in the background
          if (index < custom?.nextIndex) {
            return { clipPath: 'circle(100% at 50% 50%)', scale: 2, zIndex: 0 };
          }
          // Page transitions out in the foreground
          else {
            return { clipPath: 'circle(0% at 50% 50%)', zIndex: 20 };
          }
        },
      }}
      transition={{ duration: 2 }}
      initial="enter"
      animate="visible"
      exit="exit"
    >
      <div className="h-full w-full">{children}</div>
    </motion.div>
  );
};

PageContainer.propTypes = {};

export default PageContainer;
