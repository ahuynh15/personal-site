import { Sidebar } from '@/Common';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { selectDarkMode } from '@/slices/DarkModeSlice';
import { AboutPageWrapper } from '@/components/AboutPageWrapper';
import { SkillsPageWrapper } from '@/components/SkillsPageWrapper';
import { ExperiencePageWrapper } from '@/components/ExperiencePageWrapper';
import { EducationPageWrapper } from '@/components/EducationPageWrapper';
import { ContactPageWrapper } from '@/components/ContactPageWrapper';
import { DarkModeToggle } from '@/components/Common/DarkModeToggle';
import { animateDarkMode } from '@/lib/animationVariants';

export default function Home() {
  const darkMode = useSelector((state) => selectDarkMode(state));

  return (
    <div className={`${darkMode && 'dark'}`}>
      <Head>
        <title>Alvin Huynh</title>
        <meta name="description" content="Alvin Huynh's Personal Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.main
        className="flex h-full"
        variants={animateDarkMode(['background', 'text'])}
        animate={darkMode ? 'dark' : 'light'}
      >
        {/* Fixed Dark Mode Toggle */}
        <div className="fixed top-8 right-8 z-10">
          <DarkModeToggle />
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
