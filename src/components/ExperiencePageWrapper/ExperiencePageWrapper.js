import { Title } from '../Common/Title';
import { ExperienceFilter } from './ExperienceFilter';
import { ExperienceList } from './ExperienceList';

const ExperiencePageWrapper = () => {
  return (
    <div className="flex h-full flex-col items-center p-8 xl:flex-row">
      <div className="xl:w-1/3">
        <Title>I have worked at...</Title>
        <div className="mt-8">
          <ExperienceFilter tags={['Tag A', 'Tag B', 'Tag C']} />
        </div>
      </div>
      <div className="mt-8 h-full overflow-y-auto border-y-2 border-black p-4 shadow-inner-solid-y-6 xl:mt-0 xl:w-2/3">
        <ExperienceList />
      </div>
    </div>
  );
};

export default ExperiencePageWrapper;
