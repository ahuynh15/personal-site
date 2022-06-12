import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { setPageAnchor } from '@/slices/SidebarSlice';
import { ContactLink } from './ContactLink';
import { LinkedInIcon } from '@/components/Common';

const ContactPageWrapper = () => {
  const dispatch = useDispatch();
  const { ref } = useInView({
    threshold: 0.1,
    onChange: (inView) => {
      dispatch(setPageAnchor({ pageAnchor: 'contact', visible: inView }));
    },
  });

  return (
    <div ref={ref}>
      <div className="mb-8 text-5xl">I can be contacted at...</div>
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
