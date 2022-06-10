import { Sidebar } from '@/Common';
import Head from 'next/head';
import { AboutPageWrapper } from '@/components/AboutPageWrapper';
import { SkillsPageWrapper } from '@/components/SkillsPageWrapper';
import { ExperiencePageWrapper } from '@/components/ExperiencePageWrapper';
import { EducationPageWrapper } from '@/components/EducationPageWrapper';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alvin Huynh</title>
        <meta name="description" content="Alvin Huynh's Personal Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-full pb-8">
        {/* Content */}
        <div className="mx-16 grow">
          <div id="about">
            <AboutPageWrapper />
          </div>
          <div id="skills">
            <SkillsPageWrapper />
          </div>
          <div id="experience">
            <ExperiencePageWrapper />
          </div>
          <div id="education">
            <EducationPageWrapper />
          </div>
        </div>

        {/* Fixed Sidebar */}
        <Sidebar />
      </main>
    </div>
  );
}
