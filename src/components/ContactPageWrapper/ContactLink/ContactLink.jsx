import React from 'react';
import { Container } from '@/Common';
import { ExternalLinkIcon, LinkIcon } from '@/Icons';
import PropTypes from 'prop-types';

function ContactLink({ label, href, icon }) {
  return (
    <a href={href} className="flex w-full" target="_blank" rel="noreferrer">
      <Container className="flex w-full items-center justify-between fill-transparent stroke-zinc-900 text-lg font-medium leading-6 text-zinc-900 dark:stroke-zinc-300 dark:text-zinc-300 hover-hover:stroke-zinc-300 hover-hover:text-zinc-300 hover-hover:hover:stroke-zinc-900 hover-hover:hover:stroke-zinc-900 hover-hover:hover:text-zinc-900 hover-hover:dark:stroke-zinc-700 hover-hover:dark:text-zinc-700 hover-hover:dark:hover:stroke-zinc-100 hover-hover:dark:hover:text-zinc-100">
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
