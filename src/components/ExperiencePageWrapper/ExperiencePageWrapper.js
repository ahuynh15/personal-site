import { ExperienceFilter } from './ExperienceFilter';
import { ExperienceList } from './ExperienceList';

const ExperiencePageWrapper = () => {
  return (
    <div>
      <div className="pb-2 text-5xl">I have worked at...</div>
      <ExperienceFilter tags={['Tag A', 'Tag B', 'Tag C']} />
      <div className="mt-8">
        <ExperienceList />
      </div>
    </div>
  );
};

export default ExperiencePageWrapper;
