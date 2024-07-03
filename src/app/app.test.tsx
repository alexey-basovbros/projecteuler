import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './app';

test('app rendering', () => {
  render(<App />);

  const appHeader = screen.getByText(/App component/i);

  expect(appHeader).toBeInTheDocument();
});
