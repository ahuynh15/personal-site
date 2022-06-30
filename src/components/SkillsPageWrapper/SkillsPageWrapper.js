import { SkillList } from './SkillList';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { setPageAnchor } from '@/slices/SidebarSlice';
import { PageContainer } from '@/Common';

const SkillsPageWrapper = () => {
  return (
    <div className="flex h-full flex-col bg-zinc-200 p-8 transition-colors duration-500 dark:bg-zinc-800">
      <div className="mb-8 text-5xl text-zinc-900 transition-colors duration-500 dark:text-zinc-100">
        I have experience with...
      </div>
      <div className="ml-16 mt-4">
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
