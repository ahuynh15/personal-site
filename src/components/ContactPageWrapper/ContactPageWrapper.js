import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { setPageAnchor } from '@/slices/SidebarSlice';

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
      <div className="pb-2 text-5xl">I can be contacted at...</div>
      <div className="mt-8">Contact</div>
    </div>
  );
};

export default ContactPageWrapper;
