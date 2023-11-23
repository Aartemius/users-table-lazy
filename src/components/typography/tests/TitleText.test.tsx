import React from 'react';
import { render, screen } from '@testing-library/react';
import TitleText from '../TitleText';

test('renders TitleText component', () => {
  render(<TitleText textValue="Hello, World!" fontWeight={700} />);
  const element = screen.getByText(/Hello, World!/i);
  expect(element).toBeInTheDocument();
  expect(element).toHaveStyle('font-weight: 700');
});
