import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { getTimespan } from '@/lib/util';
import { Container } from '@/Common';

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
      className="overflow-hidden"
      key={id}
      variants={{
        visible: { opacity: 2, height: 'auto' },
        hidden: { opacity: 0, height: 0 },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div
        className="p-4 text-zinc-900 dark:text-zinc-100"
        layoutId={`experience__${id}`}
      >
        <Container
          className="cursor-pointer"
          onClick={onExpand}
          layoutId={`experience__container__${id}`}
        >
          {/* Position */}
          <motion.div
            className="relative text-2xl font-semibold"
            layoutId={`experience__title__${id}`}
          >
            {title}
          </motion.div>

          <div className="flex h-full gap-4 pb-4">
            <div className="flex flex-col items-start">
              {/* Date */}
              <motion.div
                className="font-semibold"
                layoutId={`experience__date__${id}`}
              >
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
                &nbsp;&#8226;&nbsp;{getTimespan(startDate, endDate)}
              </motion.div>

              {/* Description */}
              <motion.div
                className="mt-2 font-medium"
                layoutId={`experience__description__${id}`}
              >
                {description}
              </motion.div>
            </div>
          </div>
        </Container>

        {/* Tags */}
        <div className="mt-4 flex gap-8">
          {tags.map((tag) => {
            return (
              <Container
                key={tag}
                flat={true}
                className="items-center text-base font-medium"
                layoutId={`experience__tag__${id}__${tag}`}
              >
                {tag}
              </Container>
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
