import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CHANGE_PASSWORD } from '~/queries/queries';
import useAuth, { useProtectRoute } from '~/contexts/auth';
import { MainTemplate } from '~/components/templates/MainTemplate';

import { NextPage } from 'next';

const Home: NextPage = () => {
  useProtectRoute();
  const {
    register: changePasswordRegister,
    handleSubmit: changePasswordHandleSubmit,
  } = useForm();

  const [chengePassword] = useMutation(CHANGE_PASSWORD);

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
    <MainTemplate>
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
    </MainTemplate>
  );
};

export default Home;
