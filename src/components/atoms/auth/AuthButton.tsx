import React from 'react';
import { Button } from '@material-ui/core';

import { useStyles } from './AuthButtonStyle';
import { PropTypes } from '@material-ui/core';

type Props = {
  color?: PropTypes.Color;
  type: 'button' | 'reset' | 'submit';
  onClick?: () => void;
  testId?: string;
};

export const AuthButton: React.FC<Props> = ({
  color,
  type,
  onClick = () => {},
  children,
  testId = '',
}) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      fullWidth
      className={classes.formMargin}
      color={color}
      type={type}
      onClick={onClick}
      data-testid={testId}
    >
      {children}
    </Button>
  );
};
