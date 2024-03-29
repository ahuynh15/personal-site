import React from 'react';
import { useDispatch } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { setTheme } from '@/slices/ThemeSlice';
import useDarkMode from '@/hooks/useDarkMode';
import { MoonIcon, SunIcon } from '@/Icons';

function DarkModeToggle() {
  const dispatch = useDispatch();
  const mode = useDarkMode();

  const toggleDarkMode = () => {
    dispatch(setTheme(mode === 'light' ? 'dark' : 'light'));
  };

  const variants = {
    initial: { scale: 0.5, rotateZ: 90, transition: { type: 'spring' } },
    animate: { scale: 1, rotateZ: 0, transition: { type: 'spring' } },
  };

  return (
    <AnimatePresence initial={false}>
      <button onClick={() => toggleDarkMode()} type="button">
        {mode === 'dark' ? (
          <motion.div
            key="lightModeToggle"
            variants={variants}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.1, rotateZ: 180 }}
            className="fill-transparent stroke-orange-500 drop-shadow-solid-2"
          >
            <SunIcon />
          </motion.div>
        ) : (
          <motion.div
            key="darkModeToggle"
            variants={variants}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.1 }}
            className="fill-transparent stroke-black drop-shadow-solid-2"
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
