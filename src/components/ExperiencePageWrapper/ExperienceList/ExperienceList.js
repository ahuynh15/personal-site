import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Experience } from '../Experience';
import { selectFilteredExperiences } from '@/slices/ExperiencesSlice';

/**
 * TODO:
 * - Animate items being removed from the list when filtered
 */

const ExperienceList = () => {
  const experiences = useSelector((state) => selectFilteredExperiences(state));

  return (
    <>
      {experiences.map((experience, index) => {
        return (
          <div className="mb-8" key={index}>
            <Experience
              title={experience.title}
              startDate={experience.startDate}
              endDate={experience.endDate}
              description={experience.description}
              tags={experience.tags}
            />
          </div>
        );
      })}
    </>
  );
};

ExperienceList.propTypes = {};

export default ExperienceList;
