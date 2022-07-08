import classNames from 'classnames';
import { motion } from 'framer-motion';
import { Subskill } from '../Subskill';

const SubskillList = ({ subskills, ...props }) => {
  const containerVariants = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className={classNames('flex flex-wrap gap-8')}
      variants={containerVariants}
      initial="initial"
      animate="show"
      {...props}
    >
      {subskills?.map((subskill) => {
        return <Subskill name={subskill} key={`${subskill}`} />;
      })}
    </motion.div>
  );
};

export default SubskillList;
