import { createSlice } from '@reduxjs/toolkit';

const ExperiencesSlice = createSlice({
  name: 'experiences',
  initialState: {
    filters: {
      active: [],
    },
  },
  reducers: {
    toggleFilter: (state, action) => {
      if (state.filters.active.includes(action.payload.tag)) {
        state.filters.active = state.filters.active.filter(
          (filter) => filter !== action.payload.tag,
        );
      } else {
        state.filters.active = [...state.filters.active, action.payload.tag];
      }
    },
    clearFilters: (state) => {
      state.filters.active = [];
    },
  },
});

export const selectActiveFilters = (state) => state.experiences.filters.active;

export const { toggleFilter, clearFilters } = ExperiencesSlice.actions;

export default ExperiencesSlice.reducer;
