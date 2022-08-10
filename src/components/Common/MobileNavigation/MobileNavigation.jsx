import React from 'react';
import PropTypes from 'prop-types';
import { pagesConfig } from '@/constants/pagesConfig';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsTransitioning, setPage } from '@/slices/PageSlice';

function MobileNavigation({ currentPageName }) {
  const dispatch = useDispatch();
  const isTransitioning = useSelector((state) => selectIsTransitioning(state));

  const goToPage = (index) => {
    dispatch(setPage({ index }));
  };

  return (
    <div className="mx-4 mb-4 h-16 w-full rounded-t-5xl rounded-b-2xl border-b-5 border-r-5 border-t-2 border-l-2 border-zinc-900 bg-zinc-50 px-8 shadow-solid-6 transition-colors duration-500 dark:border-zinc-50 dark:bg-zinc-900">
      <div className="grid h-full grid-cols-5 items-center">
        {pagesConfig.map((page, pageIndex) => {
          const isActive = currentPageName === page.name;

          return (
            <div className="flex items-center justify-center">
              <button
                className={classNames(
                  'flex flex-col items-center transition-colors duration-500',
                  isActive
                    ? 'text-zinc-900 dark:text-zinc-100'
                    : 'text-zinc-400 dark:text-zinc-600',
                )}
                onClick={() => goToPage(pageIndex)}
                disabled={isTransitioning}
                type="button"
                aria-label={page.name}
              >
                <page.icon size={24} color="currentColor" />
                {isActive && (
                  <div className="text-xs font-semibold">{page.name}</div>
                )}
              </button>
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
