import React from 'react';
import '@testing-library/jest-dom';
import { act, screen } from '@testing-library/react';
import renderWithProviders from '@/lib/testUtils/renderWithProviders';
import EducationPageWrapper from './EducationPageWrapper';

describe('Education Page Wrapper...', () => {
  test('should render the correct title', () => {
    // Render the component
    act(() => {
      renderWithProviders(<EducationPageWrapper />);
    });

    expect(screen.getByText(/I have completed.../)).toBeInTheDocument();
  });
});
