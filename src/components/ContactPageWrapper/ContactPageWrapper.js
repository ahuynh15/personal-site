import { ContactLink } from './ContactLink';
import { LinkedInIcon, Title } from '@/components/Common';

const ContactPageWrapper = () => {
  return (
    <div className="flex h-full items-center p-8">
      <div className="w-1/3">
        <Title>I can be contacted at...</Title>
      </div>
      <div className="w-2/3">
        <ContactLink
          className="mt-8"
          href="www.linkedin.com/in/alvin-huynh-b1434b150"
          label="LinkedIn"
          icon={<LinkedInIcon size={24} />}
        />
      </div>
    </div>
  );
};

export default ContactPageWrapper;
