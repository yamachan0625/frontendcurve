import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Link from 'next/link';

import { useStyles } from './DrawerItemChildrenStyle';

type Props = {
  name: string;
  link: string;
};

export const DrawerItemChildren: React.FC<Props> = ({ name, link }) => {
  const classes = useStyles();

  return link === '' ? (
    <ListItem
      classes={{
        root: classes.ListItemRootChild,
      }}
      button
      component="div"
    >
      <ListItemText
        primary={name}
        classes={{ primary: classes.ListItemTextRoot }}
      />
    </ListItem>
  ) : (
    <Link href={link}>
      <ListItem
        classes={{
          root: classes.ListItemRootChild,
        }}
        button
        component="a"
      >
        <ListItemText
          primary={name}
          classes={{ primary: classes.ListItemTextRoot }}
        />
      </ListItem>
    </Link>
  );
};
