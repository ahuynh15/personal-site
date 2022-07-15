import PropTypes from 'prop-types';

const SquareIcon = ({ size = 32, strokeWidth = 2, color = 'currentColor' }) => {
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
      className="feather feather-square"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    </svg>
  );
};

SquareIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  strokeWidth: PropTypes.number,
};

export default SquareIcon;
