import React from 'react';
import Divider from '@material-ui/core/Divider';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { HeadericonButton } from '~/components/atoms/HeaderIconButton';

type Props = {
  mobileMoreAnchorEl: HTMLElement;
  handleMenuClose: () => void;
  handleUserMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  handleNotificationsMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
};

export const HeaderMobileMenu: React.FC<Props> = ({
  mobileMoreAnchorEl,
  handleMenuClose,
  handleUserMenuOpen,
  handleNotificationsMenuOpen,
}) => {
  return (
    <Menu
      aria-label="mobile menu"
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(mobileMoreAnchorEl)}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleUserMenuOpen}>
        <HeadericonButton label="account of current user">
          <AccountCircle />
        </HeadericonButton>
        <p>User</p>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleNotificationsMenuOpen}>
        <HeadericonButton label="show new notifications">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </HeadericonButton>
        <p>通知</p>
      </MenuItem>
    </Menu>
  );
};
