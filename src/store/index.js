import ExperiencesReducer from '@/slices/ExperiencesSlice';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    experiences: ExperiencesReducer,
  },
});
