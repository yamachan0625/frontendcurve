import React, { createContext, useContext } from 'react';

const SideBarSelectContext = createContext({
  selectedIndex: 0,
  callSetSelectedIndex: (index) => {},
});

export const SideBarSelectProvider = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = React.useState<null | number>(null);

  const callSetSelectedIndex = React.useCallback(
    (index: number | null) => {
      setSelectedIndex(index);
    },
    [selectedIndex]
  );

  return (
    <SideBarSelectContext.Provider
      value={{
        selectedIndex,
        callSetSelectedIndex,
      }}
    >
      {children}
    </SideBarSelectContext.Provider>
  );
};

export const useSideBarSelect = () => {
  const context = useContext(SideBarSelectContext);
  return context;
};
