import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

const TextCarousel = ({ text, displayLimit, startingIndex = 0 }) => {
  const [index, setIndex] = useState(startingIndex % (text.length * 2));
  const [isActive, setIsActive] = useState(true);

  // Calculate how many lines need to be displayed
  const linesToRender =
    displayLimit <= text.length ? displayLimit : text.length;

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setIndex((index + 1) % (text.length * 2));
      }, 5000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [index, setIndex, isActive, text.length]);

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

  return (
    <div className="text-carousel">
      <LayoutGroup>
        <AnimatePresence>
          {getLines().map((line, index) => {
            const rgb = 255 - 255 / Math.pow(2, index);
            const id = `${line.text} ${line.index}`;

            return (
              <motion.div
                className="text-5xl pb-8"
                key={id}
                layoutId={id}
                initial={{
                  opacity: 0,
                  color: `rgb(${rgb}, ${rgb}, ${rgb})`,
                  y: 48,
                }}
                animate={{
                  opacity: 1,
                  color: `rgb(${rgb}, ${rgb}, ${rgb})`,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                }}
              >
                {line.text}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </LayoutGroup>
    </div>
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
