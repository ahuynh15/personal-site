import { Title } from '../Common/Title';
import { EducationList } from './EducationList';

const EducationPageWrapper = () => {
  return (
    <div className="flex h-full items-center p-8">
      <div className="w-1/3">
        <Title>I have completed....</Title>
      </div>
      <div className="w-2/3">
        <EducationList />
      </div>
    </div>
  );
};

export default EducationPageWrapper;
