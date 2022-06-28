import PropTypes from 'prop-types';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { nextPage, prevPage, setPage } from '@/slices/PageSlice';
import { ChevronUpIcon, ChevronDownIcon } from '@/Common';
import { pages } from '@/constants/pages';
import classNames from 'classnames';

const PageIndicator = ({
  pageName,
  pageNumber,
  totalPages,
  dragOffset = 20,
  dragDistance = 30,
}) => {
  const dispatch = useDispatch();
  const constraintsRef = useRef(null);
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

  const onTap = () => {
    setIsExpanded(!isExpanded);
  };

  const onPageClick = (isActive, index) => {
    if (isActive) {
      setIsExpanded(!isExpanded);
    } else {
      goToPage(index);
    }
  };

  const goToPage = (index) => {
    dispatch(setPage({ index }));
  };

  const getOffsetY = (pageNumber, totalPages, height) => {
    const isEven = totalPages % 2 === 0;
    const midpoint = Math.round(totalPages / 2);
    const pagesFromMidpoint = midpoint - pageNumber;
    console.log(pagesFromMidpoint);

    if (isEven) {
      return height * 1;
    } else {
      return height * pagesFromMidpoint;
    }
  };

  const renderPageLinks = (pages, currentPageNumber) => (
    // [36*-2] [36*-1] [36*0] [36*1] [36*2]
    // [36*-1.5] [36*-0.5] [36*0.5] [36*1.5]
    <motion.div
      className="flex flex-col items-end gap-4"
      initial={{
        y: getOffsetY(currentPageNumber, pages.length, 36),
      }}
      animate={{
        y: getOffsetY(currentPageNumber, pages.length, 36),
      }}
    >
      {pages.map((page, index) => {
        const pageNumber = index + 1;
        const isActive = currentPageNumber === pageNumber;

        return (
          <motion.div
            className={classNames(
              'cursor-pointer text-xl capitalize leading-5 tracking-wide transition-colors',
              isActive
                ? 'text-zinc-900 dark:text-zinc-100'
                : 'text-zinc-600 dark:text-zinc-400'
            )}
            key={`page-indicator__name--${pageNumber}`}
            onClick={() => onPageClick(isActive, index)}
            initial={{
              opacity: isActive ? 1 : 0,
            }}
            animate={{
              opacity: 1,
            }}
          >
            {page.name}
          </motion.div>
        );
      })}
    </motion.div>
  );

  return (
    <div className={`flex items-center gap-4`}>
      {isExpanded ? (
        <>{renderPageLinks(pages, pageNumber)}</>
      ) : (
        <div
          className="relative flex flex-col justify-center"
          ref={constraintsRef}
        >
          {/* Up Arrow */}
          <div className="flex flex-col items-center">
            <motion.div
              className="mb-2 text-zinc-900 transition-colors dark:text-zinc-100"
              style={{
                opacity: upOpacity,
              }}
            >
              <ChevronUpIcon strokeWidth={1} />
            </motion.div>

            {/* Draggable Label */}
            <div
              style={{
                height: `${dragDistance * 2}px`,
              }}
              className="flex flex-col justify-center"
            >
              {/* Active Page */}
              <AnimatePresence exitBeforeEnter initial={false}>
                <motion.div
                  key={`page-indicator__name--${pageNumber}`}
                  className="cursor-grab"
                  data-testid="page-indicator__name"
                  // Disable drag feature if expanded
                  drag={isExpanded ? false : 'y'}
                  dragConstraints={{
                    top: pageNumber === 1 ? 0 : -dragDistance,
                    bottom: pageNumber === totalPages ? 0 : dragDistance,
                  }}
                  dragSnapToOrigin={true}
                  dragElastic={{
                    top: 0,
                    bottom: 0,
                  }}
                  dragMomentum={false}
                  onDragEnd={onDragEnd}
                  style={{
                    y: y,
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
                  initial="enter"
                  animate="visible"
                  exit="exit"
                >
                  <motion.div
                    className="text-xl capitalize leading-5 tracking-wide text-zinc-900 transition-colors dark:text-zinc-100"
                    onTap={onTap}
                  >
                    {pageName}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Down Arrow */}
            <motion.div
              className="mt-2 text-zinc-900 transition-colors dark:text-zinc-100"
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
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={`page-indicator__number-${pageNumber}`}
            className="text-xl text-zinc-900 transition-colors dark:text-zinc-100"
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
            {pageNumber}
          </motion.div>
        </AnimatePresence>
        <div className=" my-2 h-[2px] w-4 rounded bg-zinc-900 transition-colors dark:bg-white"></div>
        <div
          className="text-xl transition-colors dark:text-zinc-100"
          data-testid="page-indicator__total"
        >
          {totalPages}
        </div>
      </div>
    </div>
  );
};

PageIndicator.propTypes = {
  pageName: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default PageIndicator;
