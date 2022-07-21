import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Container } from '@/components/Common';
import { clearFilters, toggleFilter } from '@/slices/ExperiencesSlice';

/**
 * TODO:
 * - Dynamically generate list of filters that can be used
 * - Limit the amount of filters and provide a way to expand for more filters
 */

function ExperienceFilter({ tags }) {
  const dispatch = useDispatch();
  const activeFilters = useSelector(
    (state) => state.experiences.filters.active,
  );

  const onClick = (tag) => {
    dispatch(toggleFilter({ tag }));
  };

  const onClear = () => {
    dispatch(clearFilters());
  };

  return (
    <div className="flex items-center gap-4">
      {tags.map((tag) => {
        const isActive = activeFilters.includes(tag);

        return (
          <button key={tag} onClick={() => onClick(tag)} type="button">
            <Container
              className={classNames(
                'text-xl font-medium text-zinc-900 transition-colors duration-500 dark:text-zinc-100',
                isActive && 'bg-orange-500 text-zinc-100 dark:bg-orange-500',
              )}
              flat={isActive}
            >
              {tag}
            </Container>
          </button>
        );
      })}
      <div>
        <button onClick={() => onClear()} type="button">
          <div className=" text-xl font-medium text-zinc-900 transition-colors duration-500 dark:text-zinc-100">
            Clear Filters
          </div>
        </button>
      </div>
    </div>
  );
}

ExperienceFilter.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ExperienceFilter;
