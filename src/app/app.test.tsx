import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './app';

test('app rendering', () => {
  render(<App />);

  const appWrapper = screen.getByTestId('app-wrapper');

  expect(appWrapper).toBeInTheDocument();
});
