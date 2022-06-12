import DarkModeReducer from '@/slices/DarkModeSlice';
import EducationReducer from '@/slices/EducationSlice';
import ExperiencesReducer from '@/slices/ExperiencesSlice';
import SidebarReducer from '@/slices/SidebarSlice';

import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    experiences: ExperiencesReducer,
    education: EducationReducer,
    sidebar: SidebarReducer,
    darkMode: DarkModeReducer,
  },
});
