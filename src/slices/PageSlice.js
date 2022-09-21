import { createSlice } from '@reduxjs/toolkit';
import pagesConfig from '@/constants/pagesConfig';

const PageSlice = createSlice({
  name: 'page',
  initialState: {
    index: 0,
    prevIndex: 0,
    isTransitioning: false,
  },
  reducers: {
    setPage: (state, action) => {
      state.prevIndex = state.index;
      state.index = action.payload.index;
      state.isTransitioning = true;
    },
    nextPage: (state) => {
      if (state.index + 1 <= pagesConfig.length - 1) {
        state.prevIndex = state.index;
        state.index += 1;
        state.isTransitioning = true;
      }
    },
    prevPage: (state) => {
      if (state.index - 1 >= 0) {
        state.prevIndex = state.index;
        state.index -= 1;
        state.isTransitioning = true;
      }
    },
    setIsTransitioning: (state, action) => {
      state.isTransitioning = action.payload.isTransitioning;
    },
  },
});

export const selectPage = (state) => state.page;

export const selectIsTransitioning = (state) => state.page.isTransitioning;

export const { setPage, nextPage, prevPage, setIsTransitioning } =
  PageSlice.actions;

export default PageSlice.reducer;
