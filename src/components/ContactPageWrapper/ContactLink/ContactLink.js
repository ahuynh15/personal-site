import { ArrowRightIcon, Container, LinkIcon } from '@/Common';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ContactLink = ({ label, href, icon = <LinkIcon size={24} /> }) => {
  return (
    <motion.a href={href} className="flex w-full">
      <Container className="flex w-full items-center justify-between text-2xl font-medium leading-6 hover:text-primary dark:hover:text-primary">
        <span>{icon}</span>
        {label}
        <ArrowRightIcon />
      </Container>
    </motion.a>
  );
};

ContactLink.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.element,
};

export default ContactLink;
