import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import useDarkMode from '@/hooks/useDarkMode';
import AnimatedBackground from '../AnimatedBackground';

// Note, Z-Index ranges from 0-20 for animations

function PageContainer({ index, prevIndex, theme, children }) {
  const [mode] = useDarkMode();
  const isDarkMode = mode === 'dark';

  return (
    <motion.div
      className="background absolute h-full w-full"
      variants={{
        enter: () => {
          // Page transitions in the foreground
          if (index > prevIndex) {
            return { clipPath: 'circle(0% at 50% 50%)', zIndex: 20 };
          }

          // Else, page scales in the background
          return {
            clipPath: 'circle(100% at 50% 50%)',
            zIndex: 0,
            scale: 2,
          };
        },
        visible: { clipPath: 'circle(100% at 50% 50%)', zIndex: 10, scale: 1 },
        exit: (custom) => {
          // Pages scales up in the background
          if (index < custom?.nextIndex) {
            return { clipPath: 'circle(100% at 50% 50%)', scale: 2, zIndex: 0 };
          }
          // Else, page transitions out in the foreground
          return { clipPath: 'circle(0% at 50% 50%)', zIndex: 20 };
        },
      }}
      transition={{ duration: 2 }}
      initial="enter"
      animate="visible"
      exit="exit"
    >
      <div
        className="mr-40 h-full w-full pr-44 pl-8 transition-colors duration-500"
        style={{
          backgroundColor: isDarkMode
            ? theme.backgroundColor.dark
            : theme.backgroundColor.light,
        }}
      >
        {children}
        <div className="absolute top-0 left-0 h-screen w-screen">
          <AnimatedBackground color="#fed7aa" />
        </div>
      </div>
    </motion.div>
  );
}

PageContainer.propTypes = {
  index: PropTypes.number.isRequired,
  prevIndex: PropTypes.number.isRequired,
  theme: PropTypes.shape({
    backgroundColor: PropTypes.shape({
      light: PropTypes.string.isRequired,
      dark: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  children: PropTypes.node,
};

PageContainer.defaultProps = {
  children: undefined,
};

export default PageContainer;
