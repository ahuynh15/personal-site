import React from 'react';
import PropTypes from 'prop-types';

function MoonIcon({ size, strokeWidth }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="inherit"
      stroke="inherit"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-moon"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

MoonIcon.propTypes = {
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
};

MoonIcon.defaultProps = {
  size: 32,
  strokeWidth: 2,
};

export default MoonIcon;
