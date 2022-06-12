import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, LayoutGroup } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';
import { selectDarkMode } from '@/slices/DarkModeSlice';

const TextCarousel = ({ text, displayLimit, startingIndex = 0 }) => {
  const darkMode = useSelector((state) => selectDarkMode(state));
  const [index, setIndex] = useState(startingIndex % (text.length * 2));

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

  const calculateRgb = (index, darkMode) => {
    if (darkMode) {
      return 255 / Math.pow(2, index);
    } else {
      return 255 - 255 / Math.pow(2, index);
    }
  };

  return (
    <LayoutGroup id="text-carousel">
      <div className="text-carousel flex flex-col" ref={ref}>
        {getLines().map((line, index) => {
          const rgb = calculateRgb(index, darkMode);
          const id = `${line.text} ${line.index}`;

          return (
            <motion.div
              className="pb-8 text-5xl"
              key={id}
              layoutId={id}
              style={{
                originX: 0,
              }}
              initial={{
                opacity: 0,
                color: `rgb(${rgb}, ${rgb}, ${rgb})`,
              }}
              animate={{
                opacity: 1,
                color: `rgb(${rgb}, ${rgb}, ${rgb})`,
              }}
            >
              {line.text}
            </motion.div>
          );
        })}
      </div>
    </LayoutGroup>
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
