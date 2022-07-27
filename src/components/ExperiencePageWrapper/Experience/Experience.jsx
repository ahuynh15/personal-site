import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Container } from '@/Common';
import { getTimespan } from '@/lib/dateHelper';

function Experience({
  id,
  title,
  startDate,
  endDate,
  description,
  tags,
  onExpand,
}) {
  const renderDate = (start, end) => {
    if (start && !end) {
      const currentDate = new Date();
      return (
        <>
          {new Date(start.year, start.month).toLocaleString('default', {
            month: 'short',
            year: 'numeric',
          })}
          &nbsp;-&nbsp;Present&nbsp;&#8226;&nbsp;
          {getTimespan(start, {
            month: currentDate.getMonth(),
            year: currentDate.getFullYear(),
          })}
        </>
      );
    }

    if (start && end) {
      return (
        <>
          {new Date(start.year, start.month).toLocaleString('default', {
            month: 'short',
            year: 'numeric',
          })}
          &nbsp;-&nbsp;
          {new Date(end.year, end.month).toLocaleString('default', {
            month: 'short',
            year: 'numeric',
          })}
          &nbsp;&#8226;&nbsp;
          {getTimespan(start, end)}
        </>
      );
    }

    return <>No Date Available</>;
  };

  return (
    <motion.div
      key={id}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div
        className="text-zinc-900 dark:text-zinc-100"
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
                {renderDate(startDate, endDate)}
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
          {tags.map((tag) => (
            <Container
              key={tag}
              flat
              className="items-center text-base font-medium"
              layoutId={`experience__tag__${id}__${tag}`}
            >
              {tag}
            </Container>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

Experience.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  startDate: PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
  }).isRequired,
  endDate: PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
  }),
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  onExpand: PropTypes.func.isRequired,
};

Experience.defaultProps = {
  endDate: undefined,
  tags: undefined,
};

export default Experience;
