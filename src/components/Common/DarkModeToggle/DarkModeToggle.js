import { selectDarkMode, setDarkMode } from '@/slices/DarkModeSlice';
import { useSelector, useDispatch } from 'react-redux';
import { MoonIcon, SunIcon } from '../Icons';
import { AnimatePresence, motion } from 'framer-motion';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwindConfig';

const DarkModeToggle = () => {
  const dispatch = useDispatch();
  const styleConfig = resolveConfig(tailwindConfig);
  const darkMode = useSelector((state) => selectDarkMode(state));

  const toggleDarkMode = () => {
    dispatch(setDarkMode(!darkMode));
  };

  const variants = {
    initial: { scale: 0.5, rotateZ: 90, transition: { type: 'spring' } },
    animate: { scale: 1, rotateZ: 0, transition: { type: 'spring' } },
  };

  return (
    <button onClick={() => toggleDarkMode()}>
      {darkMode ? (
        <motion.div
          key="lightModeToggle"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <SunIcon color={styleConfig.theme.colors['orange']['500']} />
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
  );
};

DarkModeToggle.propTypes = {};

export default DarkModeToggle;
