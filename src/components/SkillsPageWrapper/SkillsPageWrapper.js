import { SKILLS } from '@/constants/skills';
import { Title } from '../Common/Title';
import { SkillList } from './SkillList';

const SkillsPageWrapper = () => {
  return (
    <div className="flex h-full p-8">
      <div className="w-1/3 self-center">
        <Title>I have experience with...</Title>
      </div>
      <div className="flex h-full w-2/3 overflow-y-auto">
        <div className="my-auto">
          <SkillList skills={SKILLS} />
        </div>
      </div>
    </div>
  );
};

export default SkillsPageWrapper;
