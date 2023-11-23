import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);

  // Check if the preloader renders
  const appElement = screen.getByTestId('app');
  expect(appElement).toBeInTheDocument();
});
