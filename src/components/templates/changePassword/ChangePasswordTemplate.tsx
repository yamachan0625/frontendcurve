import React from 'react';
import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Container } from '@material-ui/core';

import { CHANGE_PASSWORD } from '~/queries/queries';
import useAuth, { useProtectRoute } from '~/contexts/auth';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(4, 2),
    },
    title: {
      fontSize: '24px',
    },
    formMargin: {
      margin: theme.spacing(2, 0),
    },
  })
);

export const ChangePasswordTemplate: NextPage = () => {
  useProtectRoute();
  const classes = useStyles();
  const { user, showAleartMessage } = useAuth();
  const { register, handleSubmit, errors } = useForm();

  const [chengePassword] = useMutation(CHANGE_PASSWORD);

  const onChangePassword = async (
    { currentPassword, newPassword, confirmNewPassword },
    e
  ) => {
    try {
      const { data } = await chengePassword({
        variables: { currentPassword, newPassword, confirmNewPassword },
      });

      showAleartMessage(
        data.changePassword.password && 'パスワードを変更しました',
        'success'
      );

      e.target.reset();
    } catch (error) {
      showAleartMessage(error.message, 'error');
    }
  };

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <div className={classes.title}>{user && user.user.email}さん</div>
        <div className={classes.title}>パスワード変更</div>
        <form onSubmit={handleSubmit(onChangePassword)}>
          <TextField
            className={classes.formMargin}
            name="currentPassword"
            label="現在のパスワード"
            color="secondary"
            fullWidth
            variant="outlined"
            error={errors.email ? true : false}
            helperText={errors.email && errors.email.message}
            inputRef={register({
              required: '現在のパスワードは必須です',
            })}
          />
          <TextField
            className={classes.formMargin}
            name="newPassword"
            label="新しいパスワード"
            color="secondary"
            fullWidth
            variant="outlined"
            error={errors.email ? true : false}
            helperText={errors.email && errors.email.message}
            inputRef={register({
              required: '新しいパスワードは必須です',
            })}
          />
          <TextField
            className={classes.formMargin}
            name="confirmNewPassword"
            label="新しいパスワード"
            color="secondary"
            fullWidth
            variant="outlined"
            error={errors.email ? true : false}
            helperText={errors.email && errors.email.message}
            inputRef={register({
              required: '新しいパスワード再入力は必須です',
            })}
          />
          <Button
            variant="contained"
            fullWidth
            className={classes.formMargin}
            type="submit"
          >
            パスワード変更
          </Button>
        </form>
      </div>
    </Container>
  );
};
