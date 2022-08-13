import React from 'react';
import PropTypes from 'prop-types';

function BookIcon({ size, strokeWidth, color, fill }) {
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
      className="feather feather-book"
    >
      <path
        fill={fill}
        d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
      />
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    </svg>
  );
}

BookIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  strokeWidth: PropTypes.number,
  fill: PropTypes.string,
};

BookIcon.defaultProps = {
  size: 32,
  color: 'currentColor',
  strokeWidth: 2,
  fill: 'none',
};

export default BookIcon;
