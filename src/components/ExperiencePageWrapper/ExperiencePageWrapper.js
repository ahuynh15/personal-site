import { ExperienceFilter } from './ExperienceFilter';
import { ExperienceList } from './ExperienceList';

const ExperiencePageWrapper = () => {
  return (
    <div className="h-full p-8">
      <div className="pb-2 text-5xl text-zinc-900 transition-colors duration-500 dark:text-zinc-100">
        I have worked at...
      </div>
      <ExperienceFilter tags={['Tag A', 'Tag B', 'Tag C']} />
      <div className="mt-8">
        <ExperienceList />
      </div>
    </div>
  );
};

export default ExperiencePageWrapper;
