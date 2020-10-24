import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';

import { useStyles } from './drawerItemStyle';
import { useSelectedIndex } from '~/hooks/useSelectedIndex';

export const DrawerItem: React.FC = () => {
  const classes = useStyles();
  const [selectedIndex, handleListItemClick] = useSelectedIndex();

  return (
    <div>
      <div className={classes.toolbar} />
      <Divider classes={{ root: classes.DividerRoot }} />
      <List>
        {['Dashboard', 'User'].map((text, index) => (
          <ListItem
            classes={{
              selected: classes.ListItemSelected,
            }}
            button
            selected={selectedIndex === index}
            onClick={() => handleListItemClick(index)}
            key={text}
          >
            <ListItemIcon classes={{ root: classes.iconRoot }}>
              <DashboardIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={text}
              classes={{ primary: classes.ListItemTextRoot }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
