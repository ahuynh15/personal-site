import { TextCarousel } from "./TextCarousel";

const HomePageWrapper = () => {
  return (
    <div className="flex items-center h-screen">
      <div className="w-full">
        <div className="text-5xl pb-8">Hello, I&apos;m Alvin Huynh...</div>
        <TextCarousel
          text={[
            "Software Engineer.",
            "Front End Developer.",
            "Certified Solutions Architect.",
            "Hobbyist Game Dev.",
            "Tech Enthusiast.",
            "Team Player.",
          ]}
          displayLimit={3}
          startingIndex={0}
        />
      </div>
    </div>
  );
};

export default HomePageWrapper;
