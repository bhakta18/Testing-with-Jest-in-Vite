// utils.test.js
import { add, fetchData } from './utils';

// Prompt used to generate this test:
// "Write a Jest test for an add function that sums two numbers."

test('adds two numbers', () => {
  expect(add(2, 3)).toBe(5);
  expect(add(-1, 1)).toBe(0);
});

// Prompt used to generate this test:
// "Write a Jest test for an async fetchData function that fetches data from an API."

test('fetches data from API', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ data: 'Sample Data' }),
    })
  );

  const data = await fetchData();
  expect(data).toEqual({ data: 'Sample Data' });
});
