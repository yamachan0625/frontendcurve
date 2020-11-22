import React, { createContext, useContext } from 'react';

const RootStoreContext = createContext({
  chartDisplaySize: 6 as
    | boolean
    | 'auto'
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12,
  changeChartDisplaySize: (size: number) => {},
});

export const RootStoreProvider = ({ children }) => {
  const [chartDisplaySize, setChartDisplaySize] = React.useState(6 as 6 | 12);

  /** チャートの分割数はlocalStorageにて管理する */
  const changeChartDisplaySize = (size) => {
    setChartDisplaySize(size);
    window.localStorage.setItem('chartDisplaySize', String(size));
  };

  return (
    <RootStoreContext.Provider
      value={{
        chartDisplaySize,
        changeChartDisplaySize,
      }}
    >
      {children}
    </RootStoreContext.Provider>
  );
};

export const useRootStore = () => {
  const context = useContext(RootStoreContext);
  return context;
};
