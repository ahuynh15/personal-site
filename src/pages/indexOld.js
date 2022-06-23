import { ScrollIndicator, Sidebar } from '@/Common';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import {
  selectIsDarkMode,
  selectIsDarkModePreferred,
} from '@/slices/ThemeSlice';
import { AboutPageWrapper } from '@/components/AboutPageWrapper';
import { SkillsPageWrapper } from '@/components/SkillsPageWrapper';
import { ExperiencePageWrapper } from '@/components/ExperiencePageWrapper';
import { EducationPageWrapper } from '@/components/EducationPageWrapper';
import { ContactPageWrapper } from '@/components/ContactPageWrapper';
import { DarkModeToggle } from '@/components/Common/ThemeToggle';
import { animateDarkMode } from '@/lib/animationVariants';

export default function Home() {
  const isDarkModePreferred = useSelector((state) =>
    selectIsDarkModePreferred(state)
  );
  const isDarkMode = useSelector((state) => selectIsDarkMode(state));

  return (
    <div>
      <Head>
        <title>Alvin Huynh</title>
        <meta name="description" content="Alvin Huynh's Personal Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.main
        className="flex h-full"
        variants={animateDarkMode(['background', 'text'])}
        initial={isDarkModePreferred ? 'dark' : 'light'}
        animate={isDarkMode ? 'dark' : 'light'}
      >
        {/* Fixed Dark Mode Toggle */}
        <div className="fixed top-8 right-8 z-10">
          <DarkModeToggle />
        </div>

        {/* Scroll Indicator */}
        <div className="fixed left-1/2 bottom-4 z-10 -translate-x-1/2">
          <ScrollIndicator />
        </div>

        {/* Content */}
        <div className="mx-16 grow">
          <div id="about" className="h-screen">
            <AboutPageWrapper />
          </div>
          <div id="skills" className="pt-16">
            <SkillsPageWrapper />
          </div>
          <div id="experience" className="pt-16">
            <ExperiencePageWrapper />
          </div>
          <div id="education" className="pt-16">
            <EducationPageWrapper />
          </div>
          <div id="contact" className="h-screen pt-16">
            <ContactPageWrapper />
          </div>
        </div>

        {/* Fixed Sidebar */}
        <Sidebar />
      </motion.main>
    </div>
  );
}
