import React from 'react';
import { Container, ExternalLinkIcon, LinkIcon } from '@/Common';
import PropTypes from 'prop-types';

function ContactLink({ label, href, icon }) {
  return (
    <a href={href} className="flex w-full" target="_blank" rel="noreferrer">
      <Container className="flex w-full items-center justify-between text-2xl font-medium leading-6 text-zinc-300 hover:text-zinc-900 dark:text-zinc-700 dark:hover:text-zinc-100">
        <span>{icon}</span>
        {label}
        <ExternalLinkIcon size={24} />
      </Container>
    </a>
  );
}

ContactLink.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.element,
};

ContactLink.defaultProps = {
  icon: <LinkIcon size={24} />,
};

export default ContactLink;
