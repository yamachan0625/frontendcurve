import React from 'react';
import { renderHook, act, cleanup } from '@testing-library/react-hooks';

import {
  SortOrderProvider,
  useSortOrder,
} from '~/contexts/page/barChart/sortOrder';

afterEach(() => cleanup());

describe('useSortOrder', () => {
  it('sortOrderの検証', () => {
    const wrapper = ({ children }) => (
      <SortOrderProvider>{children}</SortOrderProvider>
    );
    const { result } = renderHook(() => useSortOrder(), {
      wrapper,
    });
    expect(result.current.sortOrder).toBe('デフォルト');
    act(() => {
      result.current.callSetSortOrder('降順');
    });
    expect(result.current.sortOrder).toBe('降順');
  });
});
