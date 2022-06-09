import PropTypes from 'prop-types';

const Experience = ({
  title,
  startDate,
  endDate,
  description,
  tags,
  className,
}) => {
  // Calculate the time between two dates in years and months
  const getTimespan = (startDate, endDate) => {
    let years = endDate.year - startDate.year;
    let months = endDate.month - startDate.month;
    let timespan = '';

    if (years > 0) {
      timespan += `${years} ${years > 1 ? 'years' : 'year'}`;
    }

    if (months > 0) {
      timespan += `${years > 0 ? ' ' : ''}${months} ${
        months > 1 ? 'months' : 'month'
      }`;
    }

    return timespan;
  };

  return (
    <li className={`list-none ${className}`}>
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
          {/* Date */}
          <div className="text-xl text-orange-500">
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
            &nbsp;&#8226;&nbsp;{getTimespan(startDate, endDate)}
          </div>
          {/* Description */}
          <div className="pt-4 text-xl">{description}</div>
        </div>
      </div>
      <div className="ml-8 flex gap-4">
        {tags.map((tag, index) => {
          return (
            <div
              key={index}
              className="items-center gap-2 rounded-full border-2 border-orange-500 px-4 py-1 text-base uppercase text-orange-500"
            >
              <div>{tag}</div>
            </div>
          );
        })}
      </div>
    </li>
  );
};

Experience.propTypes = {
  title: PropTypes.string.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default Experience;
