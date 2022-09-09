/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

function ButtonContainer({ toggled, className, children, ...props }) {
  return (
    <div className={classNames(toggled && 'mt-[4px] ml-[4px]')}>
      <AnimatePresence initial={false}>
        <motion.div
          className={classNames(
            'rounded-2xl border-zinc-900 bg-zinc-50',
            toggled
              ? 'border-2'
              : 'border-b-[6px] border-r-[6px] border-t-2 border-l-2 shadow-solid-6',
            className,
          )}
        >
          {/* Children */}
          <motion.div
            id="hello"
            className="rounded-2xl pt-[6px] pl-[13px] pb-[6px] pr-[16px]  text-zinc-900 dark:border-zinc-50  dark:bg-zinc-900 dark:text-zinc-100"
            {...props}
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

ButtonContainer.propTypes = {
  toggled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

ButtonContainer.defaultProps = {
  toggled: false,
  className: undefined,
  children: undefined,
};

export default ButtonContainer;
