import React, { createContext, useContext } from 'react';

import { useGetLineChartListLazyQuery } from '~/types.d';

const LineChartDataContext = createContext({
  getLineChartList: (options) => {},
  loading: false,
  data: {
    getLineChartList: {
      rangeDate: [],
      jobData: [
        {
          siteName: '',
          skillData: [
            {
              label: '',
              data: [],
              borderColor: '',
            },
          ],
        },
      ],
    },
  },
});

export const LineChartDatatProvider = ({ children }) => {
  const [getLineChartList, { loading, data }] = useGetLineChartListLazyQuery();

  return (
    <LineChartDataContext.Provider
      value={{
        getLineChartList,
        loading,
        data,
      }}
    >
      {children}
    </LineChartDataContext.Provider>
  );
};

export const useLineChartData = () => {
  const context = useContext(LineChartDataContext);
  return context;
};
