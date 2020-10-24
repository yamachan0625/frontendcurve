import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconButtonRoot: {
      color: '#000',
    },
  })
);

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
