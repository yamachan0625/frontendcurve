import React from 'react';

export const useAnchorEl = () => {
  const [userAnchorEl, setUserAnchorEl] = React.useState<null | HTMLElement>(
    null
  );
  const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setUserAnchorEl(event.currentTarget);
  };

  const [
    notificationsAnchorEl,
    setNotificationsAnchorEl,
  ] = React.useState<null | HTMLElement>(null);
  const handleNotificationsMenuOpen = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setNotificationsAnchorEl(event.currentTarget);
  };

  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = React.useState<null | HTMLElement>(null);
  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setUserAnchorEl(null);
    setNotificationsAnchorEl(null);
    setMobileMoreAnchorEl(null);
  };

  return [
    userAnchorEl,
    notificationsAnchorEl,
    mobileMoreAnchorEl,
    handleUserMenuOpen,
    handleNotificationsMenuOpen,
    handleMobileMenuOpen,
    handleMenuClose,
  ] as const;
};
