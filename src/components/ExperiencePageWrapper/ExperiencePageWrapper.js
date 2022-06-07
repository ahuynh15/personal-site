import { ExperienceFilter } from './ExperienceFilter';
import { ExperienceList } from './ExperienceList';

const ExperiencePageWrapper = () => {
  return (
    <div>
      <div className="pb-2 text-5xl">I have worked at...</div>
      <ExperienceFilter tags={['Tag A', 'Tag B', 'Tag C']} />
      <div className="mt-8">
        <ExperienceList
          experiences={[
            {
              title: 'Position',
              startDate: new Date(2020, 7),
              endDate: new Date(2021, 8),
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              tags: ['Tag A', 'Tag B', 'Tag C'],
            },
            {
              title: 'Position',
              startDate: new Date(2020, 7),
              endDate: new Date(2021, 8),
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              tags: ['Tag A', 'Tag B', 'Tag C'],
            },
            {
              title: 'Position',
              startDate: new Date(2020, 7),
              endDate: new Date(2021, 8),
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              tags: ['Tag A', 'Tag B', 'Tag C'],
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ExperiencePageWrapper;
