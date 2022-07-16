import { ContactLink } from './ContactLink';
import { LinkedInIcon, Title } from '@/components/Common';

const ContactPageWrapper = () => {
  return (
    <div className="flex h-full flex-col items-center p-8 xl:flex-row">
      <div className="xl:w-1/3">
        <Title>I can be contacted at...</Title>
      </div>
      <div className="h-full w-full pt-8 xl:w-2/3 xl:pt-0">
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
