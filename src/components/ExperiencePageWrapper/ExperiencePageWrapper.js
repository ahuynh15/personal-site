import { ExperienceFilter } from './ExperienceFilter';
import { ExperienceList } from './ExperienceList';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { setPageAnchor } from '@/slices/SidebarSlice';

const ExperiencePageWrapper = () => {
  const dispatch = useDispatch();
  const { ref } = useInView({
    threshold: 0.1,
    onChange: (inView) => {
      dispatch(setPageAnchor({ pageAnchor: 'experience', visible: inView }));
    },
  });

  return (
    <div ref={ref}>
      <div className="pb-2 text-5xl">I have worked at...</div>
      <ExperienceFilter tags={['Tag A', 'Tag B', 'Tag C']} />
      <div className="mt-8">
        <ExperienceList />
      </div>
    </div>
  );
};

export default ExperiencePageWrapper;
