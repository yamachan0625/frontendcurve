import { useMobileOpen } from '~/hooks/useMobileOpen';
import { act, renderHook } from '@testing-library/react-hooks';
import { cleanup } from '@testing-library/react';

afterEach(() => cleanup());

describe('useMobileOpen', () => {
  describe('handleDrawerToggleの検証', () => {
    it('handleDrawerToggleを1回コールするとmobileOpenがtrueになる', () => {
      const { result } = renderHook(() => useMobileOpen());
      act(() => {
        result.current.handleDrawerToggle();
      });
      expect(result.current.mobileOpen).toBe(true);
    });

    it('handleDrawerToggleを２回コールするとmobileOpenがfalseになる', () => {
      const { result } = renderHook(() => useMobileOpen());
      act(() => {
        result.current.handleDrawerToggle();
      });
      act(() => {
        result.current.handleDrawerToggle();
      });
      expect(result.current.mobileOpen).toBe(false);
    });
  });
});
