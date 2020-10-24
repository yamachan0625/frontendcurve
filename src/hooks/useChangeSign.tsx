import React from 'react';

export const useChangeSign = () => {
  const [isLogin, setLogin] = React.useState(true);

  const changeSign = (isLogin: boolean) => {
    setLogin(isLogin);
  };

  return [isLogin, changeSign] as const;
};
