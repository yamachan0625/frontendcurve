import React, { createContext, useContext } from 'react';

const ChartDisplaySizeContext = createContext({
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

export const ChartDisplaySizeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [chartDisplaySize, setChartDisplaySize] = React.useState(6 as 6 | 12);

  /** チャートの分割数はlocalStorageにて管理する */
  const changeChartDisplaySize = (size) => {
    setChartDisplaySize(size);
    window.localStorage.setItem('chartDisplaySize', String(size));
  };

  return (
    <ChartDisplaySizeContext.Provider
      value={{
        chartDisplaySize,
        changeChartDisplaySize,
      }}
    >
      {children}
    </ChartDisplaySizeContext.Provider>
  );
};

export const useChartDisplaySize = () => {
  const context = useContext(ChartDisplaySizeContext);
  return context;
};
