import React, { createContext, useContext } from 'react';

const SideBarSelectContext = createContext({
  open: false,
  selectedIndex: 0,
  callSetSelectedIndex: (index) => {},
});

export const SideBarSelectProvider = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = React.useState<null | number>(1);
  const [open, setOpen] = React.useState(false);

  const callSetSelectedIndex = React.useCallback(
    (index: number) => {
      setSelectedIndex(index);
      // setOpen(!open);
    },
    [selectedIndex, open]
  );

  return (
    <SideBarSelectContext.Provider
      value={{
        open,
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
