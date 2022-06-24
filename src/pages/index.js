import {
  ScrollIndicator,
  Sidebar,
  PageContainer,
  PageIndicator,
} from '@/Common';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '@/components/Common/ThemeToggle';
import { useState } from 'react';
import { selectPage, setPage } from '@/slices/PageSlice';
import useDarkMode from '@/hooks/useDarkMode';
import { pages } from '@/constants/pages';

export default function Home() {
  const dispatch = useDispatch();
  const page = useSelector((state) => selectPage(state));
  const [theme] = useDarkMode();

  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div>
      <Head>
        <title>Alvin Huynh</title>
        <meta name="description" content="Alvin Huynh's Personal Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`relative flex h-screen w-screen overflow-hidden ${theme}`}
        onWheel={(e) => console.log(e)}
      >
        {/* Pages */}
        <AnimatePresence
          onExitComplete={() => {
            console.log(`loaded`);
            setIsAnimating(false);
          }}
          custom={{ nextIndex: page.index }}
        >
          <PageContainer
            key={page.index}
            index={page.index}
            prevIndex={page.prevIndex}
          >
            {pages[page.index].component}
          </PageContainer>
        </AnimatePresence>

        {/* Fixed Dark Mode Toggle */}
        <div className="fixed top-8 right-8 z-10">
          <ThemeToggle />
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
