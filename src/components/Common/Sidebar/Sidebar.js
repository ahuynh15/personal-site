import {
  selectCurrentAnchor,
  selectPageAnchors,
  setPageAnchor,
} from '@/slices/SidebarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { LayoutGroup, motion } from 'framer-motion';
import Link from 'next/link';

const Sidebar = () => {
  const dispatch = useDispatch();
  const pageAnchors = useSelector((state) => selectPageAnchors(state));
  const currentAnchor = useSelector((state) => selectCurrentAnchor(state));

  const onClick = (target) => {
    dispatch(setPageAnchor({ pageAnchor: target }));
  };

  return (
    <nav className="sticky top-0 mx-8 flex h-screen items-center text-2xl">
      <LayoutGroup id="sidebar">
        <ul>
          {pageAnchors.map((pageAnchor, index) => {
            return (
              <div className="mb-12 box-border flex" key={index}>
                <li
                  className={`capitalize ${
                    currentAnchor !== pageAnchor && 'pb-0.5'
                  }`}
                  onClick={() => onClick(pageAnchor)}
                >
                  <Link href={`#${pageAnchor}`}>{pageAnchor}</Link>
                  {currentAnchor === pageAnchor && (
                    <motion.div
                      className="h-0.5 w-full bg-orange-500"
                      layoutId="indicator"
                    ></motion.div>
                  )}
                </li>
              </div>
            );
          })}
        </ul>
      </LayoutGroup>
    </nav>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
