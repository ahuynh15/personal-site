import { AboutPageWrapper } from '@/components/AboutPageWrapper';
import { SkillsPageWrapper } from '@/components/SkillsPageWrapper';
import { ExperiencePageWrapper } from '@/components/ExperiencePageWrapper';
import { EducationPageWrapper } from '@/components/EducationPageWrapper';
import { ContactPageWrapper } from '@/components/ContactPageWrapper';

import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwindConfig';

const styleConfig = resolveConfig(tailwindConfig);

export const pages = [
  {
    name: 'about',
    component: <AboutPageWrapper />,
    theme: {
      backgroundColor: {
        light: styleConfig.theme.colors['zinc']['100'],
        dark: styleConfig.theme.colors['zinc']['900'],
      },
    },
  },
  {
    name: 'skills',
    component: <SkillsPageWrapper />,
    theme: {
      backgroundColor: {
        light: styleConfig.theme.colors['zinc']['100'],
        dark: styleConfig.theme.colors['zinc']['900'],
      },
    },
  },
  {
    name: 'experience',
    component: <ExperiencePageWrapper />,
    theme: {
      backgroundColor: {
        light: styleConfig.theme.colors['zinc']['100'],
        dark: styleConfig.theme.colors['zinc']['900'],
      },
    },
  },
  {
    name: 'education',
    component: <EducationPageWrapper />,
    theme: {
      backgroundColor: {
        light: styleConfig.theme.colors['zinc']['100'],
        dark: styleConfig.theme.colors['zinc']['900'],
      },
    },
  },
  {
    name: 'contact',
    component: <ContactPageWrapper />,
    theme: {
      backgroundColor: {
        light: styleConfig.theme.colors['zinc']['100'],
        dark: styleConfig.theme.colors['zinc']['900'],
      },
    },
  },
];
