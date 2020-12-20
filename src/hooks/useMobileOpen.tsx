import React, { useCallback } from 'react';

export const useMobileOpen = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen(!mobileOpen);
  }, [mobileOpen]);

  return { mobileOpen, handleDrawerToggle } as const;
};
