import React from 'react';
import { renderHook, act, cleanup } from '@testing-library/react-hooks';
import { AuthProvider, useAuth } from '~/contexts/auth';
import { positions, Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
};

afterEach(() => cleanup());

describe('useAuth', () => {
  it('userの検証', () => {
    const wrapper = ({ children }) => (
      <Provider template={AlertTemplate} {...options}>
        <AuthProvider>{children}</AuthProvider>
      </Provider>
    );
    const { result } = renderHook(() => useAuth(), {
      wrapper,
    });
    const authMock = {
      refreshToken: 'vefvibeoububerw',
      token: 'cijerobvowuv',
      userId: 'verviebvpievbpe',
    };
    expect(result.current.user).toBe(null);
    act(() => {
      result.current.setUserData(authMock);
    });
    expect(result.current.user).toEqual(authMock);
  });

  it('loadingの検証', () => {
    const wrapper = ({ children }) => (
      <Provider template={AlertTemplate} {...options}>
        <AuthProvider>{children}</AuthProvider>
      </Provider>
    );
    const { result } = renderHook(() => useAuth(), {
      wrapper,
    });
    expect(result.current.loading).toBe(true);
    act(() => {
      result.current.setLoadingState(false);
    });
    expect(result.current.loading).toBe(false);
  });
});
