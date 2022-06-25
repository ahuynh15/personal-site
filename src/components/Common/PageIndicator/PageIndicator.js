import PropTypes from 'prop-types';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { nextPage, prevPage } from '@/slices/PageSlice';
import { ChevronUpIcon, ChevronDownIcon } from '@/Common';

const PageIndicator = ({
  pageName,
  pageNumber,
  totalPages,
  dragOffset = 20,
  dragDistance = 30,
}) => {
  const dispatch = useDispatch();
  const constraintsRef = useRef(null);

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

  return (
    <div className={`flex items-center gap-4`}>
      <div
        className="relative flex flex-col justify-center"
        ref={constraintsRef}
      >
        {/* Up Arrow */}
        <div className="flex flex-col items-center">
          <motion.div
            className="mb-2 text-zinc-900 transition-colors dark:text-white"
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
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={`page-indicator__name-${pageNumber}`}
                className="cursor-grab"
                data-testid="page-indicator__name"
                // Drag-related props
                drag="y"
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
                <div className="text-xl capitalize leading-5 tracking-wide text-zinc-900 transition-colors dark:text-white">
                  {pageName}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Down Arrow */}
          <motion.div
            className="mt-2 text-zinc-900 transition-colors dark:text-white"
            style={{
              opacity: downOpacity,
            }}
          >
            <ChevronDownIcon strokeWidth={1} />
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={`page-indicator__number-${pageNumber}`}
            className="text-xl text-zinc-900 transition-colors dark:text-white"
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
          className="text-xl transition-colors dark:text-white"
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
