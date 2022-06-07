import PropTypes from 'prop-types';
import { Skill } from '../Skill';

const SkillList = ({ skills }) => {
  return (
    <>
      {skills.map((skill, index) => {
        return (
          <div className="mb-8" key={index}>
            <Skill
              index={index + 1}
              name={skill.name}
              subskills={skill.subskills}
            />
          </div>
        );
      })}
    </>
  );
};

SkillList.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      subskill: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

export default SkillList;
