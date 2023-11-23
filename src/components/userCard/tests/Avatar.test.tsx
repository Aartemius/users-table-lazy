import React from 'react';
import { render, screen } from '@testing-library/react';
import Avatar from '../Avatar';

const mockImage = {
  large: 'large.jpg',
  thumbnail: 'thumbnail.jpg',
};

const mockName = {
  first: 'John',
  last: 'Doe',
};


test('renders Avatar component', () => {
  render(<Avatar image={mockImage} name={mockName} />);

  const imageElement = screen.getByAltText(`${mockName.first} ${mockName.last}`);
  expect(imageElement).toBeInTheDocument();

  const expectedSource = mockImage.large;
  expect(imageElement).toHaveAttribute('src', expectedSource);
});
