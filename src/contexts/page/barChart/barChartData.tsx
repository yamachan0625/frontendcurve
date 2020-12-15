import React, { createContext, useContext } from 'react';
import { useLazyQuery } from '@apollo/client';

import { GET_BAR_CHART_LIST } from '~/queries/queries';

export const BarChartDataContext = createContext({
  getBarChartList: (options) => {},
  loading: false,
  data: {
    getBarChartList: {
      scrapingDate: '',
      jobData: [
        {
          siteName: 'Green',
          skillName: [''],
          jobVacancies: [0],
          chartColor: [''],
          chartBorderColor: [''],
        },
      ],
      minDate: '',
    },
  },
});

export const BarChartDatatProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [getBarChartList, { loading, data }] = useLazyQuery(GET_BAR_CHART_LIST);

  return (
    <BarChartDataContext.Provider
      value={{
        getBarChartList,
        loading,
        data,
      }}
    >
      {children}
    </BarChartDataContext.Provider>
  );
};

export const useBarChartData = () => {
  const context = useContext(BarChartDataContext);
  return context;
};
