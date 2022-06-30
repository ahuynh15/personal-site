import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useDarkMode from '@/hooks/useDarkMode';

const TextCarousel = ({ text, displayLimit, startingIndex = 0 }) => {
  const [index, setIndex] = useState(startingIndex % (text.length * 2));
  const [theme] = useDarkMode();
  const isDarkMode = theme === 'dark';

  // Calculate how many lines need to be displayed
  const linesToRender =
    displayLimit <= text.length ? displayLimit : text.length;

  const { ref, inView } = useInView();

  useEffect(() => {
    let interval = null;
    if (inView) {
      interval = setInterval(() => {
        setIndex((index + 1) % (text.length * 2));
      }, 5000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [index, setIndex, inView, text.length]);

  const getLines = () => {
    let lines = [];
    let currentIndex = index;

    // Generate the array of lines to render
    while (lines.length < linesToRender) {
      lines.push({
        text: text[currentIndex % text.length],
        index: currentIndex,
      });

      currentIndex = (currentIndex + 1) % (text.length * 2);
    }

    return lines;
  };

  // Calculate RGB values for the given index
  const calculateRgb = (index, darkMode) => {
    let r = 0;
    let g = 0;
    let b = 0;

    if (darkMode) {
      return [
        244 / Math.pow(2, index),
        244 / Math.pow(2, index),
        245 / Math.pow(2, index),
      ];
    } else {
      return [
        255 - 231 / Math.pow(2, index),
        255 - 231 / Math.pow(2, index),
        255 - 228 / Math.pow(2, index),
      ];
    }
  };

  return (
    <AnimatePresence initial={false}>
      <LayoutGroup id="text-carousel">
        <div className="text-carousel flex flex-col" ref={ref}>
          {getLines().map((line, index) => {
            const [r, b, g] = calculateRgb(index, isDarkMode);
            const id = `${line.text} ${line.index}`;

            return (
              <motion.div
                className="pb-8 text-5xl transition-colors duration-500"
                style={{ color: `rgb(${r},${b},${g})` }}
                key={id}
                layoutId={id}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
              >
                {line.text}
              </motion.div>
            );
          })}
        </div>
      </LayoutGroup>
    </AnimatePresence>
  );
};

TextCarousel.propTypes = {
  /**
   * Lines of text that will be displayed
   */
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * The largest amount of lines that will displayed at one time
   */
  displayLimit: PropTypes.number.isRequired,
  /**
   * Starting offset
   */
  startingIndex: PropTypes.number,
};

export default TextCarousel;
