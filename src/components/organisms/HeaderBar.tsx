import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

import { HeadericonButton } from '~/components/atoms/HeaderIconButton';
import { HeaderDesktopMenu } from '~/components/molecules/HeaderDesktopMenu';
import { HeaderMobileMenu } from '~/components/molecules/HeaderMobileMenu';
import { useAnchorEl } from '~/hooks/useAnchorEl';
import { useStyles } from './HeaderBarStyle';

type Props = {
  handleDrawerToggle: () => void;
};

export const HeaderBar: React.FC<Props> = ({ handleDrawerToggle }) => {
  const classes = useStyles();

  const [
    userAnchorEl,
    notificationsAnchorEl,
    mobileMoreAnchorEl,
    handleUserMenuOpen,
    handleNotificationsMenuOpen,
    handleMobileMenuOpen,
    handleMenuClose,
  ] = useAnchorEl();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <HeadericonButton
            label="open drawer"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </HeadericonButton>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <HeadericonButton
              label="how new notifications"
              onClick={handleNotificationsMenuOpen}
            >
              <Badge badgeContent={6} color="error">
                <NotificationsIcon />
              </Badge>
            </HeadericonButton>
            <HeadericonButton
              label="account of current user"
              edge="end"
              onClick={handleUserMenuOpen}
            >
              <AccountCircle />
            </HeadericonButton>
          </div>
          <div className={classes.sectionMobile}>
            <HeadericonButton label="show more" onClick={handleMobileMenuOpen}>
              <MoreIcon />
            </HeadericonButton>
          </div>
        </Toolbar>
      </AppBar>
      <HeaderMobileMenu
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        handleMenuClose={handleMenuClose}
        handleUserMenuOpen={handleUserMenuOpen}
        handleNotificationsMenuOpen={handleNotificationsMenuOpen}
      />
      <HeaderDesktopMenu
        userAnchorEl={userAnchorEl}
        notificationsAnchorEl={notificationsAnchorEl}
        handleMenuClose={handleMenuClose}
      />
    </>
  );
};