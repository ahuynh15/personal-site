import { configureStore } from '@reduxjs/toolkit';
import ThemeReducer from '@/slices/ThemeSlice';
import PageReducer from '@/slices/PageSlice';

export default configureStore({
  reducer: {
    theme: ThemeReducer,
    page: PageReducer,
  },
});
