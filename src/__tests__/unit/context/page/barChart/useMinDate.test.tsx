import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { MinDatetProvider, useMinDate } from '~/contexts/page/barChart/minDate';
describe('useMinDate', () => {
  it('callSetMinDateの検証', () => {
    const wrapper = ({ children }) => (
      <MinDatetProvider>{children}</MinDatetProvider>
    );
    const { result } = renderHook(() => useMinDate(), {
      wrapper,
    });
    expect(result.current.minDate).toBe(null);
    act(() => {
      result.current.callSetMinDate(
        'Tue Oct 13 2020 18:04:32 GMT+0900 (日本標準時)'
      );
    });
    expect(result.current.minDate).toBe(
      'Tue Oct 13 2020 18:04:32 GMT+0900 (日本標準時)'
    );
  });
});
