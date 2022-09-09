import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import {
  nextPage,
  prevPage,
  selectIsTransitioning,
  setPage,
} from '@/slices/PageSlice';
import pagesConfig from '@/constants/pagesConfig';
import { ChevronUpIcon, ChevronDownIcon } from '@/Icons';

function PageIndicator({
  currentPageName,
  currentPageNumber,
  dragOffset,
  dragDistance,
}) {
  const dispatch = useDispatch();
  const isTransitioning = useSelector((state) => selectIsTransitioning(state));
  const [isExpanded, setIsExpanded] = useState(false);

  // Use motion values to animate the component while being dragged
  const y = useMotionValue(0);
  const upOpacity = useTransform(y, [-dragDistance, -dragOffset], [1, 0]);
  const downOpacity = useTransform(y, [dragOffset, dragDistance], [0, 1]);

  const onDragEnd = (event, info) => {
    if (info.offset.y > dragOffset) {
      dispatch(nextPage());
    }
    if (info.offset.y < -1 * dragOffset) {
      dispatch(prevPage());
    }
  };

  const onClick = () => {
    setIsExpanded(!isExpanded);
  };

  const goToPage = (index) => {
    dispatch(setPage({ index }));
  };

  const onPageClick = (isActive, index) => {
    if (isActive) {
      setIsExpanded(!isExpanded);
    } else {
      goToPage(index);
    }
  };

  const getOffsetY = (pageNumber, totalPages, height) => {
    const isEven = totalPages % 2 === 0;
    const midpoint = Math.round(totalPages / 2);
    const pagesFromMidpoint = midpoint - pageNumber;

    return isEven ? height * 1 : height * pagesFromMidpoint;
  };

  const renderPageLinks = (pageNumber) => (
    <motion.div
      className="flex flex-col items-end gap-4"
      initial={{
        y: getOffsetY(pageNumber, pagesConfig.length, 36),
      }}
      animate={{
        y: getOffsetY(pageNumber, pagesConfig.length, 36),
      }}
    >
      {pagesConfig.map((page, index) => {
        const isActive = pageNumber === index + 1;

        return (
          <motion.button
            className={classNames(
              'cursor-pointer text-xl font-semibold capitalize leading-5 tracking-wide transition-all duration-500',
              isActive
                ? 'text-shadow-2 text-zinc-900 dark:text-zinc-100'
                : 'hover:text-shadow-2 text-zinc-400 hover:text-zinc-900 dark:text-zinc-600 dark:hover:text-zinc-100',
            )}
            key={`page-indicator__name--${page.name}`}
            onClick={() => onPageClick(isActive, index)}
            disabled={isTransitioning}
            initial={{
              opacity: isActive ? 1 : 0,
            }}
            animate={{
              opacity: 1,
            }}
            whileHover={{ scale: isActive ? 1.0 : 1.1 }}
          >
            {page.name}
          </motion.button>
        );
      })}
    </motion.div>
  );

  return (
    <div className="flex items-center gap-4">
      {isExpanded ? (
        <>{renderPageLinks(currentPageNumber)}</>
      ) : (
        <div className="relative flex flex-col justify-center">
          {/* Up Arrow */}
          <div className="flex flex-col items-center">
            <motion.div
              className="mb-2 stroke-zinc-900 transition-all duration-500 dark:stroke-zinc-100"
              style={{
                opacity: upOpacity,
              }}
            >
              <ChevronUpIcon strokeWidth={1} />
            </motion.div>

            {/**
             * Rendering a static component when the page is transitioning.
             *
             * There is a bug in Framer Motion where drag constraints are lost
             * on rerender (https://github.com/framer/motion/issues/1454).
             * The workaround in the comments suggests updating the key.
             */}
            <div
              style={{
                height: `${dragDistance * 2}px`,
              }}
              className="flex flex-col justify-center"
            >
              {/* Active Page */}
              <AnimatePresence
                mode="wait"
                initial={false}
                key={`page-indicator__presence${isTransitioning && '--static'}`}
              >
                <motion.div
                  key={`page-indicator__name--${currentPageNumber}${
                    isTransitioning && '--static'
                  }`}
                  className={classNames(
                    isTransitioning ? 'cursor-auto' : 'cursor-grab',
                  )}
                  data-testid="page-indicator__name"
                  // Disable drag feature if the page is changing
                  drag={isTransitioning ? false : 'y'}
                  dragConstraints={{
                    top: currentPageNumber === 1 ? 0 : -dragDistance,
                    bottom:
                      currentPageNumber === pagesConfig.length
                        ? 0
                        : dragDistance,
                  }}
                  dragSnapToOrigin
                  dragElastic={{
                    top: 0,
                    bottom: 0,
                  }}
                  dragMomentum={false}
                  onDragEnd={onDragEnd}
                  style={{
                    y,
                  }}
                  // Animations
                  variants={{
                    enter: {
                      opacity: 0,
                    },
                    visible: {
                      opacity: 1,
                    },
                    exit: {
                      opacity: 0,
                    },
                  }}
                  whileHover={{ scale: isTransitioning ? 1 : 1.1 }}
                  initial="enter"
                  animate="visible"
                  exit="exit"
                >
                  <button
                    className={classNames(
                      'select-none text-xl font-semibold capitalize leading-5 tracking-wide transition-all duration-500',
                      isTransitioning
                        ? 'text-zinc-300 dark:text-zinc-700'
                        : 'text-shadow-2 text-zinc-900 dark:text-zinc-100',
                    )}
                    type="button"
                    onClick={onClick}
                  >
                    {currentPageName}
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Down Arrow */}
            <motion.div
              className="mt-2 stroke-zinc-900 transition-all duration-500 dark:stroke-zinc-100"
              style={{
                opacity: downOpacity,
              }}
            >
              <ChevronDownIcon strokeWidth={1} />
            </motion.div>
          </div>
        </div>
      )}

      {/* Page Counter */}
      <div className="flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`page-indicator__number-${currentPageNumber}`}
            className="text-shadow-2 text-xl font-semibold text-zinc-900 transition-all duration-500 dark:text-zinc-100"
            data-testid="page-indicator__number"
            variants={{
              enter: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
              },
              exit: {
                opacity: 0,
              },
            }}
            initial="enter"
            animate="visible"
            exit="exit"
          >
            {currentPageNumber}
          </motion.div>
        </AnimatePresence>
        <div className="my-2 h-[3px] w-4 rounded bg-zinc-900 shadow-solid-2 transition-all duration-500 dark:bg-white" />
        <div
          className="text-shadow-2 text-xl font-semibold transition-all duration-500 dark:text-zinc-100"
          data-testid="page-indicator__total"
        >
          {pagesConfig.length}
        </div>
      </div>
    </div>
  );
}

PageIndicator.propTypes = {
  currentPageName: PropTypes.string.isRequired,
  currentPageNumber: PropTypes.number.isRequired,
  dragOffset: PropTypes.number,
  dragDistance: PropTypes.number,
};

PageIndicator.defaultProps = {
  dragOffset: 20,
  dragDistance: 30,
};

export default PageIndicator;
