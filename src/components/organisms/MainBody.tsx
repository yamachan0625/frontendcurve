import React from 'react';

import { MainFooter } from '~/components/templates/MainFooter';
import { useStyles } from './MainBodyStyle';

export const MainBody: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
        <MainFooter />
      </main>
    </>
  );
};
