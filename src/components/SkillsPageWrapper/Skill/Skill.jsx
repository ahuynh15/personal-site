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
        className="group w-full flex-shrink-0 xl:w-auto"
        onClick={onClick}
      >
        <div className="flex items-center">
          <span
            className={classNames(
              'text-2xl font-medium transition-colors duration-500',
              isToggled
                ? 'text-zinc-900 dark:text-zinc-100'
                : 'text-zinc-300 group-hover:text-zinc-900 dark:text-zinc-700 dark:group-hover:text-zinc-100',
              hasSubskills && 'mr-2',
            )}
          >
            {name}
          </span>
          {hasSubskills && (
            <span
              className={classNames(
                'rotate-90 text-zinc-300 transition-all duration-500 xl:rotate-0',
                isToggled
                  ? 'text-zinc-900 dark:text-zinc-100'
                  : 'text-zinc-300 group-hover:text-zinc-900 dark:text-zinc-700 dark:group-hover:text-zinc-100',
              )}
            >
              <ArrowRightIcon size={24} />
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
