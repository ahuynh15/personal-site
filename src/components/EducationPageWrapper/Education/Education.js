import PropTypes from 'prop-types';

const Education = ({
  title,
  location,
  startDate,
  endDate,
  description,
  additionalHeaders,
}) => {
  return (
    <li className="list-none">
      <div className="flex gap-4">
        {/* Bullet Point */}
        <div className="h-4 w-4 shrink-0 grow-0 self-center rounded-full bg-gray-300"></div>
        {/* Position */}
        <div className="relative text-3xl">{title}</div>
      </div>
      <div className="flex gap-4 pb-4">
        {/* Accent */}
        <div className="w-4 shrink-0 grow-0">
          <div className="mx-auto h-1/2 w-1 bg-orange-500"></div>
        </div>
        <div>
          <div className="text-xl text-orange-500">
            {/* Location */}
            {location}&nbsp;&#8226;&nbsp;
            {/* Date */}
            {new Date(startDate.year, startDate.month).toLocaleString(
              'default',
              {
                month: 'short',
                year: 'numeric',
              }
            )}
            &nbsp;-&nbsp;
            {new Date(endDate.year, endDate.month).toLocaleString('default', {
              month: 'short',
              year: 'numeric',
            })}
            {/* Other Headers */}
            &nbsp;&#8226;&nbsp;{additionalHeaders?.join(' • ')}
          </div>
          {/* Description */}
          <div className="pt-4 text-xl">{description}</div>
        </div>
      </div>
    </li>
  );
};

Education.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  startDate: PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
  }).isRequired,
  endDate: PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  additionalHeaders: PropTypes.arrayOf(PropTypes.string),
};

export default Education;
