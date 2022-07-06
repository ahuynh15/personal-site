import PropTypes from 'prop-types';
import { Skill } from '../Skill';

const SkillList = ({ skills }) => {
  return (
    <div className="mask-image-fade ml-16 flex items-center overflow-y-auto py-8">
      <div className="mt-auto mb-auto flex flex-col gap-8">
        {skills.map((skill, index) => {
          return (
            <div key={index}>
              <Skill
                name={skill.name}
                hasSubskills={skill?.subskills.length > 0}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

SkillList.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      subskill: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

export default SkillList;
