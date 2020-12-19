import React from 'react';
import { renderHook, act, cleanup } from '@testing-library/react-hooks';

import {
  DateRangeProvider,
  useDateRange,
} from '~/contexts/page/lineChart/dateRange';

afterEach(() => cleanup());

describe('useDateRange', () => {
  it('dataRangeの検証', () => {
    const wrapper = ({ children }) => (
      <DateRangeProvider>{children}</DateRangeProvider>
    );
    const { result } = renderHook(() => useDateRange(), {
      wrapper,
    });
    expect(result.current.selectedDateRange).toBe('1週間');
    act(() => {
      result.current.callSetRangeDate('1ヶ月');
    });
    expect(result.current.selectedDateRange).toBe('1ヶ月');
  });
});
