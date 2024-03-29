import React, { useState } from 'react';
import { ScrollableWrapper, Title } from '@/Common';
import ExperienceFilter from './ExperienceFilter';
import ExperienceList from './ExperienceList';

function ExperiencePageWrapper() {
  const [filters, setFilters] = useState([]);

  const onFilterClick = (tag) => {
    if (filters.includes(tag)) {
      setFilters((prevState) => prevState.filter((value) => value !== tag));
    } else {
      setFilters((prevState) => [...prevState, tag]);
    }
  };

  const onClear = () => {
    setFilters([]);
  };

  return (
    <div className="flex h-full flex-col lg:flex-row">
      <div className="my-4 ml-8 mr-12 mb-4 self-center sm:mr-8 lg:w-1/3">
        <Title text="I have experience as a..." />
        <div className="mt-4">
          <ExperienceFilter
            onClear={onClear}
            onClick={onFilterClick}
            activeFilters={filters}
          />
        </div>
      </div>
      <div className="overflow-auto sm:mt-4 lg:mt-0 lg:h-full lg:w-2/3">
        <ScrollableWrapper>
          <div className="w-full lg:my-auto">
            <ExperienceList activeFilters={filters} />
          </div>
        </ScrollableWrapper>
      </div>
    </div>
  );
}

export default ExperiencePageWrapper;
