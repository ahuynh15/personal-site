import { EducationList } from './EducationList';

const EducationPageWrapper = () => {
  return (
    <div>
      <div className="pb-2 text-5xl">I have completed...</div>
      <div className="mt-8">
        <EducationList />
      </div>
    </div>
  );
};

export default EducationPageWrapper;
