import { Title } from '../Common/Title';
import { TextCarousel } from './TextCarousel';

const AboutPageWrapper = () => {
  return (
    <div className="flex h-full flex-col justify-center">
      <Title className="mb-8">Hello, I&apos;m Alvin Huynh...</Title>
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
