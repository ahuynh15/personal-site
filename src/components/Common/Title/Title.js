import PropTypes from 'prop-types';

const Title = ({ children }) => {
  return (
    <span className="text-shadow-solid-md text-5xl font-semibold text-zinc-900 transition-all duration-500 [text-shadow:3px_3px_rgba(212,212,216,1)] dark:text-zinc-100 dark:[text-shadow:4px_4px_rgba(63,63,70,1)]">
      {children}
    </span>
  );
};

Title.propTypes = { children: PropTypes.element.isRequired };

export default Title;
