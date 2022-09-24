import React from 'react';
import { ScrollableWrapper, Title } from '@/Common';
import ContactList from './ContactList';

function ContactPageWrapper() {
  return (
    <div className="flex h-full flex-col lg:flex-row">
      <div className="my-4 ml-8 mr-12 mb-4 self-center sm:mr-8 lg:w-1/3">
        <Title text="I can be found at..." />
      </div>
      <div className="h-full sm:mt-4 lg:mt-0 lg:w-2/3">
        <ScrollableWrapper>
          <div className="w-full lg:my-auto">
            <ContactList />
          </div>
        </ScrollableWrapper>
      </div>
    </div>
  );
}

export default ContactPageWrapper;
