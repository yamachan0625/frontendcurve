import { useChangeSign } from '~/hooks/useChangeSign';
import { act, renderHook } from '@testing-library/react-hooks';
import { cleanup } from '@testing-library/react';

afterEach(() => cleanup());

describe('useChangeSign', () => {
  describe('changeSignの検証', () => {
    describe.each`
      isLogin  | expected
      ${true}  | ${true}
      ${false} | ${false}
    `('changeSignの引数に$isLoginが渡ってきた場合', ({ isLogin, expected }) => {
      it(`state(isLogin)に${isLogin}がセットされる`, () => {
        const { result } = renderHook(() => useChangeSign());
        act(() => {
          result.current.changeSign(isLogin);
        });
        expect(result.current.isLogin).toBe(expected);
      });
    });
  });
});
