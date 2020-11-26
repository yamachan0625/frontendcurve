import React from 'react';
import { NextPage } from 'next';

import { MainTemplate } from '~/components/templates/MainTemplate';
import { WithTheme } from '~/components/templates/WithTheme';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      textAlign: 'center',
      fontSize: '24px',
    },
  })
);

const Custom404: NextPage = () => {
  const classes = useStyles();

  return (
    <WithTheme>
      <MainTemplate>
        <div className={classes.container}>
          <div>404 Page Not Fonud</div>
          <div>お探しのページは見つかりませんでした</div>
        </div>
      </MainTemplate>
    </WithTheme>
  );
};

export default Custom404;
