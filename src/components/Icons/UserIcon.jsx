import React from 'react';
import PropTypes from 'prop-types';

function UserIcon({ size, strokeWidth }) {
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
      className="feather feather-user"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

UserIcon.propTypes = {
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
};

UserIcon.defaultProps = {
  size: 32,
  strokeWidth: 2,
};

export default UserIcon;
