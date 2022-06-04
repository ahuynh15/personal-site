import { TextCarousel } from './TextCarousel';

const HomePageWrapper = () => {
  return (
    <div className="flex h-screen items-center">
      <div className="w-full">
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
    </div>
  );
};

export default HomePageWrapper;
