import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Experience } from '../Experience';
import { selectFilteredExperiences } from '@/slices/ExperiencesSlice';
import { motion, AnimatePresence } from 'framer-motion';

import { ExpandedExperience } from '../ExpandedExperience';

const ExperienceList = () => {
  const experiences = useSelector((state) => selectFilteredExperiences(state));
  const [selectedExperience, setSelectedExperience] = useState(null);

  // Minimize the selected experience
  const minimizeModal = () => {
    setSelectedExperience(null);
  };

  // TODO: EXPAND EXPERIENCE ON CLICK (Example -> https://www.framer.com/motion/)

  return (
    <>
      <div className="flex flex-col">
        <AnimatePresence initial={false}>
          {experiences.map((experience) => {
            return (
              <motion.div
                className="mb-8 overflow-hidden rounded-2xl"
                key={experience.id}
                variants={{
                  visible: { opacity: 2, height: 'auto', marginBottom: '32px' },
                  hidden: { opacity: 0, height: 0, marginBottom: '0px' },
                }}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <Experience
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
              </motion.div>
            );
          })}
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
};

ExperienceList.propTypes = {};

export default ExperienceList;
