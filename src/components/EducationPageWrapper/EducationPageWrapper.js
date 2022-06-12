import { EducationList } from './EducationList';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { setPageAnchor } from '@/slices/SidebarSlice';

const EducationPageWrapper = () => {
  const dispatch = useDispatch();
  const { ref } = useInView({
    threshold: 0.1,
    onChange: (inView) => {
      dispatch(setPageAnchor({ pageAnchor: 'education', visible: inView }));
    },
  });

  return (
    <div ref={ref}>
      <div className="text-5xl">I have completed...</div>
      <div className="mt-8">
        <EducationList />
      </div>
    </div>
  );
};

export default EducationPageWrapper;
