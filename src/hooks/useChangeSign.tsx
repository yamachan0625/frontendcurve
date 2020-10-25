import React, { useCallback } from 'react';

export const useChangeSign = () => {
  const [isLogin, setLogin] = React.useState(true);

  const changeSign = useCallback(
    (isLogin: boolean) => {
      setLogin(isLogin);
    },
    [isLogin]
  );

  return [isLogin, changeSign] as const;
};
