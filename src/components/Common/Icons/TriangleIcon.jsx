import React from 'react';
import PropTypes from 'prop-types';

function TriangleIcon({ size, strokeWidth, color }) {
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
      className="feather feather-triangle"
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    </svg>
  );
}

TriangleIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  strokeWidth: PropTypes.number,
};

TriangleIcon.defaultProps = {
  size: 32,
  color: 'currentColor',
  strokeWidth: 2,
};

export default TriangleIcon;
