import classNames from 'classnames';
import PropTypes from 'prop-types';

const Title = ({ className, children }) => {
  return (
    <span
      className={classNames(
        'text-shadow-4 p-0 text-5xl font-semibold text-zinc-900 transition-all duration-500 dark:text-zinc-100',
        className
      )}
    >
      {children}
    </span>
  );
};

Title.propTypes = { children: PropTypes.node.isRequired };

export default Title;
