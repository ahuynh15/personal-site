import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// Note, Z-Index ranges from 0-20 for animations

const PageContainer = ({ index, prevIndex, children }) => {
  return (
    <motion.div
      className="absolute h-full w-full"
      variants={{
        enter: () => {
          console.log('index', index);
          console.log('custom', prevIndex);
          // Next page grows from circle
          if (index > prevIndex) {
            return { clipPath: 'circle(0% at 50% 50%)', zIndex: 10 };
          }
          // Next page scales down
          else {
            return {
              clipPath: 'circle(100% at 50% 50%)',
              zIndex: 10,
              scale: 2,
            };
          }
        },
        visible: { clipPath: 'circle(100% at 50% 50%)', zIndex: 10, scale: 1 },
        exit: (custom) => {
          // Current page scales up
          if (index < custom?.nextIndex) {
            return { scale: 2, zIndex: 0 };
          }
          // Current page shrinks into circle
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
      {children}
    </motion.div>
  );
};

PageContainer.propTypes = {};

export default PageContainer;
