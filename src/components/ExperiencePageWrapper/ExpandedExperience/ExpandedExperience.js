import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import {
  selectIsDarkMode,
  selectIsDarkModePreferred,
} from '@/slices/ThemeSlice';
import { animateDarkMode } from '@/lib/animationVariants';
import { XIcon } from '@/Common';
import { getTimespan } from '@/lib/util';

const ExpandedExperience = ({
  id,
  title,
  startDate,
  endDate,
  description,
  tags,
  onExitClick,
}) => {
  const isDarkMode = useSelector((state) => selectIsDarkMode(state));
  const isDarkModePreferred = useSelector((state) =>
    selectIsDarkModePreferred(state)
  );

  return (
    <div>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pointer-events-auto fixed top-0 left-0 z-10 flex h-full w-full bg-overlay"
      ></motion.div>

      {/* Container */}
      <div className="fixed top-0 left-0 z-10 flex h-full w-full items-center justify-center">
        <motion.div
          className="pointer-events-auto relative z-10 w-4/5 rounded-2xl p-4 shadow-md"
          layoutId={`experience-${id}`}
          variants={animateDarkMode(['container'])}
          initial={isDarkModePreferred ? 'dark' : 'light'}
          animate={isDarkMode ? 'dark' : 'light'}
        >
          {/* Content */}
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

          <div className="flex gap-4 pb-4">
            {/* Accent */}
            <div className="w-4 shrink-0 grow-0">
              <motion.div
                className="mx-auto h-1/2 w-1 bg-orange-500"
                layoutId={`experience-accent-${id}`}
              ></motion.div>
            </div>

            <div className="flex flex-col items-start">
              {/* Date */}
              <motion.div
                className="text-xl text-orange-500"
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
                className="text-l mt-2"
                layoutId={`experience-description-${id}`}
              >
                {description}
              </motion.div>

              {/* Less Details */}
              <button
                className="text-l mt-2 text-primary underline"
                type="button"
                onClick={onExitClick}
              >
                Less Details
              </button>
            </div>
          </div>
          <div className="ml-8 flex gap-4">
            {/* Tags */}
            {tags.map((tag) => {
              return (
                <motion.div
                  key={tag}
                  className="items-center gap-2 rounded-full border-2 border-orange-500 px-4 py-1 text-base uppercase text-orange-500"
                  layoutId={`experience-tag-${id}-${tag}`}
                >
                  {tag}
                </motion.div>
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
