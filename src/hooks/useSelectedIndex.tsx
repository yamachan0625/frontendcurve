import React from 'react';

export const useSelectedIndex = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  return [selectedIndex, handleListItemClick] as const;
};
