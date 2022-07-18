import { createSlice } from '@reduxjs/toolkit';

const ExperiencesSlice = createSlice({
  name: 'experiences',
  initialState: {
    data: [
      {
        id: 1,
        title: 'Position',
        startDate: { year: 2020, month: 7 },
        endDate: { year: 2021, month: 8 },
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tags: ['Tag A'],
      },
      {
        id: 2,
        title: 'Position',
        startDate: { year: 2020, month: 7 },
        endDate: { year: 2021, month: 8 },
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tags: ['Tag B'],
      },
      {
        id: 3,
        title: 'Position',
        startDate: { year: 2020, month: 7 },
        endDate: { year: 2021, month: 8 },
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tags: ['Tag C'],
      },
      {
        id: 4,
        title: 'Position',
        startDate: { year: 2020, month: 7 },
        endDate: { year: 2021, month: 8 },
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tags: ['Tag A', 'Tag B', 'Tag C'],
      },
    ],
    filters: {
      active: [],
      options: [],
    },
  },
  reducers: {
    toggleFilter: (state, action) => {
      if (state.filters.active.includes(action.payload.tag)) {
        state.filters.active = state.filters.active.filter(
          (filter) => filter !== action.payload.tag
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

// Return the list of filtered experiences
export const selectFilteredExperiences = (state) => {
  if (state.experiences.filters.active.length > 0) {
    return state.experiences.data.filter((experience) => {
      return state.experiences.filters.active.every((tag) =>
        experience.tags.includes(tag)
      );
    });
  } else {
    return state.experiences.data;
  }
};

export const { toggleFilter, clearFilters } = ExperiencesSlice.actions;

export default ExperiencesSlice.reducer;
