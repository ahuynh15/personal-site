import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Title({ className, children }) {
  return (
    <span
      className={classNames(
        'text-shadow-3 p-0 text-5xl font-semibold text-zinc-900 transition-all duration-500 dark:text-zinc-100',
        className,
      )}
    >
      {children}
    </span>
  );
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Title.defaultProps = {
  className: undefined,
};

export default Title;
