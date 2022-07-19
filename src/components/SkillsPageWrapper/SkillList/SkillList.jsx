import React from 'react';
import PropTypes from 'prop-types';
import { Skill } from '../Skill';
import { selectToggledSkilled, toggleSkill } from '@/slices/SkillsSlice';
import SubskillList from '../SubskillList';
import { getSkillByName } from '@/constants/skills';
import { useDispatch, useSelector } from 'react-redux';

const SkillList = ({ skills }) => {
  const dispatch = useDispatch();
  const toggledSkill = useSelector((state) => selectToggledSkilled(state));

  const onClick = (index, name) => {
    dispatch(toggleSkill({ index, name }));
  };

  return (
    <div className="grid w-full grid-cols-1 gap-8 p-4 xl:grid-cols-2-auto">
      {skills.map((skill, index) => {
        const isToggled = skill.name === toggledSkill.name;
        const hasSubskills = skill.subskills.length > 0;

        return (
          <React.Fragment key={index}>
            <Skill
              name={skill.name}
              hasSubskills={hasSubskills}
              isToggled={isToggled}
              onClick={() => onClick(index, skill.name)}
              className="xl:ml-8 xl:[grid-column:1]"
            />

            {/* Toggled Subskills */}
            {isToggled && hasSubskills && (
              <div className="flex items-start">
                <SubskillList
                  key={`${skill.name}-${skill.index}-subskill-list`}
                  subskills={getSkillByName(skill.name)?.subskills}
                  style={{
                    // Calculate the offset so the list is parallel to the related button
                    marginTop: skill.index * 84 || 0,
                  }}
                  className="xl:h-0 xl:[grid-column:2]"
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
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
