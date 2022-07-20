import React from 'react';
import { Title } from '@/Common';
import { SKILLS } from '@/constants/skills';
import SkillList from './SkillList';

function SkillsPageWrapper() {
  return (
    <div className="flex h-full flex-col p-8 xl:flex-row">
      <div className="self-center xl:w-1/3">
        <Title>I have experience with...</Title>
      </div>
      <div className="flex h-full overflow-y-auto pt-8 xl:w-2/3 xl:pt-0">
        <div className="w-full xl:my-auto">
          <SkillList skills={SKILLS} />
        </div>
      </div>
    </div>
  );
}

export default SkillsPageWrapper;
