import { ArrowRightIcon } from '@/Common';
import PropTypes from 'prop-types';

const Skill = ({ index, name, subskills }) => {
  return (
    <>
      <div className="flex items-center ">
        <div className="flex items-center rounded-2xl bg-zinc-200 p-4 text-zinc-900 shadow-lg transition-colors duration-500 dark:bg-zinc-800 dark:text-zinc-100">
          <div className="flex items-baseline">
            <span className="text-2xl">{index}.&nbsp;</span>
            <span className="mr-8 text-2xl">{name}.</span>
          </div>
          <span className="text-zinc-300 transition-colors duration-500 dark:text-zinc-700">
            <ArrowRightIcon />
          </span>
        </div>
        {subskills && subskills.length > 0 && (
          <div className="relative flex flex-wrap gap-8 pl-8 text-xl text-zinc-900 transition-colors duration-500  dark:text-zinc-100">
            {subskills.map((subskill, index) => {
              return <div key={index}>{subskill}</div>;
            })}
          </div>
        )}
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
