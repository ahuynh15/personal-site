import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import {
  selectIsDarkMode,
  selectIsDarkModePreferred,
} from '@/slices/ThemeSlice';
import { animateDarkMode } from '@/lib/animationVariants';
import { transitionDuration } from 'tailwindcss/defaultTheme';

const Experience = ({ title, startDate, endDate, description, tags }) => {
  const isDarkMode = useSelector((state) => selectIsDarkMode(state));
  const isDarkModePreferred = useSelector((state) =>
    selectIsDarkModePreferred(state)
  );

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
    <motion.li
      className={`list-none p-4`}
      variants={animateDarkMode(['container'])}
      initial={isDarkModePreferred ? 'dark' : 'light'}
      animate={isDarkMode ? 'dark' : 'light'}
    >
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
          {/* More Info */}
          <button
            className="text-l pt-2 font-semibold tracking-wider"
            type="button"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="ml-8 flex gap-4">
        {/* Tags */}
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
    </motion.li>
  );
};

Experience.propTypes = {
  title: PropTypes.string.isRequired,
  startDate: PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
  }).isRequired,
  endDate: PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default Experience;
