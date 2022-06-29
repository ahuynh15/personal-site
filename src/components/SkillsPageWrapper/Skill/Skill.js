import PropTypes from 'prop-types';

const Skill = ({ index, name, subskills }) => {
  return (
    <>
      <div className="flex items-baseline text-zinc-900 transition-colors dark:text-zinc-100">
        <span className="text-2xl">{index}.&nbsp;</span>
        <span className="relative pb-2 text-4xl before:absolute before:bottom-0 before:w-1/2 before:border-2 before:border-solid before:border-primary before:content-['']">
          {name}.
        </span>
      </div>
      <div className="mt-4 ml-4 grid w-1/2 max-w-screen-lg grid-flow-row-dense grid-cols-3 gap-4 text-xl text-zinc-900 transition-colors dark:text-zinc-100">
        {subskills.length > 0 &&
          subskills.map((subskill, index) => {
            return <div key={index}>{subskill}</div>;
          })}
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
