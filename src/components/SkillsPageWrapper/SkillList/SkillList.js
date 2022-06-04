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

SkillList.propTypes = {};

export default SkillList;
