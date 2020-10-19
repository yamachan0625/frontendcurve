import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { setCookie } from 'nookies';
import { TextField } from '@material-ui/core';
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
  const router = useRouter();
  const classes = useStyles();
  const { setUserData } = useAuth();

  const { register, handleSubmit, errors } = useForm();
  const [authFunc] = useMutation(type);

  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (
    { email, password }: { email: string; password: string },
    e
  ) => {
    try {
      const { data } = await authFunc({
        variables: { email, password },
      });
      console.log(data);

      setUserData(data[dataKey]);

      setCookie(null, 'userId', data[dataKey].userId, {
        maxAge: 60 * 60 * 24 * 7,
        httponly: true,
        path: '/',
      });

      e.target.reset();
      await router.push('/');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      {/* {errorMessage && <Alert severity="error">{errorMessage}</Alert>} */}
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
    </>
  );
};
