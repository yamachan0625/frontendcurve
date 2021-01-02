import React from 'react';
import Link from 'next/link';

import { LoginMutationFn, SignupMutationFn } from '~/types.d';
import { useStyles } from './indexStyle';
import { AuthForm } from '~/components/molecules/auth/Form';
import { AuthButton } from '~/components/atoms/auth/AuthButton';
//MEMO: 絶対パスで指定すると読み込めなかった
import LogoIcon from '../../../svgs/logo.svg';

type Props = {
  mutation: LoginMutationFn | SignupMutationFn;
  dataKey: string;
  title: string;
  buttonText: string;
  sepalateText: string;
  onClick: () => void;
};

export const AuthWrapper: React.FC<Props> = ({
  mutation,
  dataKey,
  title,
  buttonText,
  sepalateText,
  onClick,
  children,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <Link href="/barChart">
        <a>
          <LogoIcon width="50px" />
        </a>
      </Link>
      <div className={`${classes.title}`} data-testid="auth-title">
        {title}
      </div>
      <AuthForm mutation={mutation} dataKey={dataKey} buttonText={buttonText} />
      <div className={classes.sepalater}>{sepalateText}</div>
      <AuthButton
        color="default"
        type="button"
        onClick={onClick}
        testId="change-auth-button"
      >
        {children}
      </AuthButton>
    </div>
  );
};
