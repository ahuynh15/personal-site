import React from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import {
  PageContainer,
  PageIndicator,
  DarkModeToggle,
  MobileNavigation,
  PageScroller,
} from '@/Common';
import { selectPage, setIsTransitioning } from '@/slices/PageSlice';
import useDarkMode from '@/hooks/useDarkMode';
import pagesConfig from '@/constants/pagesConfig';
import AboutPageWrapper from '@/components/AboutPageWrapper';
import SkillsPageWrapper from '@/components/SkillsPageWrapper';
import ExperiencePageWrapper from '@/components/ExperiencePageWrapper';
import EducationPageWrapper from '@/components/EducationPageWrapper';
import ContactPageWrapper from '@/components/ContactPageWrapper';
import { useMediaQuery } from 'react-responsive';

export default function Home() {
  const dispatch = useDispatch();
  const page = useSelector((state) => selectPage(state));
  const mode = useDarkMode();
  const isSmall = useMediaQuery({ query: '(max-width: 640px)' });

  const getPage = (name) => {
    switch (name) {
      case 'about':
        return <AboutPageWrapper />;
      case 'skills':
        return <SkillsPageWrapper />;
      case 'experience':
        return <ExperiencePageWrapper />;
      case 'education':
        return <EducationPageWrapper />;
      case 'contact':
        return <ContactPageWrapper />;
      default:
        return <AboutPageWrapper />;
    }
  };

  return (
    <div>
      <Head>
        <title>Alvin Huynh</title>
        <meta name="description" content="Alvin Huynh's Personal Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        id="root"
        className={`scrollbar relative flex h-screen w-screen overflow-hidden ${mode}`}
      >
        {/* Pages */}
        <AnimatePresence
          initial={false}
          onExitComplete={() => {
            dispatch(setIsTransitioning({ isTransitioning: false }));
          }}
          custom={{ nextIndex: page.index }}
        >
          <PageContainer
            key={page.index}
            index={page.index}
            prevIndex={page.prevIndex}
            theme={pagesConfig[page.index].theme}
          >
            {getPage(pagesConfig[page.index].name)}
          </PageContainer>
        </AnimatePresence>

        {/* Fixed Dark Mode Toggle */}
        <div className="fixed top-3 right-3 z-30">
          <DarkModeToggle />
        </div>

        {isSmall ? (
          /* Mobile Page Indicator */
          <div className="absolute bottom-0 z-30 flex w-full justify-center">
            <MobileNavigation
              currentPageName={pagesConfig[page.index].name}
              currentPageNumber={page.index + 1}
            />
          </div>
        ) : (
          /* Page Indicator and Scroller */
          <>
            <div className="absolute right-8 top-1/2 z-30 hidden -translate-y-1/2 sm:block">
              <PageIndicator
                currentPageName={pagesConfig[page.index].name}
                currentPageNumber={page.index + 1}
              />
            </div>

            <div className="absolute bottom-2 left-1/2 z-30 hidden -translate-x-1/2 sm:block">
              <PageScroller currentPageNumber={page.index + 1} />
            </div>
          </>
        )}
      </main>
    </div>
  );
}
