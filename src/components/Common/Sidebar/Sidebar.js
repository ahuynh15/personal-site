import {
  selectCurrentSection,
  selectPageSections,
} from '@/slices/SidebarSlice';
import { useSelector } from 'react-redux';
import { LayoutGroup, motion } from 'framer-motion';
import Link from 'next/link';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwindConfig';

const Sidebar = () => {
  const styleConfig = resolveConfig(tailwindConfig);
  const pageSections = useSelector((state) => selectPageSections(state));
  const currentSection = useSelector((state) => selectCurrentSection(state));

  // TODO: Layout projects do not work perfect with sticky components...issue opened on github: https://github.com/framer/motion/issues/1535

  console.log(styleConfig.theme.colors);

  return (
    <nav className="sticky top-0 mx-8 flex h-screen items-center text-2xl">
      <LayoutGroup id="sidebar">
        <ul>
          {pageSections.map((pageSection) => {
            return (
              <div className="mb-12 box-border flex" key={pageSection}>
                <motion.li
                  className={`${currentSection !== pageSection && 'pb-0.5'}`}
                  animate={{
                    color:
                      currentSection !== pageSection
                        ? styleConfig.theme.colors['gray']['300']
                        : styleConfig.theme.colors['black'],
                  }}
                  whileHover={{
                    color: styleConfig.theme.colors['black'],
                  }}
                >
                  <Link href={`#${pageSection}`}>{`${pageSection}.`}</Link>
                  {currentSection === pageSection && (
                    <motion.div
                      className="h-0.5 w-full bg-orange-500"
                      layoutId="indicator"
                    ></motion.div>
                  )}
                </motion.li>
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
