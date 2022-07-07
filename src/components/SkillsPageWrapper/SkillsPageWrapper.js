import { SKILLS } from '@/constants/skills';
import { SkillList } from './SkillList';

const SkillsPageWrapper = () => {
  return (
    <div className="flex h-full items-center p-8">
      <div className="w-1/3">
        <span className="text-5xl font-semibold text-zinc-900 transition-colors duration-500 dark:text-zinc-100">
          I have experience with...
        </span>
      </div>
      <div className="w-2/3">
        <SkillList skills={SKILLS} />
      </div>
    </div>
  );
};

export default SkillsPageWrapper;
