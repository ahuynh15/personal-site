import React from 'react';
import { ScrollableWrapper, Title } from '@/Common';
import { SKILLS } from '@/constants/skills';
import SkillList from './SkillList';

function SkillsPageWrapper() {
  return (
    <div className="flex h-full flex-col lg:flex-row">
      <div className="my-4 ml-8 mr-12 mb-4 self-center sm:mr-8 lg:w-1/3">
        <Title text="I have experience with..." />
      </div>
      <div className="overflow-auto sm:mt-4 lg:mt-0 lg:h-full lg:w-2/3">
        <ScrollableWrapper>
          <div className="w-full lg:my-auto">
            <SkillList skills={SKILLS} />
          </div>
        </ScrollableWrapper>
      </div>
    </div>
  );
}

export default SkillsPageWrapper;
