import { Title } from '../Common/Title';
import { EducationList } from './EducationList';

const EducationPageWrapper = () => {
  return (
    <div className="flex h-full flex-col items-center px-8 xl:flex-row">
      <div className="xl:w-1/3">
        <Title>I have completed....</Title>
      </div>
      <div className="relative mt-8 flex h-full overflow-y-auto xl:mt-0 xl:w-2/3">
        <div className="p-4 xl:my-auto">
          <EducationList />
        </div>
      </div>
    </div>
  );
};

export default EducationPageWrapper;
