import { Sidebar } from '@/Common';
import Head from 'next/head';
import { HomePageWrapper } from '@/components/HomePageWrapper';
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
          <HomePageWrapper />
          <SkillsPageWrapper />
          <ExperiencePageWrapper />
          <EducationPageWrapper />
        </div>

        {/* Fixed Sidebar */}
        <Sidebar
          anchors={[
            { name: 'About', target: 'about' },
            { name: 'Skills', target: 'skills' },
            { name: 'Experience', target: 'experience' },
            { name: 'Education', target: 'education' },
            { name: 'Contact', target: 'contact' },
          ]}
        />
      </main>
    </div>
  );
}
