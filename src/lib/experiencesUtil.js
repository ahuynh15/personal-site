import { EXPERIENCES } from '@/constants/experiences';

// Retrieve all unique tags from list of experiences
const getFilters = () => {
  const filters = new Set();

  for (let i = 0; i < EXPERIENCES.length; i += 1) {
    for (let j = 0; j < EXPERIENCES[i].tags.length; j += 1) {
      filters.add(EXPERIENCES[i].tags[j]);
    }
  }

  return filters;
};

// Recieves an array of filters and return a list of filtered experiences
const getFilteredExperiences = (activeFilters) => {
  if (activeFilters?.length > 0) {
    return [...EXPERIENCES].filter((experience) =>
      activeFilters.every((tag) => experience.tags.includes(tag)),
    );
  }

  return [...EXPERIENCES];
};

const experiencesUtil = {
  getFilters,
  getFilteredExperiences,
};

export default experiencesUtil;
