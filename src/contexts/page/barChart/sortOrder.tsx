import React, { createContext, useContext } from 'react';

const SortOrderContext = createContext({
  sortOrder: 'デフォルト',
  callSetSortOrder: (order: string) => {},
});

export const SortOrderProvider = ({ children }) => {
  const [sortOrder, setSortOrder] = React.useState('デフォルト');

  const callSetSortOrder = (order: string) => {
    setSortOrder(order);
  };

  return (
    <SortOrderContext.Provider
      value={{
        sortOrder,
        callSetSortOrder,
      }}
    >
      {children}
    </SortOrderContext.Provider>
  );
};

export const useSortOrder = () => {
  const context = useContext(SortOrderContext);
  return context;
};
