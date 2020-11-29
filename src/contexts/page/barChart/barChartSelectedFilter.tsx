import React, { createContext, useContext } from 'react';
import dayjs from 'dayjs';

const BarChartSelectedFilterContext = createContext({
  selectedFilter: [''],
  callSetSelectedFilter: (selectedFilter) => {},
});

export const BarChartSelectedFilterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const now = new Date();
  // スクレイピングが午前3時に行われるため午前4時に日付が変わるように変更
  now.setHours(now.getHours() - 4);

  const [selectedFilter, setSelectedFilter] = React.useState([
    'デフォルト',
    String(dayjs(now).format('YYYY/MM/DD')),
  ]);

  const callSetSelectedFilter = (selectedFilter: string[]) => {
    setSelectedFilter(selectedFilter);
  };

  return (
    <BarChartSelectedFilterContext.Provider
      value={{
        selectedFilter,
        callSetSelectedFilter,
      }}
    >
      {children}
    </BarChartSelectedFilterContext.Provider>
  );
};

export const useBarChartSelectedFilter = () => {
  const context = useContext(BarChartSelectedFilterContext);
  return context;
};
