import PropTypes from 'prop-types';

const ChevronDownIcon = ({ size = 32, color = 'currentColor' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-chevron-down"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
};

ChevronDownIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export default ChevronDownIcon;
