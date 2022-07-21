import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwindConfig';

const styleConfig = resolveConfig(tailwindConfig);

export const pagesConfig = [
  {
    name: 'about',
    theme: {
      backgroundColor: {
        light: styleConfig.theme.colors['zinc']['100'],
        dark: styleConfig.theme.colors['zinc']['900'],
      },
    },
  },
  {
    name: 'skills',
    theme: {
      backgroundColor: {
        light: styleConfig.theme.colors['zinc']['100'],
        dark: styleConfig.theme.colors['zinc']['900'],
      },
    },
  },
  {
    name: 'experience',
    theme: {
      backgroundColor: {
        light: styleConfig.theme.colors['zinc']['100'],
        dark: styleConfig.theme.colors['zinc']['900'],
      },
    },
  },
  {
    name: 'education',
    theme: {
      backgroundColor: {
        light: styleConfig.theme.colors['zinc']['100'],
        dark: styleConfig.theme.colors['zinc']['900'],
      },
    },
  },
  {
    name: 'contact',
    theme: {
      backgroundColor: {
        light: styleConfig.theme.colors['zinc']['100'],
        dark: styleConfig.theme.colors['zinc']['900'],
      },
    },
  },
];
