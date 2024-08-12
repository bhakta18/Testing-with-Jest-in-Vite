// Button.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

// Prompt used to generate this test:
// "Write a Jest test for a React Button component that checks if the onClick function is called when the button is clicked."

test('calls onClick when button is clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click Me</Button>);

  const button = screen.getByText('Click Me');
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
