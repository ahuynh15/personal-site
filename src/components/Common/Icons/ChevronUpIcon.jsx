import React from 'react';
import PropTypes from 'prop-types';

function ChevronUpIcon({ size = 32, strokeWidth = 2, color = 'currentColor' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-chevron-up"
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}

ChevronUpIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  strokeWidth: PropTypes.number,
};

ChevronUpIcon.defaultProps = {
  size: 32,
  color: 'currentColor',
  strokeWidth: 2,
};

export default ChevronUpIcon;
