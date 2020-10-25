import React from 'react';
import { SideBar } from '~/components/organisms/SideBar';
import { HeaderBar } from '~/components/organisms/HeaderBar';
import { MainBody } from '~/components/organisms/MainBody';

import { useStyles } from './MainTemplateStyle';
import { useMobileOpen } from '~/hooks/useMobileOpen';

export const MainTemplate = ({ children }) => {
  const classes = useStyles();

  const [mobileOpen, handleDrawerToggle] = useMobileOpen();

  return (
    <div className={classes.root}>
      <SideBar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <HeaderBar handleDrawerToggle={handleDrawerToggle} />
      <MainBody>{children}</MainBody>
    </div>
  );
};
