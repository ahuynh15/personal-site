import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Title({ text, className }) {
  return (
    <span
      className={classNames(
        'text-shadow-3 p-0 text-4xl font-semibold text-zinc-900 transition-all duration-500 dark:text-zinc-100 sm:text-5xl',
        className,
      )}
    >
      {text}
    </span>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Title.defaultProps = {
  className: undefined,
};

export default Title;
