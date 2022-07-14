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
      <div className="pt-8 xl:w-2/3 xl:pt-0">
        <ExperienceList />
      </div>
    </div>
  );
};

export default ExperiencePageWrapper;
