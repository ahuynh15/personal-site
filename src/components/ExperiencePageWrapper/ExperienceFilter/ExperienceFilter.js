import { XIcon } from '@/components/Common';
import { clearFilters, toggleFilter } from '@/slices/ExperiencesSlice';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

/**
 * TODO:
 * - Dynamically generate list of filters that can be used
 * - Limit the amount of filters and provide a way to expand for more filters
 */

const ExperienceFilter = ({ tags }) => {
  const dispatch = useDispatch();
  const activeFilters = useSelector(
    (state) => state.experiences.filters.active
  );

  const onClick = (tag) => {
    dispatch(toggleFilter({ tag }));
  };

  const onClear = () => {
    dispatch(clearFilters());
  };

  return (
    <>
      <div className="flex items-center gap-4">
        {tags.map((tag, index) => {
          return (
            <button
              className={`box-border items-center gap-2 rounded-full border-2 border-primary px-4 py-1 text-base uppercase ${
                activeFilters.includes(tag)
                  ? 'bg-primary text-white'
                  : 'text-primary'
              }`}
              key={index}
              onClick={() => onClick(tag)}
            >
              {tag}
            </button>
          );
        })}
        <div>
          <button onClick={() => onClear()}>
            <div className="flex items-center gap-1">
              Clear
              <XIcon size={16} />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

ExperienceFilter.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ExperienceFilter;
