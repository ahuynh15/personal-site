import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import tailwindConfig from 'tailwindConfig';
import resolveConfig from 'tailwindcss/resolveConfig';
import { pagesConfig } from '@/constants/pagesConfig';
import { selectIsTransitioning, setPage } from '@/slices/PageSlice';
import useDarkMode from '@/hooks/useDarkMode';

function MobileNavigation({ currentPageName }) {
  const dispatch = useDispatch();
  const styleConfig = resolveConfig(tailwindConfig);
  const isTransitioning = useSelector((state) => selectIsTransitioning(state));
  const mode = useDarkMode();
  const isDarkMode = mode === 'dark';

  const goToPage = (index) => {
    dispatch(setPage({ index }));
  };

  const textVariants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    active: {
      opacity: 1,
      y: -3,
    },
    exit: {
      opacity: 0,
      y: 10,
    },
  };

  const iconVariants = {
    initial: {
      opacity: 0,
      scale: 1,
      y: 10,
    },
    active: {
      opacity: 1,
      scale: 1.5,
      y: -10,
    },
    inactive: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      scale: 1,
      y: 10,
    },
  };

  return (
    <div className="mx-4 mb-4 h-12 w-full rounded-t-5xl rounded-b-2xl border-b-5 border-r-5 border-t-2 border-l-2 border-zinc-900 bg-zinc-50 px-8 shadow-solid-6 transition-colors duration-500 dark:border-zinc-50 dark:bg-zinc-900">
      <div className="grid h-full grid-cols-5 items-center">
        {pagesConfig.map((page, pageIndex) => {
          const isActive = currentPageName === page.name;

          return (
            <div
              key={page.name}
              className={classNames(
                'flex items-center justify-center',
                isActive
                  ? 'text-orange-500'
                  : 'text-zinc-400 hover:text-zinc-900 dark:text-zinc-600 dark:hover:text-zinc-100',
              )}
            >
              <AnimatePresence initial={false}>
                <motion.button
                  className={classNames(
                    'flex flex-col items-center transition-colors duration-500',
                  )}
                  onClick={() => goToPage(pageIndex)}
                  disabled={isTransitioning}
                  type="button"
                  aria-label={page.name}
                  key={`mobile-navigation-${page.name}`}
                  initial="initial"
                  animate={isActive ? 'active' : 'inactive'}
                  exit="exit"
                >
                  <motion.div
                    className={classNames(
                      'drop-shadow-solid-2',
                      isActive
                        ? 'text-zinc-900 dark:text-zinc-100'
                        : 'text-zinc-400 hover:text-zinc-900 dark:text-zinc-600 dark:hover:text-zinc-100',
                    )}
                    variants={iconVariants}
                  >
                    <page.icon
                      size={24}
                      color="currentColor"
                      fill={
                        isDarkMode
                          ? styleConfig.theme.colors.zinc['900']
                          : styleConfig.theme.colors.zinc['50']
                      }
                    />
                  </motion.div>
                  {isActive && (
                    <motion.div
                      className="text-xs font-semibold"
                      variants={textVariants}
                    >
                      {page.name}
                    </motion.div>
                  )}
                </motion.button>
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

MobileNavigation.propTypes = { currentPageName: PropTypes.string.isRequired };

MobileNavigation.defaultProps = {};

export default MobileNavigation;
