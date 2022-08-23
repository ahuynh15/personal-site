import React from 'react';
import { Title } from '@/Common';
import EducationList from './EducationList';

function EducationPageWrapper() {
  return (
    <div className="flex h-full flex-col lg:flex-row">
      <div className="mx-8 my-4 mb-4 self-center lg:w-1/3">
        <Title text="I have completed..." />
      </div>
      <div className="flex h-full overflow-y-auto sm:mt-4 lg:mt-0 lg:w-2/3">
        <div className="w-full lg:my-auto">
          <EducationList />
        </div>
      </div>
    </div>
  );
}

export default EducationPageWrapper;
