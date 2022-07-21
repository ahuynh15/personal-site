import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { selectFilteredExperiences } from '@/slices/ExperiencesSlice';
import Experience from '../Experience';
import ExpandedExperience from '../ExpandedExperience';

function ExperienceList() {
  const experiences = useSelector((state) => selectFilteredExperiences(state));
  const [selectedExperience, setSelectedExperience] = useState(null);

  // Minimize the selected experience
  const minimizeModal = () => {
    setSelectedExperience(null);
  };

  useEffect(() => {
    if (selectedExperience) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedExperience]);

  // TODO: EXPAND EXPERIENCE ON CLICK (Example -> https://www.framer.com/motion/)

  return (
    <>
      <div className="flex flex-col gap-4">
        <AnimatePresence initial={false}>
          {experiences.map((experience) => (
            <Experience
              key={experience.id}
              id={experience.id}
              title={experience.title}
              startDate={experience.startDate}
              endDate={experience.endDate}
              description={experience.description}
              tags={experience.tags}
              onExpand={() => {
                setSelectedExperience(experience);
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Expanded Experience */}
      <AnimatePresence>
        {selectedExperience && (
          <ExpandedExperience
            id={selectedExperience.id}
            title={selectedExperience.title}
            startDate={selectedExperience.startDate}
            endDate={selectedExperience.endDate}
            description={selectedExperience.description}
            tags={selectedExperience.tags}
            onExitClick={minimizeModal}
          />
        )}
      </AnimatePresence>
    </>
  );
}

ExperienceList.propTypes = {};

export default ExperienceList;
