import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { setCookie } from 'nookies';
import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { DocumentNode } from 'graphql';

import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import useAuth from '~/contexts/auth';
import { AuthButton } from '~/components/atoms/auth/AuthButton';
import { useStyles } from './FormStyle';

type Props = {
  type: DocumentNode;
  dataKey: string;
  buttonText: string;
};

export const AuthForm: React.FC<Props> = ({ type, dataKey, buttonText }) => {
  const classes = useStyles();
  const router = useRouter();
  const { setUserData, showAleartMessage } = useAuth();
  const { register, handleSubmit, errors } = useForm();
  const [authFunc] = useMutation(type);

  const [isShowPassWord, setShowPassword] = React.useState(false);

  const onSubmit = async (
    { email, password }: { email: string; password: string },
    e
  ) => {
    try {
      const { data } = await authFunc({
        variables: { email, password },
      });

      setUserData(data[dataKey]);
      setCookie(null, 'userId', data[dataKey].userId, {
        maxAge: 60 * 60 * 24 * 7,
        httponly: true,
        path: '/',
      });

      e.target.reset();

      const authType = dataKey === 'login' ? 'ログイン' : '新規登録';
      showAleartMessage(`${authType}しました`);

      await router.push('/barChart');
    } catch (error) {
      showAleartMessage(error.message, 'error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        className={classes.formMargin}
        name="email"
        label="メールアドレス"
        fullWidth
        variant="outlined"
        error={errors.email ? true : false}
        helperText={errors.email && errors.email.message}
        inputRef={register({
          required: 'メールアドレスは必須です',
          pattern: {
            value: /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/,
            message: 'フォーマットが不適切です',
          },
        })}
      />
      <TextField
        id="password-field"
        type={isShowPassWord ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword((show) => !show)}
              >
                {isShowPassWord ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        className={classes.formMargin}
        name="password"
        label="パスワード"
        fullWidth
        variant="outlined"
        error={errors.password ? true : false}
        helperText={errors.password && errors.password.message}
        inputRef={register({
          required: 'パスワードは必須です',
          minLength: {
            value: 8,
            message: '8文字以上100文字以下で入力してください',
          },
          maxLength: {
            value: 100,
            message: '8文字以上100文字以下で入力してください',
          },
        })}
      />
      <AuthButton color="primary" type="submit">
        {buttonText}
      </AuthButton>
    </form>
  );
};
