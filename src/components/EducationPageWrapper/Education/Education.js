import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { animateDarkMode } from '@/lib/animationVariants';

const Education = ({
  title,
  location,
  startDate,
  endDate,
  description,
  additionalHeaders,
  credential,
}) => {
  return (
    <motion.li className="shadow-m list-none rounded-2xl bg-zinc-300 p-4 text-zinc-900 transition-colors dark:bg-zinc-700 dark:text-zinc-100">
      <div className="flex gap-4">
        {/* Bullet Point */}
        <div className="h-4 w-4 shrink-0 grow-0 self-center rounded-full bg-gray-300"></div>
        {/* Position */}
        <div className="relative text-3xl">{title}</div>
      </div>
      <div className="flex gap-4 pb-4">
        {/* Accent */}
        <div className="w-4 shrink-0 grow-0">
          <div className="mx-auto h-1/2 w-1 bg-primary"></div>
        </div>
        <div>
          <div className="text-xl text-primary">
            {/* Location */}
            {location}&nbsp;&#8226;&nbsp;
            {/* Date */}
            {startDate.year === endDate.year &&
            startDate.month === startDate.month ? (
              <>
                {new Date(startDate.year, startDate.month).toLocaleString(
                  'default',
                  {
                    month: 'short',
                    year: 'numeric',
                  }
                )}
              </>
            ) : (
              <>
                {new Date(startDate.year, startDate.month).toLocaleString(
                  'default',
                  {
                    month: 'short',
                    year: 'numeric',
                  }
                )}
                &nbsp;-&nbsp;
                {new Date(endDate.year, endDate.month).toLocaleString(
                  'default',
                  {
                    month: 'short',
                    year: 'numeric',
                  }
                )}
              </>
            )}
            {/* Other Headers */}
            {additionalHeaders?.length > 0 && (
              <>&nbsp;&#8226;&nbsp;{additionalHeaders?.join(' • ')}</>
            )}
          </div>
          {/* Description */}
          <div className="text-l mt-2 whitespace-pre-line">{description}</div>
          {/* Links */}
          {credential && (
            <div className="mt-2">
              <a
                href={credential.href}
                target="_blank"
                rel="noreferrer"
                className="text-primary underline"
              >
                Show Credential
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.li>
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
  credential: PropTypes.shape({
    href: PropTypes.string.isRequired,
  }),
};

export default Education;
