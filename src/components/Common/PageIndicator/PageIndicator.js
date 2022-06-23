import useDarkMode from '@/hooks/useDarkMode';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';

const PageIndicator = ({ pageName, pageNumber, totalPages }) => {
  const [theme] = useDarkMode();

  return (
    <div className={`flex items-center gap-4 ${theme}`}>
      <div className="relative h-7 w-16">
        <AnimatePresence>
          <motion.div
            key={`page-indicator__name-${pageNumber}`}
            className="absolute right-0 top-1/2 text-right text-xl capitalize text-zinc-900 transition-colors dark:text-white"
            data-testid="page-indicator__name"
            variants={{
              enter: {
                opacity: 0,
                y: '50%',
              },
              visible: {
                opacity: 1,
                y: '-50%',
              },
              exit: {
                opacity: 0,
                y: '-150%',
              },
            }}
            initial="enter"
            animate="visible"
            exit="exit"
          >
            {pageName}
          </motion.div>
        </AnimatePresence>
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
