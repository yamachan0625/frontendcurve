import React from 'react';
import { renderHook, act, cleanup } from '@testing-library/react-hooks';

import {
  SideBarSelectProvider,
  useSideBarSelect,
} from '~/contexts/sideBarSelect';

afterEach(() => cleanup());

describe('useSideBarSelect', () => {
  it('sideBarSelectの検証', () => {
    const wrapper = ({ children }) => (
      <SideBarSelectProvider>{children}</SideBarSelectProvider>
    );
    const { result } = renderHook(() => useSideBarSelect(), {
      wrapper,
    });
    expect(result.current.selectedIndex).toBe(1);
    act(() => {
      result.current.callSetSelectedIndex(2);
    });
    expect(result.current.selectedIndex).toBe(2);
  });
});
