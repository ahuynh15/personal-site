import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Container } from '@/Common';
import { getTimespan } from '@/lib/dateHelper';

const ExpandedExperience = ({
  id,
  title,
  startDate,
  endDate,
  description,
  tags,
  onExitClick,
}) => {
  return (
    <div>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-overlay pointer-events-auto fixed top-0 left-0 z-10 flex h-full w-full"
      ></motion.div>

      {/* Container */}
      <div className="fixed top-0 left-0 z-10 flex h-full w-full items-center justify-center text-zinc-900 dark:text-zinc-100">
        <motion.div
          className="pointer-events-auto relative z-10 w-4/5"
          layoutId={`experience__${id}`}
        >
          <Container
            className="cursor-pointer"
            flat={true}
            onClick={onExitClick}
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
      </div>
    </div>
  );
};

ExpandedExperience.propTypes = {};

export default ExpandedExperience;
