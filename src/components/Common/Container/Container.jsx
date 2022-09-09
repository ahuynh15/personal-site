/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import useMeasure from 'react-use-measure';

function Container({ flat, className, children, ...props }) {
  const [ref, { height }] = useMeasure({ offsetSize: true });

  return (
    <AnimatePresence initial={false}>
      <motion.div
        className={classNames(
          'overflow-hidden rounded-2xl border-zinc-900 bg-zinc-50',
          flat
            ? 'border-2'
            : 'border-b-[6px] border-r-[6px] border-t-2 border-l-2 shadow-solid-6',
          className,
        )}
        animate={{ height: height ? height + 7 : 'auto' }} // Add 7px to address border and margins
      >
        {/* Children */}
        <motion.div
          ref={ref}
          className="rounded-2xl pt-[6px] pl-[13px] pb-[6px] pr-[16px] text-zinc-900 dark:border-zinc-50 dark:bg-zinc-900 dark:text-zinc-100"
          {...props}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

Container.propTypes = {
  flat: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

Container.defaultProps = {
  flat: false,
  className: undefined,
  children: undefined,
};

export default Container;
