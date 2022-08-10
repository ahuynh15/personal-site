import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { Container } from '@/components/Common';
import { clearFilters, toggleFilter } from '@/slices/ExperiencesSlice';
import experiencesUtil from '@/lib/experiencesUtil';

/**
 * TODO:
 * - Limit the amount of filters and provide a way to expand for more filters
 * - Add dynamic count for filters???
 */

function ExperienceFilter() {
  const dispatch = useDispatch();
  const activeFilters = useSelector(
    (state) => state.experiences.filters.active,
  );
  const tags = [...experiencesUtil.getFilters()];
  // const [displayLimit, setDisplayLimit] = useState(5);
  const [displayLimit] = useState(5);

  const onClick = (tag) => {
    dispatch(toggleFilter({ tag }));
  };

  const onClear = () => {
    dispatch(clearFilters());
  };

  // TODO: IMPLEMENT SHOW MORE / SHOW LESS

  return (
    <div className="flex flex-wrap items-center gap-4">
      {tags.slice(0, displayLimit).map((tag) => {
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
      <button onClick={() => onClear()} type="button">
        <div className=" text-xl font-medium text-zinc-900 transition-colors duration-500 dark:text-zinc-100">
          Clear Filters
        </div>
      </button>
    </div>
  );
}

ExperienceFilter.propTypes = {};

export default ExperienceFilter;
