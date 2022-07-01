import { TextCarousel } from './TextCarousel';

const AboutPageWrapper = () => {
  return (
    <div className="flex h-full flex-col justify-center">
      <div className="mb-8 text-5xl text-zinc-900 transition-colors duration-500 dark:text-zinc-100">
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
  );
};

export default AboutPageWrapper;
