import {
  selectCurrentSection,
  selectPageSections,
  setPageAnchor,
} from '@/slices/SidebarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { LayoutGroup, motion } from 'framer-motion';
import Link from 'next/link';

const Sidebar = () => {
  const pageSections = useSelector((state) => selectPageSections(state));
  const currentSection = useSelector((state) => selectCurrentSection(state));

  // TODO: Layout projects do not work perfect with sticky components...issue opened on github: https://github.com/framer/motion/issues/1535

  return (
    <nav className="sticky top-0 mx-8 flex h-screen items-center text-2xl">
      <LayoutGroup id="sidebar">
        <ul>
          {pageSections.map((pageSection) => {
            return (
              <div className="mb-12 box-border flex" key={pageSection}>
                <li
                  className={`capitalize ${
                    currentSection !== pageSection && 'pb-0.5'
                  }`}
                >
                  <Link href={`#${pageSection}`}>{pageSection}</Link>
                  {currentSection === pageSection && (
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
