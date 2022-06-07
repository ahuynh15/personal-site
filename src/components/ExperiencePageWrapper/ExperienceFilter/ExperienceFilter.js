import { XIcon } from '@/components/Common';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ExperienceFilter = ({ tags }) => {
  const [activeFilters, setActiveFilters] = useState([]);

  const toggleFilter = (tag) => {
    if (activeFilters.includes(tag)) {
      setActiveFilters(activeFilters.filter((filter) => filter !== tag));
    } else {
      setActiveFilters([...activeFilters, tag]);
    }
  };

  const clearFilters = () => {
    setActiveFilters([]);
  };

  return (
    <>
      <div className="flex items-center gap-4">
        {tags.map((tag, index) => {
          return (
            <button
              className={`box-border items-center gap-2 rounded-full border-2 border-orange-500 px-4 py-1 text-base uppercase ${
                activeFilters.includes(tag)
                  ? 'bg-orange-500 text-white'
                  : 'text-orange-500'
              }`}
              key={index}
              onClick={() => toggleFilter(tag)}
            >
              {tag}
            </button>
          );
        })}
        <div>
          <button className="text-gray-500" onClick={() => clearFilters()}>
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
