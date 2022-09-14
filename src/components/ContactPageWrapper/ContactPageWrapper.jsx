import React from 'react';
import { Title } from '@/Common';
import ContactList from './ContactList';

function ContactPageWrapper() {
  return (
    <div className="flex h-full flex-col lg:flex-row">
      <div className="my-4 ml-8 mr-12 mb-4 self-center sm:mr-8 lg:w-1/3">
        <Title text="I can be reached at..." />
      </div>
      <div
        className="flex h-full overflow-y-auto sm:mt-4 lg:mt-0 lg:w-2/3"
        onWheel={(e) => e.stopPropagation()}
      >
        <div className="w-full lg:my-auto">
          <ContactList />
        </div>
      </div>
    </div>
  );
}

export default ContactPageWrapper;
