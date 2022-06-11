import { SkillList } from './SkillList';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { setPageAnchor } from '@/slices/SidebarSlice';

const SkillsPageWrapper = () => {
  const dispatch = useDispatch();
  const { ref } = useInView({
    threshold: 0.1,
    onChange: (inView) => {
      dispatch(setPageAnchor({ pageAnchor: 'skills', visible: inView }));
    },
  });

  return (
    <div ref={ref}>
      <div className="mb-8 text-5xl">I have experience with...</div>
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
