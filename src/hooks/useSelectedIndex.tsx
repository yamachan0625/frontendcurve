import React, { useCallback } from 'react';

export const useSelectedIndex = () => {
  const [selectedIndex, setSelectedIndex] = React.useState<null | number>(null);
  const [open, setOpen] = React.useState(false);

  const handleListItemClick = useCallback(
    (index: number) => {
      setSelectedIndex(index);
      setOpen(!open);
    },
    [selectedIndex, open]
  );

  return [open, selectedIndex, handleListItemClick] as const;
};
