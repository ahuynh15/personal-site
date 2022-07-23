import React from 'react';
import { Title } from '@/Common';
import TextCarousel from './TextCarousel';

function AboutPageWrapper() {
  return (
    <div className="flex h-full flex-col justify-center p-8">
      <Title text="Hello, I'm Alvin Huynh..." className="mb-8" />
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
}

export default AboutPageWrapper;
