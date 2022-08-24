import React from 'react';
import PropTypes from 'prop-types';

function BriefcaseIcon({ size, strokeWidth }) {
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
      className="feather feather-briefcase"
    >
      <rect fill="inherit" x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path fill="none" d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

BriefcaseIcon.propTypes = {
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
};

BriefcaseIcon.defaultProps = {
  size: 32,
  strokeWidth: 2,
};

export default BriefcaseIcon;
