import React from 'react';
import '@testing-library/jest-dom';
import { act, screen } from '@testing-library/react';
import renderWithProviders from '@/lib/testUtils/renderWithProviders';
import ExperiencePageWrapper from './ExperiencePageWrapper';

describe('Experience Page Wrapper...', () => {
  test('should render the correct title', () => {
    // Render the component
    act(() => {
      renderWithProviders(<ExperiencePageWrapper />);
    });

    expect(screen.getByText(/I have worked at.../)).toBeInTheDocument();
  });
});
