import { ScrollIndicator, Sidebar, PageContainer } from '@/Common';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import {
  selectIsDarkMode,
  selectIsDarkModePreferred,
} from '@/slices/ThemeSlice';
import { AboutPageWrapper } from '@/components/AboutPageWrapper';
import { SkillsPageWrapper } from '@/components/SkillsPageWrapper';
import { ExperiencePageWrapper } from '@/components/ExperiencePageWrapper';
import { EducationPageWrapper } from '@/components/EducationPageWrapper';
import { ContactPageWrapper } from '@/components/ContactPageWrapper';
import { DarkModeToggle } from '@/components/Common/DarkModeToggle';
import { animateDarkMode } from '@/lib/animationVariants';
import { HomePageWrapper } from '@/components/HomePageWrapper';
import { useState } from 'react';

export default function Home() {
  const isDarkModePreferred = useSelector((state) =>
    selectIsDarkModePreferred(state)
  );
  const isDarkMode = useSelector((state) => selectIsDarkMode(state));

  const pages = {
    about: { index: 1, component: <AboutPageWrapper /> },
    skills: {
      index: 2,
      component: <SkillsPageWrapper />,
    },
    experience: {
      index: 3,
      component: <ExperiencePageWrapper />,
    },
    education: {
      index: 4,
      component: <EducationPageWrapper />,
    },
    contact: {
      index: 5,
      component: <ContactPageWrapper />,
    },
  };

  const [pageData, setPageData] = useState({
    currentPage: 'about',
    currentIndex: 1,
    prevIndex: 0,
  });

  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div>
      <Head>
        <title>Alvin Huynh</title>
        <meta name="description" content="Alvin Huynh's Personal Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex h-screen w-screen overflow-hidden">
        <AnimatePresence
          onExitComplete={() => {
            console.log(`loaded`);
            setIsAnimating(false);
          }}
          custom={{ nextIndex: pageData.currentIndex }}
        >
          <PageContainer
            key={pageData.currentIndex}
            index={pageData.currentIndex}
            prevIndex={pageData.prevIndex}
          >
            {pages[pageData.currentPage].component}
          </PageContainer>
        </AnimatePresence>

        {!isAnimating && (
          <div className="fixed right-0 z-20">
            <button
              onClick={() => {
                setIsAnimating(true);
                setPageData({
                  currentPage: 'about',
                  currentIndex: 1,
                  prevIndex: pageData.currentIndex,
                });
              }}
            >
              About
            </button>
            <button
              onClick={() => {
                setIsAnimating(true);
                setPageData({
                  currentPage: 'skills',
                  currentIndex: 2,
                  prevIndex: pageData.currentIndex,
                });
              }}
            >
              Skill
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
