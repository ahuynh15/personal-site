import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { getFilteredExperiences } from '@/lib/experiencesUtil';
import { reverseSortDate } from '@/lib/dateUtil';
import Experience from '../Experience';

function ExperienceList({ activeFilters }) {
  const experiences = useMemo(
    () => getFilteredExperiences(activeFilters).sort(reverseSortDate),
    [activeFilters],
  );

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
      {experiences.map((experience) => (
        <motion.div
          key={experience.id}
          variants={experienceVariants}
          initial="initial"
          animate="show"
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
      ))}

      {experiences.length === 0 && (
        <motion.div
          variants={experienceVariants}
          initial="initial"
          animate="show"
          className="text-zinc-900 transition-colors duration-500 dark:text-zinc-50"
        >
          <div className="text-2xl font-semibold">No experiences found</div>
          <div>Try selecting different filters</div>
        </motion.div>
      )}
    </motion.div>
  );
}

ExperienceList.propTypes = {
  activeFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ExperienceList;
