import { Title } from '../Common/Title';
import { EducationList } from './EducationList';

const EducationPageWrapper = () => {
  return (
    <div className="flex h-full flex-col items-center p-8 xl:flex-row">
      <div className="xl:w-1/3">
        <Title>I have completed....</Title>
      </div>
      <div className="mt-8 h-full overflow-y-auto border-y-2 border-black p-4 xl:mt-0 xl:w-2/3">
        <EducationList />
      </div>
    </div>
  );
};

export default EducationPageWrapper;
