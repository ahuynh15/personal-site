import React from 'react';
import CONTACTS from '@/constants/contacts';
import ContactLink from '../ContactLink';

function ContactList() {
  return (
    <div className="flex flex-col gap-4 px-4 pb-24 sm:pb-4 sm:pt-4">
      {CONTACTS.map((contact) => (
        <ContactLink
          key={contact.id}
          className="mt-8"
          href={contact.href}
          label={contact.label}
          icon={<contact.icon size={24} />}
        />
      ))}
    </div>
  );
}

ContactList.propTypes = {};

ContactList.defaultProps = {};

export default ContactList;
