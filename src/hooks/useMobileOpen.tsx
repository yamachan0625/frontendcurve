import React from 'react';

export const useMobileOpen = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return [mobileOpen, handleDrawerToggle] as const;
};
