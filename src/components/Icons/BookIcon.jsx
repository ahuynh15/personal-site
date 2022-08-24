import React from 'react';
import PropTypes from 'prop-types';

function BookIcon({ size, strokeWidth }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke="inherit"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-book"
    >
      <path
        fill="inherit"
        d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
      />
      <path fill="none" d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    </svg>
  );
}

BookIcon.propTypes = {
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
};

BookIcon.defaultProps = {
  size: 32,
  strokeWidth: 2,
};

export default BookIcon;
