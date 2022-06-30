import { ContactLink } from './ContactLink';
import { LinkedInIcon } from '@/components/Common';

const ContactPageWrapper = () => {
  return (
    <div className="h-full p-8">
      <div className="mb-8 text-5xl text-zinc-900 transition-colors duration-500 dark:text-zinc-100">
        I can be contacted at...
      </div>
      <ContactLink
        className="mt-8"
        href="www.linkedin.com/in/alvin-huynh-b1434b150"
        label="LinkedIn"
        icon={<LinkedInIcon size={24} />}
      />
    </div>
  );
};

export default ContactPageWrapper;
