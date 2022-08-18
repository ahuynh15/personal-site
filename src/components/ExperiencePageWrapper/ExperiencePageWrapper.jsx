import React from 'react';
import { Title } from '@/Common';
import ExperienceFilter from './ExperienceFilter';
import ExperienceList from './ExperienceList';

function ExperiencePageWrapper() {
  return (
    <div className="flex h-full flex-col lg:flex-row">
      <div className="mx-8 my-4 mb-4 self-center lg:w-1/3">
        <Title text="I have experience as a..." />
        <div className="mt-4">
          <ExperienceFilter />
        </div>
      </div>
      <div className="relative flex h-full overflow-y-auto sm:mt-4 lg:mt-0 lg:w-2/3">
        <div className="p-4 lg:my-auto">
          <ExperienceList />
        </div>
      </div>
    </div>
  );
}

export default ExperiencePageWrapper;
