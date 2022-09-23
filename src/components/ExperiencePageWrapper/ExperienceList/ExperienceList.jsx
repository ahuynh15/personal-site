import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import experiencesUtil from '@/lib/experiencesUtil';
import { selectActiveFilters } from '@/slices/ExperiencesSlice';
import Experience from '../Experience';

function ExperienceList() {
  const activeFilters = useSelector((state) => selectActiveFilters(state));
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
            accomplishments={experience.accomplishments}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

ExperienceList.propTypes = {};

export default ExperienceList;
