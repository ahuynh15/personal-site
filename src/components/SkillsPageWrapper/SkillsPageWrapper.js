import { SKILLS } from '@/constants/skills';
import { Title } from '../Common/Title';
import { SkillList } from './SkillList';

const SkillsPageWrapper = () => {
  return (
    <div className="flex h-full items-center p-8">
      <div className="w-1/3">
        <Title>I have experience with...</Title>
      </div>
      <div className="w-2/3">
        <SkillList skills={SKILLS} />
      </div>
    </div>
  );
};

export default SkillsPageWrapper;
