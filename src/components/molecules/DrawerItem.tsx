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
import { useSideBarSelect } from '~/contexts/sideBarSelect';
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
  isRotateStyle?: boolean;
};

export const DrawerItem: React.FC<Props> = React.memo(
  ({ name, Icon, link = '', items = [], index, isRotateStyle = false }) => {
    const classes = useStyles();
    const { selectedIndex } = useSideBarSelect();
    const [open, setOpen] = React.useState(false);

    const isExpandable = items && items.length > 0;
    const isLink = link !== '';

    const DrawerItemRoot = (
      <ListItem
        button
        component={isLink ? 'a' : 'div'}
        onClick={() => setOpen(!open)}
        selected={selectedIndex === index}
        data-testid="drawer-open-button"
      >
        <ListItemIcon classes={{ root: classes.iconRoot }}>
          <Icon className={isRotateStyle ? classes.iconStyle : ''} />
        </ListItemIcon>
        <ListItemText
          primary={name}
          classes={{ primary: classes.ListItemTextRoot }}
        />
        {open && isExpandable && (
          <ExpandLess
            classes={{ root: classes.iconRoot }}
            fontSize="large"
            data-testid="open-icon"
          />
        )}
        {!open && isExpandable && (
          <ExpandMore
            classes={{ root: classes.iconRoot }}
            fontSize="large"
            data-testid="close-icon"
          />
        )}
      </ListItem>
    );

    const DrawerItemChild = isExpandable ? (
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items.map((item, i) => {
            return <DrawerItemChildren {...item} key={i} />;
          })}
        </List>
      </Collapse>
    ) : null;

    return (
      <>
        {isLink ? <Link href={link}>{DrawerItemRoot}</Link> : DrawerItemRoot}
        {DrawerItemChild}
      </>
    );
  }
);
