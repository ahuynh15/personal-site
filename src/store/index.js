import EducationReducer from '@/slices/EducationSlice';
import ExperiencesReducer from '@/slices/ExperiencesSlice';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    experiences: ExperiencesReducer,
    education: EducationReducer,
  },
});
