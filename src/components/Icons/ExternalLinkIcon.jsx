import React from 'react';
import PropTypes from 'prop-types';

function ExternalLinkIcon({ size, strokeWidth }) {
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
      className="feather feather-external-link"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

ExternalLinkIcon.propTypes = {
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
};

ExternalLinkIcon.defaultProps = {
  size: 32,
  strokeWidth: 2,
};

export default ExternalLinkIcon;
