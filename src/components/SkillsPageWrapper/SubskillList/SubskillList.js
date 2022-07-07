import { AnimatePresence, motion } from 'framer-motion';
import { Subskill } from '../Subskill';

const SubskillList = ({ subskills }) => {
  const containerVariants = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // TODO: Stop overlapping between longer and shorter button subskills

  return (
    <div className="ml-16 flex">
      <motion.div
        className="mt-auto mb-auto flex flex-wrap gap-8"
        variants={containerVariants}
        initial="hide"
        animate="show"
      >
        {subskills.map((subskill) => {
          return <Subskill name={subskill} key={`${subskill}`} />;
        })}
      </motion.div>
    </div>
  );
};

export default SubskillList;
