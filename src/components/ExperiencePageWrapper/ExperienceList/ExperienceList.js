import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Experience } from '../Experience';
import { selectFilteredExperiences } from '@/slices/ExperiencesSlice';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

const ExperienceList = () => {
  const experiences = useSelector((state) => selectFilteredExperiences(state));
  const [expandedId, expanded] = useState(null);

  return (
    <>
      <LayoutGroup id="experiences">
        <div className="flex flex-col">
          <AnimatePresence initial={false}>
            {experiences.map((experience) => {
              return (
                <motion.section
                  className="mb-8 overflow-hidden rounded-2xl shadow-md"
                  key={experience.id}
                  variants={{
                    visible: { opacity: 2, height: 'auto' },
                    hidden: { opacity: 0, height: 0 },
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
                  />
                </motion.section>
              );
            })}
          </AnimatePresence>
        </div>
      </LayoutGroup>
    </>
  );
};

ExperienceList.propTypes = {};

export default ExperienceList;
