import classNames from 'classnames';
import PropTypes from 'prop-types';

const Title = ({ className, children }) => {
  return (
    <span
      className={classNames(
        'text-5xl font-semibold text-zinc-900 transition-all duration-500 [text-shadow:4px_4px_rgba(212,212,216,1)] dark:text-zinc-100 dark:[text-shadow:4px_4px_rgba(0,0,0,1)]',
        className
      )}
    >
      {children}
    </span>
  );
};

Title.propTypes = { children: PropTypes.node.isRequired };

export default Title;
