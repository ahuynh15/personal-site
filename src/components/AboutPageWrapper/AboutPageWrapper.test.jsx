import React from 'react';
import '@testing-library/jest-dom';
import { act, screen } from '@testing-library/react';
import renderWithProviders from '@/lib/testUtils/renderWithProviders';
import AboutPageWrapper from './AboutPageWrapper';

describe('About Page Wrapper...', () => {
  test('should render the correct title', () => {
    // Render the component
    act(() => {
      renderWithProviders(<AboutPageWrapper />);
    });

    expect(screen.getByText(/Hello, I'm Alvin Huynh/)).toBeInTheDocument();
  });
});
