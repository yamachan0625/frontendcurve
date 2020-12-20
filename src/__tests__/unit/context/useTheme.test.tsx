import React from 'react';
import { renderHook, act, cleanup } from '@testing-library/react-hooks';

import { ThemeContextProvider, useTheme } from '~/contexts/theme';
import { darkTheme } from '~/styles/theme/darkTheme';
import { lightTheme } from '~/styles/theme/lightTheme';

afterEach(() => cleanup());

describe('useTheme', () => {
  it('themeの検証', () => {
    const wrapper = ({ children }) => (
      <ThemeContextProvider>{children}</ThemeContextProvider>
    );
    const { result } = renderHook(() => useTheme(), {
      wrapper,
    });
    expect(result.current.theme).toEqual(lightTheme);
    act(() => {
      result.current.handleThemeChange('DARK');
    });
    expect(result.current.theme).toEqual(darkTheme);
  });
});
