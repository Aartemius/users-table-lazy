import React from 'react';
import { render, screen } from '@testing-library/react';
import SubtitleText from '../SubtitleText';

test('renders SubtitleText component', () => {
  render(<SubtitleText textValue="Hello, World!" />);
  const element = screen.getByText(/Hello, World!/i);
  expect(element).toBeInTheDocument();
});
