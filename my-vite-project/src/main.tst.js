// ParentComponent.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ParentComponent from './ParentComponent';

// Prompt used to generate this test:
// "Write a Jest integration test that checks the interaction between a Button component and a parent component that updates a counter when the button is clicked."

test('increments count when button is clicked', () => {
  render(<ParentComponent />);

  const button = screen.getByText('Increment');
  const countText = screen.getByText('Count: 0');

  fireEvent.click(button);

  expect(countText.textContent).toBe('Count: 1');
});
