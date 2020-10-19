import React from 'react';
import { DocumentNode } from 'graphql';

import { useStyles } from './indexStyle';
import { AuthForm } from '~/components/molecules/auth/Form';
import { AuthButton } from '~/components/atoms/auth/AuthButton';

type Props = {
  type: DocumentNode;
  dataKey: string;
  title: string;
  buttonText: string;
  sepalateText: string;
  onClick: () => void;
};

export const AuthWrapper: React.FC<Props> = ({
  type,
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
      <div className={classes.title}>{title}</div>
      <AuthForm type={type} dataKey={dataKey} buttonText={buttonText} />
      <div className={classes.sepalater}>{sepalateText}</div>
      <AuthButton color="inherit" type="button" onClick={onClick}>
        {children}
      </AuthButton>
    </div>
  );
};
