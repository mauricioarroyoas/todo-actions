import { render, screen } from '@testing-library/react';
import Todo from './Todo';

test('renders Todo title', () => {
  render(<Todo />);
  expect(screen.getByText(/todo list/i)).toBeInTheDocument();
});
