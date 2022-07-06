import { configureStore } from '@reduxjs/toolkit';
import ThemeReducer from '@/slices/ThemeSlice';
import EducationReducer from '@/slices/EducationSlice';
import ExperiencesReducer from '@/slices/ExperiencesSlice';
import SidebarReducer from '@/slices/SidebarSlice';
import PageReducer from '@/slices/PageSlice';
import SkillsReducer from '@/slices/SkillsSlice';

export default configureStore({
  reducer: {
    experiences: ExperiencesReducer,
    education: EducationReducer,
    sidebar: SidebarReducer,
    theme: ThemeReducer,
    page: PageReducer,
    skills: SkillsReducer,
  },
});
