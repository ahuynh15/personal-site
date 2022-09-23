import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ButtonContainer } from '@/components/Common';
import experiencesUtil from '@/lib/experiencesUtil';

/**
 * TODO:
 * - Limit the amount of filters and provide a way to expand for more filters
 * - Add dynamic count for filters???
 */

function ExperienceFilter({ onClear, onClick, activeFilters }) {
  const tags = [...experiencesUtil.getFilters()];
  // const [displayLimit, setDisplayLimit] = useState(5);
  const [displayLimit] = useState(5);

  return (
    <div className="flex flex-wrap items-center gap-4">
      {tags.slice(0, displayLimit).map((tag) => {
        const isActive = activeFilters.includes(tag);

        return (
          <button key={tag} onClick={() => onClick(tag)} type="button">
            <ButtonContainer
              className={classNames(
                'font-medium text-zinc-900 transition-colors duration-500 dark:text-zinc-100',
                isActive && 'bg-orange-500 text-zinc-100 dark:bg-orange-500',
              )}
              toggled={isActive}
            >
              {tag}
            </ButtonContainer>
          </button>
        );
      })}
      <button onClick={() => onClear()} type="button">
        <div className="font-medium text-zinc-900 transition-colors duration-500 dark:text-zinc-100">
          Clear Filters
        </div>
      </button>
    </div>
  );
}

ExperienceFilter.propTypes = {
  onClear: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  activeFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ExperienceFilter;
