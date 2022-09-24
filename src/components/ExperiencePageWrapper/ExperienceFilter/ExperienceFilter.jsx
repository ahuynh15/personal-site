import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AnimatePresence } from 'framer-motion';
import { ButtonContainer } from '@/components/Common';
import { getFilters } from '@/lib/experiencesUtil';
import FilterModal from './FilterModal';

function ExperienceFilter({ onClear, onClick, activeFilters }) {
  const tags = [...getFilters()];

  const [showFilters, setShowFilters] = useState(false);

  const onShow = () => setShowFilters(true);

  const onClose = () => setShowFilters(false);

  return (
    <>
      <AnimatePresence>
        {showFilters && (
          <FilterModal
            tags={tags}
            onClear={onClear}
            onClick={onClick}
            onClose={onClose}
            activeFilters={activeFilters}
          />
        )}
      </AnimatePresence>

      <div className="flex flex-wrap items-center gap-4">
        <button onClick={onShow} type="button">
          <ButtonContainer
            className={classNames(
              'font-medium text-zinc-900 transition-colors duration-500 dark:text-zinc-100',
            )}
          >
            Show Filters
          </ButtonContainer>
        </button>

        <button onClick={() => onClear()} type="button">
          <div className="font-medium text-zinc-900 transition-colors duration-500 dark:text-zinc-100">
            Reset Filters
          </div>
        </button>
      </div>
    </>
  );
}

ExperienceFilter.propTypes = {
  onClear: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  activeFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ExperienceFilter;
