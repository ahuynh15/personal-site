import React from 'react';
import '@testing-library/jest-dom';
import { act, screen } from '@testing-library/react';
import renderWithProviders from '@/lib/testUtils/renderWithProviders';
import ContactPageWrapper from './ContactPageWrapper';

describe('Contact Page Wrapper...', () => {
  test('should render the correct title', () => {
    // Render the component
    act(() => {
      renderWithProviders(<ContactPageWrapper />);
    });

    expect(screen.getByText(/I can be reached at.../)).toBeInTheDocument();
  });
});
