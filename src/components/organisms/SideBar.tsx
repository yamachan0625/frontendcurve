import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { useTheme } from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import Divider from '@material-ui/core/Divider';

import List from '@material-ui/core/List';

import { DrawerItem } from '~/components/molecules/DrawerItem';
import { useStyles } from './SideBarStyle';

type Props = {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
};

const drawerItems = [
  {
    name: 'Dashboard',
    Icon: DashboardIcon,
    items: [
      {
        name: 'Comming soon...',
        link: '',
      },
    ],
  },
  {
    name: 'BarChart',
    link: '/barChart',
    Icon: BarChartIcon,
    isStyle: true,
  },
  {
    name: 'LineChart',
    link: '/lineChart',
    Icon: ShowChartIcon,
  },
];

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
          <List>
            <div className={classes.toolbar} />
            <Divider />
            {drawerItems.map((item, i) => {
              return <DrawerItem {...item} index={i} key={i} />;
            })}
          </List>
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
          <List>
            <div className={classes.toolbar} />
            <Divider />
            {drawerItems.map((item, i) => {
              return <DrawerItem {...item} index={i} key={i} />;
            })}
          </List>
        </Drawer>
      </Hidden>
    </nav>
  );
};
