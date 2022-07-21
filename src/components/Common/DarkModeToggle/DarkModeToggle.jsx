import React from 'react';
import { useDispatch } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwindConfig';
import { setTheme } from '@/slices/ThemeSlice';
import useDarkMode from '@/hooks/useDarkMode';
import { MoonIcon, SunIcon } from '../Icons';

function DarkModeToggle() {
  const dispatch = useDispatch();
  const styleConfig = resolveConfig(tailwindConfig);
  const [mode] = useDarkMode();

  const toggleDarkMode = () => {
    dispatch(setTheme(mode === 'light' ? 'dark' : 'light'));
  };

  const variants = {
    initial: { scale: 0.5, rotateZ: 90, transition: { type: 'spring' } },
    animate: { scale: 1, rotateZ: 0, transition: { type: 'spring' } },
  };

  console.log(mode);

  return (
    <AnimatePresence initial={false}>
      <button onClick={() => toggleDarkMode()} type="button">
        {mode === 'dark' ? (
          <motion.div
            key="lightModeToggle"
            variants={variants}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.1 }}
            className="drop-shadow-solid-2"
          >
            <SunIcon color={styleConfig.theme.colors.orange['500']} />
          </motion.div>
        ) : (
          <motion.div
            key="darkModeToggle"
            variants={variants}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.1 }}
            className="drop-shadow-solid-2"
          >
            <MoonIcon />
          </motion.div>
        )}
      </button>
    </AnimatePresence>
  );
}

DarkModeToggle.propTypes = {};

export default DarkModeToggle;
