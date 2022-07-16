import { Title } from '../Common/Title';
import { EducationList } from './EducationList';

const EducationPageWrapper = () => {
  return (
    <div className="flex h-full flex-col items-center px-8 pt-8 xl:flex-row">
      <div className="xl:w-1/3">
        <Title>I have completed....</Title>
      </div>
      <div className="relative mt-8 h-full border-t-2 border-black xl:mt-0 xl:w-2/3">
        <div className="h-full overflow-y-auto p-4">
          <EducationList />
        </div>
      </div>
    </div>
  );
};

export default EducationPageWrapper;
