import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import experiencesUtil from '@/lib/experiencesUtil';
import Experience from '../Experience';

function ExperienceList({ activeFilters }) {
  const experiences = experiencesUtil.getFilteredExperiences(activeFilters);

  const experienceVariants = {
    initial: {
      opacity: 0,
      x: -10,
    },
    show: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.div className="flex flex-col gap-4 px-4 pb-24 sm:pb-4 sm:pt-4">
      <AnimatePresence
        initial={false}
        mode={experiences.length === 0 ? 'wait' : 'sync'}
      >
        {experiences.length > 0 ? (
          experiences.map((experience) => (
            <motion.div
              key={experience.id}
              variants={experienceVariants}
              initial="initial"
              animate="show"
              exit="initial"
            >
              <Experience
                id={experience.id}
                title={experience.title}
                startDate={experience.startDate}
                endDate={experience.endDate}
                description={experience.description}
                tags={experience.tags}
                accomplishments={experience.accomplishments}
              />
            </motion.div>
          ))
        ) : (
          <motion.div
            variants={experienceVariants}
            initial="initial"
            animate="show"
            className="text-white"
          >
            <div className="text-2xl font-semibold">No experiences found</div>
            <div>Try selecting different filters</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

ExperienceList.propTypes = {
  activeFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ExperienceList;
