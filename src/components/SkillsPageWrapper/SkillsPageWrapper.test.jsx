import React from 'react';
import '@testing-library/jest-dom';
import { act, screen } from '@testing-library/react';
import renderWithProviders from '@/lib/testUtils/renderWithProviders';
import SkillsPageWrapper from './SkillsPageWrapper';

describe('Skills Page Wrapper...', () => {
  test('should render the correct title', () => {
    // Render the component
    act(() => {
      renderWithProviders(<SkillsPageWrapper />);
    });

    expect(screen.getByText(/I have experience with.../)).toBeInTheDocument();
  });
});
