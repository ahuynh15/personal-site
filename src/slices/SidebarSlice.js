import { createSlice } from '@reduxjs/toolkit';

const SidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    // Sections of the website in order
    pageSections: {
      about: { id: 'about', order: 1, visible: true },
      skills: { id: 'skills', order: 2, visible: false },
      experience: { id: 'experience', order: 3, visible: false },
      education: { id: 'education', order: 4, visible: false },
      contact: { id: 'contact', order: 5, visible: false },
    },
  },
  reducers: {
    setPageAnchor: (state, action) => {
      state.pageSections[action.payload.pageAnchor] = {
        ...state.pageSections[action.payload.pageAnchor],
        visible: action.payload.visible,
      };
    },
  },
});

export const selectPageSections = (state) =>
  Object.keys(state.sidebar.pageSections);

export const selectCurrentSection = (state) => {
  let visibleSections = Object.values(state.sidebar.pageSections).filter(
    (value) => value.visible,
  );

  // If multiple sections are visible, choose the highest order
  if (visibleSections.length > 0) {
    let currentSection = visibleSections[0];
    for (let i = 0; i < visibleSections.length; i = i + 1) {
      if (visibleSections[i].order > currentSection.order) {
        currentSection = visibleSections[i];
      }
    }
    return currentSection.id;
  }

  return '';
};

export const { setPageAnchor } = SidebarSlice.actions;

export default SidebarSlice.reducer;
