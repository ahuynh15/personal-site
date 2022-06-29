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
    <div className="h-full bg-zinc-200 p-8 transition-colors dark:bg-zinc-800">
      <div className="text-5xl text-zinc-900 transition-colors dark:text-zinc-100">
        I have completed...
      </div>
      <div className="mt-8">
        <EducationList />
      </div>
    </div>
  );
};

export default EducationPageWrapper;
