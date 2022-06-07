import PropTypes from 'prop-types';

const Experience = ({ title, startDate, endDate, description, tags }) => {
  // Calculate the time between two dates in years and months
  const getTimespan = (startDate, endDate) => {
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
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
          {/* Date */}
          <div className="text-2xl text-orange-500">
            {startDate.toLocaleString('default', {
              month: 'short',
              year: 'numeric',
            })}
            &nbsp;-&nbsp;
            {endDate.toLocaleString('default', {
              month: 'short',
              year: 'numeric',
            })}
            &nbsp;&#8226;&nbsp;{getTimespan(startDate, endDate)}
          </div>
          {/* Description */}
          <div className="pt-4 text-3xl">{description}</div>
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
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default Experience;
