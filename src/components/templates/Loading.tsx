import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
  })
);

export const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CircularProgress color="secondary" />
    </div>
  );
};
