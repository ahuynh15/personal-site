import React from 'react';
import { Title } from '@/Common';
import ExperienceFilter from './ExperienceFilter';
import ExperienceList from './ExperienceList';
import { useCallback } from 'react';
import { useState } from 'react';

function ExperiencePageWrapper() {
  const [isScrollable, setIsScollable] = useState(false);

  const ref = useCallback((node) => {
    if (node !== null) {
      // The element is scrollable if the scrollHeight > clientHeight
      setIsScollable(node.scrollHeight > node.clientHeight);
    }
  });

  return (
    <div className="flex h-full flex-col lg:flex-row">
      <div className="my-4 ml-8 mr-12 mb-4 self-center sm:mr-8 lg:w-1/3">
        <Title text="I have experience as a..." />
        <div className="mt-4">
          <ExperienceFilter />
        </div>
      </div>
      <div
        ref={ref}
        className="relative flex h-full overflow-y-auto sm:mt-4 lg:mt-0 lg:w-2/3"
        onWheel={(e) => {
          if (isScrollable) {
            e.stopPropagation();
          }
        }}
        onScroll={(e) => {}}
      >
        <div className="w-full lg:my-auto">
          <ExperienceList />
        </div>
      </div>
    </div>
  );
}

export default ExperiencePageWrapper;
