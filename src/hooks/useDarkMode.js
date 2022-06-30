import {
  selectIsDarkModePreferred,
  selectIsDarkMode,
} from '@/slices/ThemeSlice';
import { useSelector } from 'react-redux';

const useDarkMode = () => {
  // The dark mode settings from localStorage or browser settings
  const preferredMode = useSelector((state) =>
    selectIsDarkModePreferred(state)
  );

  // The dark mode settings from the current session
  const sessionMode = useSelector((state) => selectIsDarkMode(state));

  const mode = preferredMode === sessionMode ? preferredMode : sessionMode;

  return [mode];
};

export default useDarkMode;
