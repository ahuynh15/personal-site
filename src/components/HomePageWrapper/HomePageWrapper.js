import { TextCarousel } from "@/Common";

const HomePageWrapper = () => {
  return (
    <div>
      <div className="text-5xl pb-8">Hello, I'm Alvin Huynh.</div>
      <TextCarousel
        text={[
          "Software Engineer.",
          "Front End Developer.",
          "Associate Solutions Architect.",
          "Hobbyist Game Dev.",
        ]}
        displayLimit={3}
        startingIndex={0}
      />
    </div>
  );
};

export default HomePageWrapper;
