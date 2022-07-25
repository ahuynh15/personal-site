import React from 'react';
import '@testing-library/jest-dom';
import { act, screen } from '@testing-library/react';
import renderWithProviders from '@/lib/testUtils/renderWithProviders';
import Title from './Title';

describe('Title...', () => {
  test('should render the correct text', () => {
    // Render the component
    act(() => {
      renderWithProviders(<Title text="This is a test!" />);
    });

    expect(screen.getByText(/This is a test!/)).toBeInTheDocument();
  });
});
