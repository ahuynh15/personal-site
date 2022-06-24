import { TextCarousel } from './TextCarousel';

const AboutPageWrapper = () => {
  return (
    <div className="flex h-full flex-col justify-center bg-zinc-100 p-8 transition-colors dark:bg-zinc-900">
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
