import { LinkIcon } from '@/Common';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwindConfig';
import { animateDarkMode } from '@/lib/animationVariants';

const ContactLink = ({ label, href, icon = <LinkIcon size={24} /> }) => {
  const styleConfig = resolveConfig(tailwindConfig);

  return (
    <div className="inline-block">
      <motion.a
        href={href}
        className="flex items-center text-4xl text-zinc-900 transition-colors duration-500 hover:text-primary dark:text-zinc-100 dark:hover:text-primary"
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
