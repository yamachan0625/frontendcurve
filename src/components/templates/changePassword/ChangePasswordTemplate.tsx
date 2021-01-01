import React from 'react';
import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { CHANGE_PASSWORD } from '~/queries/queries';
import useAuth, { useProtectRoute } from '~/contexts/auth';
import { useSideBarSelect } from '~/contexts/sideBarSelect';

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
  const { callSetSelectedIndex } = useSideBarSelect();

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

  React.useEffect(() => {
    callSetSelectedIndex(null);
  }, []);

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
            error={errors.currentPassword ? true : false}
            helperText={
              errors.currentPassword && errors.currentPassword.message
            }
            inputRef={register({
              required: '現在のパスワードは必須です',
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
          <TextField
            className={classes.formMargin}
            name="newPassword"
            label="新しいパスワード"
            color="secondary"
            fullWidth
            variant="outlined"
            error={errors.newPassword ? true : false}
            helperText={errors.newPassword && errors.newPassword.message}
            inputRef={register({
              required: '新しいパスワードは必須です',
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
          <TextField
            className={classes.formMargin}
            name="confirmNewPassword"
            label="新しいパスワード再入力"
            color="secondary"
            fullWidth
            variant="outlined"
            error={errors.confirmNewPassword ? true : false}
            helperText={
              errors.confirmNewPassword && errors.confirmNewPassword.message
            }
            inputRef={register({
              required: '新しいパスワード再入力は必須です',
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
          <Button
            variant="contained"
            fullWidth
            className={classes.formMargin}
            type="submit"
            data-testid="changePassword-submit-button"
          >
            パスワード変更
          </Button>
        </form>
      </div>
    </Container>
  );
};
