import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { useTheme } from '@material-ui/core/styles';

import { DrawerItem } from '~/components/molecules/drawerItem';
import { useStyles } from './sideBarStyle';

type Props = {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
};

export const SideBar: React.FC<Props> = ({
  mobileOpen,
  handleDrawerToggle,
}) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* SP表示用コンテンツ */}
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <DrawerItem />
        </Drawer>
      </Hidden>
      {/* PC表示用コンテンツ */}
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <DrawerItem />
        </Drawer>
      </Hidden>
    </nav>
  );
};
