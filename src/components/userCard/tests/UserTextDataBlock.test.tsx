import React from 'react';
import { render, screen } from '@testing-library/react';
import UserTextDataBlock from '../UserTextDataBlock';

const mockProps = {
  blockName: 'Name',
  blockValue: 'John Doe',
  titleWeight: 700,
  style: { width: '50%', order: 1 },
  withBottomDivider: true,
};

test('renders UserTextDataBlock component with props', () => {
  render(<UserTextDataBlock {...mockProps} />);

  // Check if the titleWeight is applied to the title text
  const titleTextElement = screen.getByText(/John Doe/i);
  expect(titleTextElement).toHaveStyle('font-weight: 700');

  // Check if style prop is applied to the userTextDataBlock div
  const userTextDataBlockElement = screen.getByTestId('userTextDataBlock');
  expect(userTextDataBlockElement).toHaveStyle('width: 50%');
  expect(userTextDataBlockElement).toHaveStyle('order: 1');

  // Check if the bottom divider is rendered
  const dividerElement = screen.getByTestId('divider');
  expect(dividerElement).toBeInTheDocument();
});

test('renders UserTextDataBlock component without bottom divider', () => {
  const { rerender } = render(<UserTextDataBlock {...mockProps} withBottomDivider={false} />);

  // Check if the bottom divider is not rendered
  const dividerElement = screen.queryByTestId('divider');
  expect(dividerElement).not.toBeInTheDocument();

  rerender(<UserTextDataBlock blockName="Age" blockValue="25" />);
});
