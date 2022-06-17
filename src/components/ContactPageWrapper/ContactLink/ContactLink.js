import { LinkIcon } from '@/Common';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwindConfig';
import {
  selectIsDarkMode,
  selectIsDarkModePreferred,
} from '@/slices/ThemeSlice';
import { animateDarkMode } from '@/lib/animationVariants';

const ContactLink = ({ label, href, icon = <LinkIcon size={24} /> }) => {
  const styleConfig = resolveConfig(tailwindConfig);
  const isDarkMode = useSelector((state) => selectIsDarkMode(state));
  const isDarkModePreferred = useSelector((state) =>
    selectIsDarkModePreferred(state)
  );

  return (
    <div className="inline-block">
      <motion.a
        href={href}
        className="flex items-center text-4xl"
        variants={animateDarkMode(['background', 'text'])}
        initial={isDarkModePreferred ? 'dark' : 'light'}
        animate={isDarkMode ? 'dark' : 'light'}
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
