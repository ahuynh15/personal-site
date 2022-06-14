import { LinkIcon } from '@/Common';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwindConfig';
import { selectDarkMode } from '@/slices/DarkModeSlice';

const ContactLink = ({ label, href, icon = <LinkIcon size={24} /> }) => {
  const styleConfig = resolveConfig(tailwindConfig);
  const darkMode = useSelector((state) => selectDarkMode(state));

  return (
    <div className="inline-block">
      <motion.a
        href={href}
        className="flex items-center text-4xl"
        animate={{
          color: darkMode
            ? styleConfig.theme.colors['white']
            : styleConfig.theme.colors['black'],
        }}
        whileHover={{
          color: styleConfig.theme.colors['orange']['500'],
        }}
      >
        <span className="mr-4">{icon}</span>
        {label}
      </motion.a>
    </div>
  );
};

ContactLink.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.element,
};

export default ContactLink;
