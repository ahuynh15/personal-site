import PropTypes from 'prop-types';
import { Skill } from '../Skill';
import { selectToggledSkilled, toggleSkill } from '@/slices/SkillsSlice';
import { SubskillList } from '../SubskillList';
import { getSkillByName } from '@/constants/skills';
import { useDispatch, useSelector } from 'react-redux';

const SkillList = ({ skills }) => {
  const dispatch = useDispatch();
  const toggledSkill = useSelector((state) => selectToggledSkilled(state));

  const onClick = (index, name) => {
    dispatch(toggleSkill({ index, name }));
  };

  return (
    <div className="flex gap-4">
      <div className="ml-8 flex flex-shrink-0 items-center">
        <div className="mt-auto mb-auto flex flex-col gap-8">
          {skills.map((skill, index) => {
            return (
              <Skill
                name={skill.name}
                hasSubskills={skill.subskills.length > 0}
                isToggled={skill.name === toggledSkill.name}
                onClick={() => onClick(index, skill.name)}
                key={index}
              />
            );
          })}
        </div>
      </div>

      {/* Toggled Subskills */}
      <div className="flex items-start">
        {toggledSkill && (
          <SubskillList
            key={`${toggledSkill.name}-${toggledSkill.index}-subskill-list`}
            subskills={getSkillByName(toggledSkill.name)?.subskills}
            style={{
              // Calculate the offset so the list is parallel to the related button
              marginTop: toggledSkill.index * 84,
            }}
          />
        )}
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
