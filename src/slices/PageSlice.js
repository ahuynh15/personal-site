import { createSlice } from '@reduxjs/toolkit';
import { pages } from '@/constants/pages';

const PageSlice = createSlice({
  name: 'page',
  initialState: {
    index: 0,
    prevIndex: 0,
  },
  reducers: {
    setPage: (state, action) => {
      state.prevIndex = state.index;
      state.index = action.payload.index;
    },
    nextPage: (state) => {
      if (state.index + 1 <= pages.length - 1) {
        state.prevIndex = state.index;
        state.index = state.index + 1;
      }
    },
    prevPage: (state) => {
      if (state.index - 1 >= 0) {
        state.prevIndex = state.index;
        state.index = state.index - 1;
      }
    },
  },
});

export const selectPage = (state) => state.page;

export const { setPage, nextPage, prevPage } = PageSlice.actions;

export default PageSlice.reducer;
