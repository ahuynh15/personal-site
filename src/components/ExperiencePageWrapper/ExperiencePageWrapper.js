import { Experience } from './Experience';

const ExperiencePageWrapper = () => {
  return (
    <div>
      <div className="mb-8 text-5xl">I have worked at...</div>
      <Experience
        title={'Position'}
        startDate={new Date(2020, 7)}
        endDate={new Date(2021, 8)}
        description={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
      />
    </div>
  );
};

export default ExperiencePageWrapper;
