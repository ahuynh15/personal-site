import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import experiencesUtil from '@/lib/experiencesUtil';
import Experience from '../Experience';

function ExperienceList({ activeFilters }) {
  const experiences = experiencesUtil.getFilteredExperiences(activeFilters);

  return (
    <div className="flex flex-col gap-4 px-4 pb-24 sm:pb-4 sm:pt-4">
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
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

ExperienceList.propTypes = {
  activeFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ExperienceList;
