import { ArrowRightIcon } from '@/Common';
import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames';

const Skill = ({ index, name, subskills }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasSubskills = subskills && subskills.length > 0;

  const onClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="flex items-center">
        <div
          className="group flex items-center rounded-2xl bg-zinc-200 p-4 text-zinc-900 shadow-lg transition-colors duration-500 dark:bg-zinc-800 dark:text-zinc-100"
          onClick={onClick}
        >
          <div className="flex items-baseline">
            <span className="text-2xl">{index}.&nbsp;</span>
            <span className={classNames('text-2xl', hasSubskills && 'mr-8')}>
              {name}.
            </span>
          </div>
          {hasSubskills && (
            <span className="text-zinc-300 transition-colors duration-500 group-hover:text-zinc-800 dark:text-zinc-700 dark:group-hover:text-zinc-100">
              <ArrowRightIcon />
            </span>
          )}
        </div>
        <AnimatePresence>
          {isExpanded && hasSubskills && (
            <motion.div
              className="relative flex flex-wrap gap-8 pl-8 text-xl text-zinc-900 transition-colors duration-500 dark:text-zinc-100"
              key={`${name}__subskills`}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
            >
              {subskills.map((subskill, index) => {
                return <div key={index}>{subskill}</div>;
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

Skill.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  subskill: PropTypes.arrayOf(PropTypes.string),
};

export default Skill;
