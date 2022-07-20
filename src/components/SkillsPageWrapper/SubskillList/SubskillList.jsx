import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Subskill from '../Subskill';

function SubskillList({ subskills, className }) {
  const containerVariants = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className={classNames('flex flex-wrap gap-8', className)}
      variants={containerVariants}
      initial="initial"
      animate="show"
    >
      {subskills?.map((subskill) => (
        <Subskill name={subskill} key={`${subskill}`} />
      ))}
    </motion.div>
  );
}

SubskillList.propTypes = {
  subskills: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

SubskillList.defaultProps = {
  className: '',
};

export default SubskillList;
