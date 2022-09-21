import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

// Reducers
import ThemeReducer from '@/slices/ThemeSlice';
import ExperiencesReducer from '@/slices/ExperiencesSlice';
import PageReducer from '@/slices/PageSlice';
import SkillsReducer from '@/slices/SkillsSlice';

function renderWithProviders(
  ui,
  { preloadedState = {}, ...renderOptions } = {},
) {
  const store = configureStore({
    reducer: {
      experiences: ExperiencesReducer,
      theme: ThemeReducer,
      page: PageReducer,
      skills: SkillsReducer,
    },
    preloadedState,
  });

  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  Wrapper.propTypes = {
    children: PropTypes.node,
  };

  Wrapper.defaultProps = {
    children: undefined,
  };

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export default renderWithProviders;
