import {
  selectIsDarkModePreferred,
  selectIsDarkMode,
} from '@/slices/ThemeSlice';
import { useSelector } from 'react-redux';

const useDarkMode = () => {
  // The dark mode settings from localStorage or browser settings
  const preferredTheme = useSelector((state) =>
    selectIsDarkModePreferred(state)
  );

  // The dark mode settings from the current session
  const sessionTheme = useSelector((state) => selectIsDarkMode(state));

  const theme = preferredTheme === sessionTheme ? preferredTheme : sessionTheme;

  return [theme];
};

export default useDarkMode;
