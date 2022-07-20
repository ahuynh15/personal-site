import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { motion } from 'framer-motion';

const Container = ({ flat = false, className, children, ...props }) => {
  return (
    <motion.div
      className={classNames(
        'box-border rounded-2xl border-zinc-900 bg-zinc-50 text-zinc-900 transition duration-500 dark:border-zinc-50 dark:bg-zinc-900 dark:text-zinc-100',
        flat
          ? 'ml-[3px] mt-[3px] border-2 pt-[6px] pl-[14px] pb-[7px] pr-[15px]'
          : 'border-b-5 border-r-5 border-t-2 border-l-2 pt-[5px] pl-[13px] pb-2 pr-4 shadow-solid-6',
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

Container.propTypes = {
  flat: PropTypes.bool,
};

export default Container;
