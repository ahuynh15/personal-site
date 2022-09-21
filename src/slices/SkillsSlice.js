import { createSlice } from '@reduxjs/toolkit';

const SkillSlice = createSlice({
  name: 'skills',
  initialState: {
    toggledSkill: { name: null, index: null },
  },
  reducers: {
    toggleSkill: (state, action) => {
      state.toggledSkill = {
        name: action.payload.name,
        index: action.payload.index,
      };
    },
  },
});

export const selectToggledSkilled = (state) => ({
  name: state.skills.toggledSkill.name,
  index: state.skills.toggledSkill.index,
});

export const { toggleSkill } = SkillSlice.actions;

export default SkillSlice.reducer;
