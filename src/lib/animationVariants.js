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
      background: styleConfig.theme.colors['background']['dark'],
    };
    darkMode.light = {
      ...darkMode.light,
      background: styleConfig.theme.colors['background']['light'],
    };
  }

  if (properties.includes('text')) {
    darkMode.dark = {
      ...darkMode.dark,
      color: styleConfig.theme.colors['text']['dark'],
    };
    darkMode.light = {
      ...darkMode.light,
      color: styleConfig.theme.colors['text']['light'],
    };
  }

  if (properties.includes('container')) {
    darkMode.dark = {
      ...darkMode.dark,
      background: styleConfig.theme.colors['container']['dark'],
    };
    darkMode.light = {
      ...darkMode.light,
      background: styleConfig.theme.colors['container']['light'],
    };
  }

  return darkMode;
};
