import React from 'react';
import { Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useRootStore } from '~/contexts/rootStore';
import { useStyles } from '~/components/molecules/PlaceHolderStyle';

export const PlaceHolder: React.FC = () => {
  const classes = useStyles();
  const { chartDisplaySize } = useRootStore();

  return (
    <>
      {[0, 1, 2, 3, 4, 5].map((data) => (
        <Grid item xs={12} md={chartDisplaySize} key={data}>
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
