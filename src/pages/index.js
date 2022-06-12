import { Sidebar } from '@/Common';
import Head from 'next/head';
import { AboutPageWrapper } from '@/components/AboutPageWrapper';
import { SkillsPageWrapper } from '@/components/SkillsPageWrapper';
import { ExperiencePageWrapper } from '@/components/ExperiencePageWrapper';
import { EducationPageWrapper } from '@/components/EducationPageWrapper';
import { ContactPageWrapper } from '@/components/ContactPageWrapper';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alvin Huynh</title>
        <meta name="description" content="Alvin Huynh's Personal Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-full text-black">
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
      </main>
    </div>
  );
}
