import { ArrowRightIcon, Container } from '@/Common';
import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { selectToggledSkilled, toggleSkill } from '@/slices/SkillsSlice';
import { SubskillList } from '../SubskillList';

const Skill = ({ name, subskills }) => {
  const dispatch = useDispatch();
  const toggledSkill = useSelector((state) => selectToggledSkilled(state));

  // Calculated State
  const isToggled = toggledSkill === name;
  const hasSubskills = subskills.length > 0;

  const onClick = (skill) => {
    if (hasSubskills) {
      dispatch(toggleSkill({ skill }));
    }
  };

  console.log(subskills);

  return (
    <>
      <div className="relative flex items-start">
        {/* Skill Button */}
        <Container
          flat={isToggled}
          className="group flex-shrink-0"
          onClick={() => onClick(name)}
        >
          <div className="flex items-center">
            <span
              className={classNames(
                'text-2xl font-medium transition-colors duration-500',
                isToggled
                  ? 'text-zinc-900 dark:text-zinc-100'
                  : 'text-zinc-300 group-hover:text-zinc-900 dark:text-zinc-700 dark:group-hover:text-zinc-100',
                hasSubskills && 'mr-2'
              )}
            >
              {name}
            </span>
            {hasSubskills && (
              <span
                className={classNames(
                  'text-zinc-300 transition-colors duration-500',
                  isToggled
                    ? 'text-zinc-900 dark:text-zinc-100'
                    : 'text-zinc-300 group-hover:text-zinc-900 dark:text-zinc-700 dark:group-hover:text-zinc-100'
                )}
              >
                <ArrowRightIcon size={24} />
              </span>
            )}
          </div>
        </Container>

        {/* Toggled Subskills */}
        <div className="h-0 min-w-[50%]">
          <AnimatePresence>
            {isToggled && (
              <SubskillList
                key={`${name}-subskill-list`}
                subskills={subskills}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  hasSubskills: PropTypes.bool,
};

export default Skill;
