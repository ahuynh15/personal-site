import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwindConfig';
import { BookIcon, BriefcaseIcon, SendIcon, ToolIcon, UserIcon } from '@/Icons';

const styleConfig = resolveConfig(tailwindConfig);

const pagesConfig = [
  {
    name: 'about',
    theme: {
      backgroundColor: {
        light: styleConfig.theme.colors.zinc['100'],
        dark: styleConfig.theme.colors.zinc['900'],
      },
      strokeColor: styleConfig.theme.colors.orange['500'],
    },
    icon: UserIcon,
  },
  {
    name: 'skills',
    theme: {
      backgroundColor: {
        light: styleConfig.theme.colors.zinc['100'],
        dark: styleConfig.theme.colors.zinc['900'],
      },
      strokeColor: styleConfig.theme.colors.orange['500'],
    },
    icon: ToolIcon,
  },
  {
    name: 'experience',
    theme: {
      backgroundColor: {
        light: styleConfig.theme.colors.zinc['100'],
        dark: styleConfig.theme.colors.zinc['900'],
      },
      strokeColor: styleConfig.theme.colors.orange['500'],
    },
    icon: BriefcaseIcon,
  },
  {
    name: 'education',
    theme: {
      backgroundColor: {
        light: styleConfig.theme.colors.zinc['100'],
        dark: styleConfig.theme.colors.zinc['900'],
      },
      strokeColor: styleConfig.theme.colors.orange['500'],
    },
    icon: BookIcon,
  },
  {
    name: 'contact',
    theme: {
      backgroundColor: {
        light: styleConfig.theme.colors.zinc['100'],
        dark: styleConfig.theme.colors.zinc['900'],
      },
      strokeColor: styleConfig.theme.colors.orange['500'],
    },
    icon: SendIcon,
  },
];

export default pagesConfig;
