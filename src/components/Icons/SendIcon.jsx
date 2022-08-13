import React from 'react';
import PropTypes from 'prop-types';

function SendIcon({ size, strokeWidth, color, fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-send"
    >
      <polygon fill={fill} points="22 2 15 22 11 13 2 9 22 2" />{' '}
      <line x1="22" y1="2" x2="11" y2="13" />
    </svg>
  );
}

SendIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  strokeWidth: PropTypes.number,
  fill: PropTypes.string,
};

SendIcon.defaultProps = {
  size: 32,
  color: 'currentColor',
  strokeWidth: 2,
  fill: 'none',
};

export default SendIcon;
