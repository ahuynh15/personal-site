import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useDarkMode from '@/hooks/useDarkMode';
import classNames from 'classnames';

function TextCarousel({ text, displayLimit, startingIndex }) {
  const [currentIndex, setCurrentIndex] = useState(
    startingIndex % (text.length * 2),
  );
  const [mode] = useDarkMode();
  const isDarkMode = mode === 'dark';

  // Calculate how many lines need to be displayed
  const linesToRender =
    displayLimit <= text.length ? displayLimit : text.length;

  const { ref, inView } = useInView();

  useEffect(() => {
    let interval = null;
    if (inView) {
      interval = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % (text.length * 2));
      }, 5000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [currentIndex, setCurrentIndex, inView, text.length]);

  // Generate the array of lines to render
  const getLines = (index) => {
    const lines = [];
    let i = index;

    while (lines.length < linesToRender) {
      lines.push({
        text: text[i % text.length],
        index: i,
      });

      i = (i + 1) % (text.length * 2);
    }

    return lines;
  };

  // Calculate RGB values for the given index
  const calculateRgb = (index, darkMode) => {
    if (darkMode) {
      return [244 / 2 ** index, 244 / 2 ** index, 245 / 2 ** index];
    }

    return [
      255 - 231 / 2 ** index,
      255 - 231 / 2 ** index,
      255 - 228 / 2 ** index,
    ];
  };

  return (
    <AnimatePresence initial={false}>
      <LayoutGroup id="text-carousel">
        <div className="text-carousel flex flex-col" ref={ref}>
          {getLines(currentIndex).map((line, index) => {
            const [r, b, g] = calculateRgb(index, isDarkMode);
            const id = `${line.text} ${line.index}`;

            return (
              <motion.div
                style={{
                  color: `rgb(${r},${b},${g})`,
                }}
                key={id}
                layoutId={id}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
              >
                <div
                  className={classNames(
                    'pb-8 text-5xl font-semibold duration-500',
                    index === 0 && 'text-shadow-3',
                  )}
                >
                  {line.text}
                </div>
              </motion.div>
            );
          })}
        </div>
      </LayoutGroup>
    </AnimatePresence>
  );
}

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

TextCarousel.defaultProps = {
  startingIndex: 0,
};

export default TextCarousel;
