import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Experience } from '../Experience';
import { selectFilteredExperiences } from '@/slices/ExperiencesSlice';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwind.config';

const ExperienceList = () => {
  const tailwind = resolveConfig(tailwindConfig);
  const experiences = useSelector((state) => selectFilteredExperiences(state));

  return (
    <>
      <LayoutGroup id="experiences">
        <div className="flex flex-col">
          <AnimatePresence initial={false}>
            {experiences.map((experience, index) => {
              return (
                <motion.section
                  className="overflow-hidden"
                  key={experience.id}
                  variants={{
                    visible: { opacity: 2, height: 'auto' },
                    hidden: { opacity: 0, height: 0 },
                  }}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <Experience
                    className={'mb-8'}
                    id={experience.id}
                    title={experience.title}
                    startDate={experience.startDate}
                    endDate={experience.endDate}
                    description={experience.description}
                    tags={experience.tags}
                  />
                </motion.section>
              );
            })}
          </AnimatePresence>
        </div>
      </LayoutGroup>
    </>
  );
};

ExperienceList.propTypes = {};

export default ExperienceList;
