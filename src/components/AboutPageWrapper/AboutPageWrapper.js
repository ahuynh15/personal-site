import { TextCarousel } from './TextCarousel';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { setPageAnchor } from '@/slices/SidebarSlice';

const AboutPageWrapper = () => {
  return (
    <div className="flex h-full flex-col bg-blue-600">
      <div className="mb-8 text-5xl">Hello, I&apos;m Alvin Huynh...</div>
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
  );
};

export default AboutPageWrapper;
