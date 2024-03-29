import React from 'react';
import PropTypes from 'prop-types';

function ArrowRightIcon({ size, strokeWidth }) {
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
      className="feather feather-arrow-right"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

ArrowRightIcon.propTypes = {
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
};

ArrowRightIcon.defaultProps = {
  size: 32,
  strokeWidth: 2,
};

export default ArrowRightIcon;
