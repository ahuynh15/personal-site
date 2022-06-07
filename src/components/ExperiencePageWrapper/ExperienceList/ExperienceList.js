import PropTypes from 'prop-types';
import { Experience } from '../Experience';

const ExperienceList = ({ experiences }) => {
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

ExperienceList.propTypes = {
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      startDate: PropTypes.instanceOf(Date),
      endDate: PropTypes.instanceOf(Date),
      description: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

export default ExperienceList;
