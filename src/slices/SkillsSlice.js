import { createSlice } from '@reduxjs/toolkit';

const SkillSlice = createSlice({
  name: 'skills',
  initialState: {
    toggledSkill: 'Front End Development',
  },
  reducers: {
    toggleSkill: (state, action) => {
      if (state.toggledSkill !== action.payload.skill) {
        state.toggledSkill = action.payload.skill;
      }
    },
  },
});

export const selectToggledSkilled = (state) => {
  return state.skills.toggledSkill;
};

export const { toggleSkill } = SkillSlice.actions;

export default SkillSlice.reducer;
