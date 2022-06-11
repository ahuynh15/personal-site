import { TextCarousel } from './TextCarousel';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { setPageAnchor } from '@/slices/SidebarSlice';

const AboutPageWrapper = () => {
  const dispatch = useDispatch();
  const { ref } = useInView({
    threshold: 0.1,
    onChange: (inView) => {
      dispatch(setPageAnchor({ pageAnchor: 'about', visible: inView }));
    },
  });

  return (
    <div className="flex h-screen items-center" ref={ref}>
      <div className="w-full">
        <div className="mb-8 text-5xl" ref={ref}>
          Hello, I&apos;m Alvin Huynh...
        </div>
        <TextCarousel
          text={[
            'Software Engineer.',
            'Front End Developer.',
            'Certified Solutions Architect.',
            'Hobbyist Game Dev.',
            'Tech Enthusiast.',
            'Team Player.',
          ]}
          displayLimit={3}
          startingIndex={0}
        />
      </div>
    </div>
  );
};

export default AboutPageWrapper;
