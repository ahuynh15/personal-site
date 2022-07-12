import { Title } from '../Common/Title';
import { ExperienceFilter } from './ExperienceFilter';
import { ExperienceList } from './ExperienceList';

const ExperiencePageWrapper = () => {
  return (
    <div className="flex h-full items-center p-8">
      <div className="w-1/3">
        <Title>I have worked at...</Title>
        <div className="mt-8">
          <ExperienceFilter tags={['Tag A', 'Tag B', 'Tag C']} />
        </div>
      </div>
      <div className="w-2/3">
        <ExperienceList />
      </div>
    </div>
  );
};

export default ExperiencePageWrapper;
