import React from 'react';
import { useForm } from 'react-hook-form';
import { setCookie } from 'nookies';
import Link from 'next/link';
import { useMutation } from '@apollo/client';
import { LOGIN, SIGNUP, CHANGE_PASSWORD } from '~/queries/queries';
import useAuth from '~/contexts/auth';

import { NextPage } from 'next';

const Home: NextPage = () => {
  const { register, handleSubmit } = useForm();
  const [login] = useMutation(LOGIN);

  const {
    register: signupRegister,
    handleSubmit: signupHandleSubmit,
  } = useForm();

  const [signup] = useMutation(SIGNUP);

  const {
    register: changePasswordRegister,
    handleSubmit: changePasswordHandleSubmit,
  } = useForm();

  const [chengePassword] = useMutation(CHANGE_PASSWORD);

  const { setUserData, logout } = useAuth();

  const onSubmit = async ({ email, password }, e) => {
    const { data } = await login({ variables: { email, password } });
    setUserData(data.login);

    setCookie(null, 'userId', data.login.userId, {
      maxAge: 60 * 60 * 24 * 7,
      httponly: true,
      path: '/',
    });

    e.target.reset();
  };

  const onSignup = async ({ email, password }, e) => {
    const { data } = await signup({ variables: { email, password } });
    setUserData(data.signup);

    setCookie(null, 'userId', data.signup.userId, {
      maxAge: 60 * 60 * 24 * 7,
      httponly: true,
      path: '/',
    });

    e.target.reset();
  };

  const onChangePassword = async (
    { currentPassword, newPassword, confirmNewPassword },
    e
  ) => {
    const { data } = await chengePassword({
      variables: { currentPassword, newPassword, confirmNewPassword },
    });
    console.log(data);
    e.target.reset();
  };

  return (
    <>
      <Link href="/example">
        <a>Exampleに飛ぶよ</a>
      </Link>
      <form onSubmit={signupHandleSubmit(onSignup)}>
        <input
          name="email"
          type="text"
          placeholder="メールアドレス"
          ref={signupRegister}
        />
        <input
          name="password"
          type="text"
          placeholder="パスワード"
          ref={signupRegister}
        />
        <button type="submit">新規登録</button>
      </form>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="email"
          type="text"
          placeholder="メールアドレス"
          ref={register}
        />
        <input
          name="password"
          type="text"
          placeholder="パスワード"
          ref={register}
        />
        <button type="submit">ログイン</button>
      </form>

      <form onSubmit={changePasswordHandleSubmit(onChangePassword)}>
        <input
          name="currentPassword"
          type="text"
          placeholder="現在のパスワード"
          ref={changePasswordRegister}
        />
        <input
          name="newPassword"
          type="text"
          placeholder="新しいパスワード"
          ref={changePasswordRegister}
        />
        <input
          name="confirmNewPassword"
          type="text"
          placeholder="新しいパスワード再入力"
          ref={changePasswordRegister}
        />
        <button type="submit">パスワード変更</button>
      </form>

      <button onClick={logout}>ログアウト</button>
    </>
  );
};

export async function getServerSideProps() {
  return { props: { 1: 'aaaa', 2: 'bbbb' } };
}

export default Home;
