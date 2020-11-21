import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon';
import Link from 'next/link';

import { useStyles } from './DrawerItemStyle';
import { useSelectedIndex } from '~/hooks/useSelectedIndex';
import { DrawerItemChildren } from '~/components/molecules/DrawerItemChildren';

type Props = {
  name: string;
  Icon: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;
  link?: string;
  items?: {
    name: string;
    link: string;
  }[];
  index: number;
  isStyle?: boolean;
};

const wrapperStyles = {
  parent: {
    backgroundColor: 'yellow',
    '&:hover $child': {
      color: 'red',
    },
  },
  child: {
    fontSize: '2em',
    padding: 24,
  },
};

export const DrawerItem: React.FC<Props> = ({
  name,
  Icon,
  link = '',
  items = [],
  index,
  isStyle = false,
}) => {
  const classes = useStyles();
  const [open, selectedIndex, handleListItemClick] = useSelectedIndex();
  const isExpandable = items && items.length > 0;

  const DrawerItemRoot = (
    <ListItem
      classes={{
        selected: classes.ListItemSelected,
        root: classes.ListItemRoot,
      }}
      button
      component={link === '' ? 'div' : 'a'}
      onClick={() => handleListItemClick(index)}
    >
      <ListItemIcon classes={{ root: classes.iconRoot }}>
        <Icon className={isStyle ? classes.iconStyle : ''} />
      </ListItemIcon>
      <ListItemText
        primary={name}
        classes={{ primary: classes.ListItemTextRoot }}
      />
      {open && isExpandable && (
        <ExpandLess classes={{ root: classes.iconRoot }} fontSize="large" />
      )}
      {!open && isExpandable && (
        <ExpandMore classes={{ root: classes.iconRoot }} fontSize="large" />
      )}
    </ListItem>
  );

  const DrawerItemChild = isExpandable && (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {items.map((item, i) => {
          return <DrawerItemChildren {...item} key={i} />;
        })}
      </List>
    </Collapse>
  );

  return (
    <>
      {link === '' ? DrawerItemRoot : <Link href={link}>{DrawerItemRoot}</Link>}
      {DrawerItemChild}
    </>
  );
};
