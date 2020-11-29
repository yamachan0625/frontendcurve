import React, { createContext, useContext } from 'react';
import { useLazyQuery } from '@apollo/client';

import { GET_LINE_CHART_LIST } from '~/queries/queries';

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
  const [
    getLineChartList,
    { loading, data },
  ] = useLazyQuery(GET_LINE_CHART_LIST, { fetchPolicy: 'no-cache' });

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
