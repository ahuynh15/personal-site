import { ArrowRightIcon, Container } from '@/Common';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Skill = ({ name, hasSubskills, isToggled, onClick }) => {
  return (
    <div className="relative flex items-start">
      {/* Skill Button */}
      <Container
        flat={isToggled}
        className="group flex-shrink-0"
        onClick={onClick}
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
  );
};

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  hasSubskills: PropTypes.bool.isRequired,
  isToggled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Skill;
