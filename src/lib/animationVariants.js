import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwindConfig';

const styleConfig = resolveConfig(tailwindConfig);

export const animateDarkMode = (properties) => {
  let darkMode = {
    dark: { transition: { type: 'linear' } },
    light: { transition: { type: 'linear' } },
  };

  if (properties.includes('background')) {
    darkMode.dark = {
      ...darkMode.dark,
      background: styleConfig.theme.colors['black'],
    };
    darkMode.light = {
      ...darkMode.light,
      background: styleConfig.theme.colors['white'],
    };
  }

  if (properties.includes('text')) {
    darkMode.dark = {
      ...darkMode.dark,
      color: styleConfig.theme.colors['white'],
    };
    darkMode.light = {
      ...darkMode.light,
      color: styleConfig.theme.colors['black'],
    };
  }

  return darkMode;
};
