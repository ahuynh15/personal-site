import { Title } from '../Common/Title';
import { ExperienceFilter } from './ExperienceFilter';
import { ExperienceList } from './ExperienceList';

const ExperiencePageWrapper = () => {
  return (
    <div className="flex h-full flex-col items-center px-8 pt-8 xl:flex-row">
      <div className="xl:w-1/3">
        <Title>I have worked at...</Title>
        <div className="mt-8">
          <ExperienceFilter tags={['Tag A', 'Tag B', 'Tag C']} />
        </div>
      </div>
      <div className="relative mt-8 h-full border-t-2 border-black xl:mt-0 xl:w-2/3">
        <div className="h-full overflow-y-auto p-4">
          <ExperienceList />
        </div>
      </div>
    </div>
  );
};

export default ExperiencePageWrapper;
