import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Container } from '@/Common';
import { getTimespan } from '@/lib/dateHelper';
import classNames from 'classnames';
import { ChevronDownIcon } from '@/Icons';

function Experience({
  id,
  title,
  startDate,
  endDate,
  description,
  tags,
  accomplishments,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const listVariants = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const listItemVariants = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
      },
    },
    initial: {
      opacity: 0,
      y: 30,
    },
  };

  const onSelect = () => setIsExpanded((prevState) => !prevState);

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

  // https://codesandbox.io/s/app-store-ui-using-react-and-framer-motion-ecgc2?file=/src/Card/index.tsx:1946-1958

  return (
    <div key={id}>
      {/* Experience */}
      <div className={classNames('text-zinc-900 dark:text-zinc-100')}>
        <Container className="group cursor-pointer" onClick={onSelect}>
          {/* Position */}
          <div className="relative text-xl font-semibold">{title}</div>

          {/* Content */}
          <motion.div className="flex h-full" animate={{ height: 'auto' }}>
            <div className="flex flex-col items-start">
              {/* Date */}
              <div className="text-sm text-orange-500">
                {renderDate(startDate, endDate)}
              </div>

              {/* Description */}
              <div className="mt-2 font-medium">{description}</div>

              {/* Description */}
              {isExpanded && (
                <motion.ul
                  variants={listVariants}
                  initial="initial"
                  animate="show"
                  exit="initial"
                  className="mt-2 list-inside list-disc"
                >
                  {accomplishments.map((accomplishment) => (
                    <motion.li key={accomplishment} variants={listItemVariants}>
                      {accomplishment}
                    </motion.li>
                  ))}
                </motion.ul>
              )}

              <div className="flex w-full justify-center">
                <span
                  className={classNames(
                    'transition-all duration-500',
                    isExpanded
                      ? 'rotate-180 stroke-zinc-900 dark:stroke-zinc-100'
                      : 'stroke-zinc-900 dark:stroke-zinc-100 hover-hover:stroke-zinc-300 hover-hover:group-hover:stroke-zinc-900 hover-hover:dark:stroke-zinc-700 hover-hover:dark:group-hover:stroke-zinc-100',
                  )}
                >
                  <ChevronDownIcon size={20} />
                </span>
              </div>
            </div>
          </motion.div>
        </Container>

        {/* Tags */}
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Container key={tag} flat className="items-center text-sm">
              {tag}
            </Container>
          ))}
        </div>
      </div>
    </div>
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
  accomplishments: PropTypes.arrayOf(PropTypes.string),
};

Experience.defaultProps = {
  endDate: undefined,
  tags: undefined,
  accomplishments: [],
};

export default Experience;
