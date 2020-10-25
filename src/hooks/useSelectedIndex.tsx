import React, { useCallback } from 'react';

export const useSelectedIndex = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = useCallback(
    (index: number) => {
      setSelectedIndex(index);
    },
    [selectedIndex]
  );

  return [selectedIndex, handleListItemClick] as const;
};
