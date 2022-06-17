import {
  selectCurrentSection,
  selectPageSections,
} from '@/slices/SidebarSlice';
import { useSelector } from 'react-redux';
import { LayoutGroup, motion } from 'framer-motion';
import Link from 'next/link';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwindConfig';
import {
  selectIsDarkMode,
  selectIsDarkModePreferred,
} from '@/slices/ThemeSlice';

const Sidebar = () => {
  const styleConfig = resolveConfig(tailwindConfig);
  const pageSections = useSelector((state) => selectPageSections(state));
  const currentSection = useSelector((state) => selectCurrentSection(state));
  const isDarkModePreferred = useSelector((state) =>
    selectIsDarkModePreferred(state)
  );
  const isDarkMode = useSelector((state) => selectIsDarkMode(state));

  // TODO: Layout projects do not work perfect with sticky components...issue opened on github: https://github.com/framer/motion/issues/1535

  return (
    <nav className="sticky top-0 mx-8 flex h-screen items-center text-2xl">
      <LayoutGroup id="sidebar">
        <ul>
          {pageSections.map((pageSection) => {
            return (
              <div className="mb-12 box-border flex" key={pageSection}>
                <motion.li
                  className={`${currentSection !== pageSection && 'pb-0.5'}`}
                  initial={{
                    color: isDarkModePreferred
                      ? currentSection !== pageSection
                        ? styleConfig.theme.colors['sidebar']['inactive'][
                            'dark'
                          ]
                        : styleConfig.theme.colors['sidebar']['active']['dark']
                      : currentSection !== pageSection
                      ? styleConfig.theme.colors['sidebar']['inactive']['light']
                      : styleConfig.theme.colors['sidebar']['active']['light'],
                  }}
                  animate={{
                    color: isDarkMode
                      ? currentSection !== pageSection
                        ? styleConfig.theme.colors['sidebar']['inactive'][
                            'dark'
                          ]
                        : styleConfig.theme.colors['sidebar']['active']['dark']
                      : currentSection !== pageSection
                      ? styleConfig.theme.colors['sidebar']['inactive']['light']
                      : styleConfig.theme.colors['sidebar']['active']['light'],
                  }}
                  whileHover={{
                    color: isDarkMode
                      ? styleConfig.theme.colors['sidebar']['active']['dark']
                      : styleConfig.theme.colors['sidebar']['active']['light'],
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
