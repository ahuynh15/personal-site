import React from 'react';
import { Title } from '@/Common';
import EducationList from './EducationList';

function EducationPageWrapper() {
  return (
    <div className="flex h-full flex-col items-center px-8 lg:flex-row">
      <div className="lg:w-1/3">
        <Title text="I have completed..." />
      </div>
      <div className="relative mt-8 flex h-full overflow-y-auto lg:mt-0 lg:w-2/3">
        <div className="p-4 lg:my-auto">
          <EducationList />
        </div>
      </div>
    </div>
  );
}

export default EducationPageWrapper;
