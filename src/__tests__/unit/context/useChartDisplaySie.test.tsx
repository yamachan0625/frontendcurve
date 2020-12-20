import React from 'react';
import { renderHook, act, cleanup } from '@testing-library/react-hooks';
import {
  ChartDisplaySizeProvider,
  useChartDisplaySize,
} from '~/contexts/chartDisplaySize';

afterEach(() => cleanup());

describe('useChartDisplaySize', () => {
  it('chartDisplaySizeの検証', () => {
    const wrapper = ({ children }) => (
      <ChartDisplaySizeProvider>{children}</ChartDisplaySizeProvider>
    );
    const { result } = renderHook(() => useChartDisplaySize(), {
      wrapper,
    });
    expect(result.current.chartDisplaySize).toBe(6);
    act(() => {
      result.current.changeChartDisplaySize(12);
    });
    expect(result.current.chartDisplaySize).toBe(12);
  });
});
