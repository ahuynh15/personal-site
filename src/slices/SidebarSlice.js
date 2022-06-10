import { createSlice } from '@reduxjs/toolkit';

const SidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    pageAnchors: ['about', 'skills', 'experience', 'education', 'contact'],
    currentAnchor: 'about',
  },
  reducers: {
    setPageAnchor: (state, action) => {
      if (state.currentAnchor !== action.payload.pageAnchor) {
        state.currentAnchor = action.payload.pageAnchor;
      }
    },
  },
});

export const selectPageAnchors = (state) => state.sidebar.pageAnchors;

export const selectCurrentAnchor = (state) => state.sidebar.currentAnchor;

export const { setPageAnchor } = SidebarSlice.actions;

export default SidebarSlice.reducer;
