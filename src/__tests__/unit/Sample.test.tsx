import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '~/pages/index';

function sum(a, b) {
  return a + b;
}

describe('test', () => {
  test('sample test', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
