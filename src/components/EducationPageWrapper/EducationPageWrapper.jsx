import React from 'react';
import { Title } from '@/Common';
import EducationList from './EducationList';

function EducationPageWrapper() {
  return (
    <div className="flex h-full flex-col lg:flex-row">
      <div className="my-4 ml-8 mr-12 mb-4 self-center sm:mr-8 lg:w-1/3">
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
