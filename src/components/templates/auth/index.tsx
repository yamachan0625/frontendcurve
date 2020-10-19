import React, { useState } from 'react';
import { Container } from '@material-ui/core';

import { LOGIN, SIGNUP } from '~/queries/queries';
import { AuthWrapper } from '~/components/organisms/auth/index';

const AuthTemplate: React.FC = () => {
  const [isLogin, setLogin] = useState(true);

  const changeAuth = (isLogin: boolean) => {
    setLogin(isLogin);
  };

  return (
    <>
      <Container maxWidth="xs">
        {isLogin ? (
          <AuthWrapper
            type={LOGIN}
            dataKey="login"
            title="Login to your acount"
            buttonText="ログイン"
            sepalateText="アカウントをお持ちでない方"
            onClick={() => changeAuth(false)}
          >
            アカウント登録する
          </AuthWrapper>
        ) : (
          <AuthWrapper
            type={SIGNUP}
            dataKey="signup"
            title="Sign Up"
            buttonText="アカウント登録"
            sepalateText="既にアカウントをお持ちの方"
            onClick={() => changeAuth(true)}
          >
            ログインする
          </AuthWrapper>
        )}
      </Container>
    </>
  );
};

export default AuthTemplate;
