import { createSlice } from '@reduxjs/toolkit';

/**
 * TODO:
 * - Retrive education from API
 */

const EducationSlice = createSlice({
  name: 'education',
  initialState: {
    data: [
      {
        title: 'Education',
        location: 'Location',
        startDate: { year: 2020, month: 7 },
        endDate: { year: 2021, month: 8 },
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        additionalHeaders: ['Tag A'],
      },
      {
        title: 'Education',
        location: 'Location',
        startDate: { year: 2020, month: 7 },
        endDate: { year: 2021, month: 8 },
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        additionalHeaders: ['Tag B'],
      },
      {
        title: 'Education',
        location: 'Location',
        startDate: { year: 2020, month: 7 },
        endDate: { year: 2021, month: 8 },
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        additionalHeaders: ['Tag C'],
      },
      {
        title: 'Education',
        location: 'Location',
        startDate: { year: 2020, month: 7 },
        endDate: { year: 2021, month: 8 },
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        additionalHeaders: ['Tag D'],
      },
    ],
  },
  reducers: {},
});

export default EducationSlice.reducer;
