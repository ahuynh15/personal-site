import { EducationList } from './EducationList';

const EducationPageWrapper = () => {
  return (
    <div className="h-full p-8">
      <div className="text-5xl text-zinc-900 transition-colors duration-500 dark:text-zinc-100">
        I have completed...
      </div>
      <div className="mt-8">
        <EducationList />
      </div>
    </div>
  );
};

export default EducationPageWrapper;
