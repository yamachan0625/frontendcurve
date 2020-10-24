import React from 'react';

import { useStyles } from './mainBodyStyle';

export const MainBody: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {children}
    </main>
  );
};
