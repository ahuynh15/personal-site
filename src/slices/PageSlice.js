import { createSlice } from '@reduxjs/toolkit';

const PageSlice = createSlice({
  name: 'page',
  initialState: {
    name: 'about',
    index: 0,
    prevIndex: 0,
  },
  reducers: {
    setPage: (state, action) => {
      state.prevIndex = state.index;
      state.name = action.payload.name;
      state.index = action.payload.index;
    },
  },
});

export const selectPage = (state) => state.page;

export const { setPage } = PageSlice.actions;

export default PageSlice.reducer;
