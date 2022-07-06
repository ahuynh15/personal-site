import { ArrowRightIcon, Container } from '@/Common';
import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { selectToggledSkilled, toggleSkill } from '@/slices/SkillsSlice';

const Skill = ({ name, hasSubskills = false }) => {
  const dispatch = useDispatch();
  const toggledSkill = useSelector((state) => selectToggledSkilled(state));

  // Calculated State
  const isToggled = toggledSkill === name;

  const onClick = (skill) => {
    dispatch(toggleSkill({ skill }));
  };

  return (
    <>
      <div className="flex items-center">
        <Container
          flat={isToggled}
          className="group"
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
      </div>
    </>
  );
};

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  hasSubskills: PropTypes.bool,
};

export default Skill;
