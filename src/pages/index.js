import {
  ScrollIndicator,
  Sidebar,
  PageContainer,
  PageIndicator,
} from '@/Common';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { AboutPageWrapper } from '@/components/AboutPageWrapper';
import { SkillsPageWrapper } from '@/components/SkillsPageWrapper';
import { ExperiencePageWrapper } from '@/components/ExperiencePageWrapper';
import { EducationPageWrapper } from '@/components/EducationPageWrapper';
import { ContactPageWrapper } from '@/components/ContactPageWrapper';
import { ThemeToggle } from '@/components/Common/ThemeToggle';
import { useState } from 'react';
import { selectPage, setPage } from '@/slices/PageSlice';

export default function Home() {
  const dispatch = useDispatch();
  const page = useSelector((state) => selectPage(state));

  const pages = [
    { name: 'about', component: <AboutPageWrapper /> },
    { name: 'skills', component: <SkillsPageWrapper /> },
    { name: 'experience', component: <ExperiencePageWrapper /> },
    { name: 'education', component: <EducationPageWrapper /> },
    { name: 'contact', component: <ContactPageWrapper /> },
  ];

  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div>
      <Head>
        <title>Alvin Huynh</title>
        <meta name="description" content="Alvin Huynh's Personal Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex h-screen w-screen overflow-hidden">
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
        <div className="absolute right-8 top-1/2 z-30">
          <PageIndicator
            pageName={page.name}
            pageNumber={page.index + 1}
            totalPages={pages.length}
          />
        </div>

        {!isAnimating && (
          <div className="fixed right-0 z-20">
            <button
              onClick={() => {
                setIsAnimating(true);
                dispatch(setPage({ name: 'about', index: 0 }));
              }}
            >
              About
            </button>
            <button
              onClick={() => {
                setIsAnimating(true);
                dispatch(setPage({ name: 'skill', index: 1 }));
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
