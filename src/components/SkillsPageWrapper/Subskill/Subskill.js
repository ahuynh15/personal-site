import { Container } from '@/Common';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { motion } from 'framer-motion';

const Subskill = ({ name }) => {
  const variants = {
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
      },
    },
    initial: {
      opacity: 0,
      scale: 0,
      y: 50,
    },
  };

  // TODO: Add passive swaying and prevent animation when loading the page

  return (
    <>
      <motion.div variants={variants}>
        <Container
          flat={true}
          className="bg-orange-300  transition-colors dark:bg-orange-700"
          onClick={() => onClick(name)}
        >
          <div className="flex items-center">
            <span
              className={classNames(
                'text-2xl font-medium text-zinc-900 transition-colors duration-500 dark:text-zinc-100'
              )}
            >
              {name}
            </span>
          </div>
        </Container>
      </motion.div>
    </>
  );
};

Subskill.propTypes = { name: PropTypes.string.isRequired };

export default Subskill;
