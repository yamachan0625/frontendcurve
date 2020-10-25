import React from 'react';
import IconButton from '@material-ui/core/IconButton';

import { useStyles } from './HeadericonButtonStyle';

type Props = {
  label: string;
  edge?: 'start' | 'end' | false;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  className?: string;
};

export const HeadericonButton: React.FC<Props> = ({
  label,
  edge = 'start',
  onClick = () => {},
  className = '',
  children,
}) => {
  const classes = useStyles();

  return (
    <IconButton
      aria-label={label}
      edge={edge}
      onClick={onClick}
      className={className}
      classes={{ root: classes.iconButtonRoot }}
    >
      {children}
    </IconButton>
  );
};
