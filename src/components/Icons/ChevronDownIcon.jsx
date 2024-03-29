import React from 'react';
import PropTypes from 'prop-types';

function ChevronDownIcon({ size, strokeWidth }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="inherit"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-chevron-down"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

ChevronDownIcon.propTypes = {
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
};

ChevronDownIcon.defaultProps = {
  size: 32,
  strokeWidth: 2,
};

export default ChevronDownIcon;
