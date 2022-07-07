import { Container } from '@/Common';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { motion } from 'framer-motion';

const Subskill = ({ name }) => {
  const variants = {
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
      },
    },
    hide: {
      opacity: 0,
      scale: 0,
    },
  };

  return (
    <>
      <motion.div className="flex items-center" variants={variants}>
        <Container
          flat={true}
          className="bg-orange-300"
          onClick={() => onClick(name)}
        >
          <div className="flex items-center">
            <span
              className={classNames(
                'text-2xl font-medium transition-colors duration-500'
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
