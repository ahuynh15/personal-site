import { configureStore } from '@reduxjs/toolkit';
import ThemeReducer from '@/slices/ThemeSlice';
import ExperiencesReducer from '@/slices/ExperiencesSlice';
import PageReducer from '@/slices/PageSlice';
import SkillsReducer from '@/slices/SkillsSlice';

export default configureStore({
  reducer: {
    experiences: ExperiencesReducer,
    theme: ThemeReducer,
    page: PageReducer,
    skills: SkillsReducer,
  },
});
