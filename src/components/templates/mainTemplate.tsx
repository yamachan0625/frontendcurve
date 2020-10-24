import React from 'react';
import { SideBar } from '~/components/organisms/sideBar';
import { HeaderBar } from '~/components/organisms/headerBar';
import { MainBody } from '~/components/organisms/mainBody';

import { useStyles } from './mainTemplateStyle';
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
