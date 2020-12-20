import React from 'react';
import { renderHook, act, cleanup } from '@testing-library/react-hooks';

import {
  SelectDatepickerProvider,
  useSelectDatepicker,
} from '~/contexts/page/barChart/selectDatepicker';

afterEach(() => cleanup());

describe('useSelectDatepicker', () => {
  it('selectDateの検証', () => {
    const wrapper = ({ children }) => (
      <SelectDatepickerProvider>{children}</SelectDatepickerProvider>
    );
    const { result } = renderHook(() => useSelectDatepicker(), {
      wrapper,
    });
    act(() => {
      result.current.callSetSelectDate(
        'Thu Dec 18 2020 21:37:50 GMT+0900 (日本標準時)'
      );
    });
    expect(result.current.selectDate).toEqual(
      new Date('Thu Dec 18 2020 21:37:50 GMT+0900 (日本標準時)')
    );
  });
});
