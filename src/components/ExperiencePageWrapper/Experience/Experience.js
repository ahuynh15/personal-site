import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { getTimespan } from '@/lib/util';

const Experience = ({
  id,
  title,
  startDate,
  endDate,
  description,
  tags,
  onExpand,
}) => {
  return (
    <motion.div
      className="mb-8 overflow-hidden rounded-2xl"
      key={id}
      variants={{
        visible: { opacity: 2, height: 'auto', marginBottom: '32px' },
        hidden: { opacity: 0, height: 0, marginBottom: '0px' },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div
        className="p-4 text-zinc-900 shadow-md transition-colors duration-500 dark:text-zinc-100"
        layoutId={`experience-${id}`}
      >
        <div className="flex gap-4">
          {/* Bullet Point */}
          <motion.div
            className="h-4 w-4 shrink-0 grow-0 self-center rounded-full bg-gray-300"
            layoutId={`experience-bullet-${id}`}
          ></motion.div>

          {/* Position */}
          <motion.div
            className="relative text-3xl"
            layoutId={`experience-title-${id}`}
          >
            {title}
          </motion.div>
        </div>

        <div className="flex h-full gap-4 pb-4">
          {/* Accent */}
          <div className="w-4 shrink-0 grow-0">
            <motion.div
              className="mx-auto h-1/2 w-1 bg-primary"
              layoutId={`experience-accent-${id}`}
            ></motion.div>
          </div>

          <div className="flex flex-col items-start">
            {/* Date */}
            <motion.div
              className="text-xl text-primary"
              layoutId={`experience-date-${id}`}
            >
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
            </motion.div>

            {/* Description */}
            <motion.div
              className="text-l mt-2"
              layoutId={`experience-description-${id}`}
            >
              {description}
            </motion.div>

            {/* More Info */}
            <button
              className="text-l mt-2 text-primary underline"
              type="button"
              onClick={onExpand}
            >
              More Details
            </button>
          </div>
        </div>
        <div className="ml-8 flex gap-4">
          {/* Tags */}
          {tags.map((tag) => {
            return (
              <motion.div
                key={tag}
                className="items-center gap-2 rounded-full border-2 border-primary px-4 py-1 text-base uppercase text-primary"
                layoutId={`experience-tag-${id}-${tag}`}
              >
                {tag}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
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
  onExpand: PropTypes.func.isRequired,
};

export default Experience;
