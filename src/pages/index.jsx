import React from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { PageContainer, PageIndicator } from '@/Common';
import { DarkModeToggle } from '@/components/Common/DarkModeToggle';
import { selectPage, setIsTransitioning } from '@/slices/PageSlice';
import useDarkMode from '@/hooks/useDarkMode';
import { pages } from '@/constants/pages';

export default function Home() {
  const dispatch = useDispatch();
  const page = useSelector((state) => selectPage(state));
  const [mode] = useDarkMode();

  return (
    <div>
      <Head>
        <title>Alvin Huynh</title>
        <meta name="description" content="Alvin Huynh's Personal Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`relative flex h-screen w-screen overflow-hidden ${mode}`}
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
            theme={pages[page.index].theme}
          >
            {pages[page.index].component}
          </PageContainer>
        </AnimatePresence>

        {/* Fixed Dark Mode Toggle */}
        <div className="fixed top-8 right-8 z-30">
          <DarkModeToggle />
        </div>

        {/* Page Indicator */}
        <div className="absolute right-8 top-1/2 z-30 -translate-y-1/2">
          <PageIndicator
            pageName={pages[page.index].name}
            pageNumber={page.index + 1}
            totalPages={pages.length}
          />
        </div>
      </main>
    </div>
  );
}
