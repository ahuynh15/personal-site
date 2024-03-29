import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getSkillByName } from '@/constants/skills';
import Skill from '../Skill';

import SubskillList from '../SubskillList';

function SkillList({ skills }) {
  const [toggledSkill, setToggledSkill] = useState();

  return (
    <div className="grid w-full grid-cols-1 gap-4 px-4 pb-24 sm:pb-4 sm:pt-4 lg:grid-cols-2-auto">
      {skills.map((skill) => {
        const isToggled = skill.name === toggledSkill;
        const hasSubskills = skill.subskills.length > 0;

        return (
          <React.Fragment key={skill.name}>
            <Skill
              name={skill.name}
              hasSubskills={hasSubskills}
              isToggled={isToggled}
              onClick={() => setToggledSkill(skill.name)}
              className="lg:ml-8 lg:[grid-column:1]"
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
                  className="lg:h-0 lg:[grid-column:2]"
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

SkillList.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      subskill: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
};

export default SkillList;
