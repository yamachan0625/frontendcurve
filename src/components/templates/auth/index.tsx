import React from 'react';
import { Container } from '@material-ui/core';

import { AuthWrapper } from '~/components/organisms/auth/index';
import { useChangeSign } from '~/hooks/useChangeSign';
import { useLoginMutation, useSignupMutation } from '~/types.d';

const AuthTemplate: React.FC = () => {
  const { isLogin, changeSign } = useChangeSign();
  const loginMutation = useLoginMutation();
  const signupMutation = useSignupMutation();

  return (
    <>
      <Container maxWidth="xs">
        {isLogin ? (
          <AuthWrapper
            mutation={loginMutation[0]}
            dataKey="login"
            title="Login to your acount"
            buttonText="ログイン"
            sepalateText="アカウントをお持ちでない方"
            onClick={() => changeSign(false)}
          >
            アカウント登録する
          </AuthWrapper>
        ) : (
          <AuthWrapper
            mutation={signupMutation[0]}
            dataKey="signup"
            title="Sign Up"
            buttonText="アカウント登録"
            sepalateText="既にアカウントをお持ちの方"
            onClick={() => changeSign(true)}
          >
            ログインする
          </AuthWrapper>
        )}
      </Container>
    </>
  );
};

export default AuthTemplate;
