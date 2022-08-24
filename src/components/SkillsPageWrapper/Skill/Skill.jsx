import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Container } from '@/Common';
import { ArrowRightIcon } from '@/Icons';

function Skill({ name, hasSubskills, isToggled, onClick, className }) {
  return (
    <div className={classNames('relative flex items-start', className)}>
      {/* Skill Button */}
      <Container
        flat={isToggled}
        className="group w-full flex-shrink-0 lg:w-auto"
        onClick={onClick}
      >
        <div className="flex items-center">
          <span
            className={classNames(
              'text-lg font-semibold transition-all duration-500',
              isToggled
                ? 'text-zinc-900 dark:text-zinc-100'
                : 'text-zinc-900 dark:text-zinc-100 hover-hover:text-zinc-300 hover-hover:group-hover:text-zinc-900 hover-hover:dark:text-zinc-700 hover-hover:dark:group-hover:text-zinc-100',
              hasSubskills && 'mr-2',
            )}
          >
            {name}
          </span>
          {hasSubskills && (
            <span
              className={classNames(
                'rotate-90 transition-all duration-500 lg:rotate-0',
                isToggled
                  ? '-rotate-90 stroke-zinc-900 dark:stroke-zinc-100 lg:rotate-180'
                  : 'stroke-zinc-900  dark:stroke-zinc-100 hover-hover:stroke-zinc-300 hover-hover:group-hover:stroke-zinc-900 hover-hover:dark:stroke-zinc-700 hover-hover:dark:group-hover:stroke-zinc-100',
              )}
            >
              <ArrowRightIcon size={20} />
            </span>
          )}
        </div>
      </Container>
    </div>
  );
}

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  hasSubskills: PropTypes.bool.isRequired,
  isToggled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Skill.defaultProps = {
  className: undefined,
};

export default Skill;
