import React from 'react';
import { Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useStyles } from '~/components/molecules/PlaceHolderStyle';

export const PlaceHolder: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      {[0, 1, 2, 3, 4, 5].map((data) => (
        <Grid item xs={12} md={6} key={data}>
          <div className={classes.placeHolder}>
            <div className={classes.circle}>
              <CircularProgress color="secondary" />
            </div>
          </div>
        </Grid>
      ))}
    </>
  );
};
