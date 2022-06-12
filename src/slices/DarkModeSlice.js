import { createSlice } from '@reduxjs/toolkit';

const DarkModeSlice = createSlice({
  name: 'darkMode',
  initialState: {
    enabled: false,
  },
  reducers: {
    setDarkMode: (state, action) => {
      state.enabled = action.payload;
    },
  },
});

export const selectDarkMode = (state) => state.darkMode.enabled;

export const { setDarkMode } = DarkModeSlice.actions;

export default DarkModeSlice.reducer;
