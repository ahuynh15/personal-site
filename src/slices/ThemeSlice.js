import { createSlice } from '@reduxjs/toolkit';

const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    const colorMode =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
        ? 'dark'
        : 'light';

    if (colorMode === 'dark') {
      return 'dark';
    } else {
      return 'light';
    }
  } else {
    return 'light';
  }
};

const ThemeSlice = createSlice({
  name: 'theme',
  initialState: {
    preferred: getInitialTheme(),
    current: getInitialTheme(),
  },
  reducers: {
    setTheme: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const selectIsDarkModePreferred = (state) =>
  state.theme.preferred === 'dark';

export const selectIsDarkMode = (state) => state.theme.current === 'dark';

export const { setTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
