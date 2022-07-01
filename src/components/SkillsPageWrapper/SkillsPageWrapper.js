import { SkillList } from './SkillList';

const SkillsPageWrapper = () => {
  return (
    <div className="flex h-full justify-center p-8">
      <div className="flex h-full flex-col justify-center">
        <div className="mb-8 text-5xl text-zinc-900 transition-colors duration-500 dark:text-zinc-100">
          I have experience with...
        </div>
      </div>
      <div className="ml-16 flex h-full flex-col justify-center">
        <SkillList
          skills={[
            {
              name: 'Front End Development',
              subskills: [
                'HTML',
                'CSS',
                'Javascript',
                'React.js',
                'Next.js',
                'Redux',
                'Sass',
                'Jest',
                'Cypress',
              ],
            },
            {
              name: 'UI/UX Design',
              subskills: ['Figma'],
            },
            {
              name: 'Amazon Web Services',
              subskills: [
                'Lambda',
                'API Gateway',
                'S3',
                'DynamoDB',
                'CloudFormation',
                'CloudFront',
                'Route53',
                'Rekognition',
                'Sumerian',
              ],
            },
            {
              name: 'CI/CD',
              subskills: ['Jenkins', 'GitHub Actions'],
            },
            {
              name: 'Github',
              subskills: [],
            },
            {
              name: 'Game Development',
              subskills: ['C#', 'Unity'],
            },
          ]}
        />
      </div>
    </div>
  );
};

export default SkillsPageWrapper;
