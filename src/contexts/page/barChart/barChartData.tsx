import React, { createContext, useContext } from 'react';

import { useGetBarChartListLazyQuery } from '~/types.d';

export const BarChartDataContext = createContext({
  getBarChartList: ({
    variables: { date, sortOrder },
  }: {
    variables: {
      date: Date;
      sortOrder: string;
    };
  }) => {},
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
  const [getBarChartList, { loading, data }] = useGetBarChartListLazyQuery();

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
