import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '~/pages/index';

describe('test', () => {
  test('sample test', () => {
    render(<Home />);
    expect(screen.getByText('Hello Next.js'));
  });
});
