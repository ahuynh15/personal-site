import React from 'react';
import PropTypes from 'prop-types';

function BriefcaseIcon({ size, strokeWidth, color, fill }) {
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
      className="feather feather-briefcase"
    >
      <rect fill={fill} x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

BriefcaseIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  strokeWidth: PropTypes.number,
  fill: PropTypes.string,
};

BriefcaseIcon.defaultProps = {
  size: 32,
  color: 'currentColor',
  strokeWidth: 2,
  fill: 'none',
};

export default BriefcaseIcon;
