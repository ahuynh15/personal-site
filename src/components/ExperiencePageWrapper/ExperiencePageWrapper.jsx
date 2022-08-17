import React from 'react';
import { Title } from '@/Common';
import ExperienceFilter from './ExperienceFilter';
import ExperienceList from './ExperienceList';

function ExperiencePageWrapper() {
  return (
    <div className="flex h-full flex-col items-center px-8 lg:flex-row">
      <div className="lg:w-1/3">
        <Title text="I have experience as a..." />
        <div className="mt-8">
          <ExperienceFilter />
        </div>
      </div>
      <div className="relative mt-8 flex h-full overflow-y-auto lg:mt-0 lg:w-2/3">
        <div className="p-4 lg:my-auto">
          <ExperienceList />
        </div>
      </div>
    </div>
  );
}

export default ExperiencePageWrapper;
