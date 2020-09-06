import React from 'react';
import { useForm } from 'react-hook-form';
import { setCookie } from 'nookies';
import Link from 'next/link';
import { useMutation } from '@apollo/client';
import { LOGIN } from '~/queries/queries';
import useAuth from '../contexts/auth';

import { NextPage } from 'next';

const Home: NextPage = () => {
  const { register, handleSubmit } = useForm();
  const [login] = useMutation(LOGIN);
  const { userLogin, logout } = useAuth();

  const onSubmit = async ({ email, password }, e) => {
    const { data } = await login({ variables: { email, password } });
    userLogin(data);
    setCookie(null, 'token', data.login.token, {
      maxAge: 30 * 24 * 60 * 60,
      httponly: true,
      path: '/',
    });
    e.target.reset();
  };

  return (
    <>
      <div>Hello Next.js</div>
      <Link href="/example">
        <a>Example</a>
      </Link>
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
      <button onClick={logout}>ログアウト</button>
    </>
  );
};

export async function getServerSideProps() {
  return { props: { 1: 'aaaa', 2: 'bbbb' } };
}

export default Home;
