import React, { useCallback } from 'react';

export const useAnchorEl = () => {
  const [userAnchorEl, setUserAnchorEl] = React.useState<null | HTMLElement>(
    null
  );

  const handleUserMenuOpen = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setUserAnchorEl(event.currentTarget);
    },
    []
  );

  const [
    notificationsAnchorEl,
    setNotificationsAnchorEl,
  ] = React.useState<null | HTMLElement>(null);

  const handleNotificationsMenuOpen = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setNotificationsAnchorEl(event.currentTarget);
    },
    []
  );

  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = React.useState<null | HTMLElement>(null);

  const handleMobileMenuOpen = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setMobileMoreAnchorEl(event.currentTarget);
    },
    []
  );

  const handleMenuClose = useCallback(() => {
    setUserAnchorEl(null);
    setNotificationsAnchorEl(null);
    setMobileMoreAnchorEl(null);
  }, []);

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
