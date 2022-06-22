import { selectIsDarkMode, setTheme } from '@/slices/ThemeSlice';
import { useSelector, useDispatch } from 'react-redux';
import { MoonIcon, SunIcon } from '../Icons';
import { AnimatePresence, motion } from 'framer-motion';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwindConfig';

const DarkModeToggle = () => {
  const dispatch = useDispatch();
  const styleConfig = resolveConfig(tailwindConfig);
  const isDarkMode = useSelector((state) => selectIsDarkMode(state));

  const toggleDarkMode = () => {
    dispatch(setTheme(isDarkMode ? 'light' : 'dark'));
  };

  const variants = {
    initial: { scale: 0.5, rotateZ: 90, transition: { type: 'spring' } },
    animate: { scale: 1, rotateZ: 0, transition: { type: 'spring' } },
  };

  return (
    <AnimatePresence initial={false}>
      <button onClick={() => toggleDarkMode()}>
        {isDarkMode ? (
          <motion.div
            key="lightModeToggle"
            variants={variants}
            initial="initial"
            animate="animate"
          >
            <SunIcon color={styleConfig.theme.colors['primary']} />
          </motion.div>
        ) : (
          <motion.div
            key="darkModeToggle"
            variants={variants}
            initial="initial"
            animate="animate"
          >
            <MoonIcon />
          </motion.div>
        )}
      </button>
    </AnimatePresence>
  );
};

DarkModeToggle.propTypes = {};

export default DarkModeToggle;
