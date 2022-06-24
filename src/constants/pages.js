import { AboutPageWrapper } from '@/components/AboutPageWrapper';
import { SkillsPageWrapper } from '@/components/SkillsPageWrapper';
import { ExperiencePageWrapper } from '@/components/ExperiencePageWrapper';
import { EducationPageWrapper } from '@/components/EducationPageWrapper';
import { ContactPageWrapper } from '@/components/ContactPageWrapper';

export const pages = [
  { name: 'about', component: <AboutPageWrapper /> },
  { name: 'skills', component: <SkillsPageWrapper /> },
  { name: 'experience', component: <ExperiencePageWrapper /> },
  { name: 'education', component: <EducationPageWrapper /> },
  { name: 'contact', component: <ContactPageWrapper /> },
];
