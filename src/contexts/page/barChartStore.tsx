import React, { createContext, useContext } from 'react';
import { useLazyQuery } from '@apollo/client';

import { GET_BAR_CHART_LIST } from '~/queries/queries';

const BarChartContext = createContext({
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
  selectDate: new Date(),
  callSetSelectDate: (date) => {},
  sortOrder: 'デフォルト',
  callSetSortOrder: (order: string) => {},
  now: new Date(),
  minDate: null,
  callSetMinDate: (date) => {},
});

/** LineChartページで使用する */
export const BarChartProvider = ({ children }) => {
  const [getBarChartList, { loading, data }] = useLazyQuery(
    GET_BAR_CHART_LIST,
    { fetchPolicy: 'no-cache' }
  );

  const now = new Date();
  // スクレイピングが午前3時に行われるため午前4時に日付が変わるように変更
  now.setHours(now.getHours() - 4);

  const [minDate, setMindate] = React.useState<null | Date>(null);

  const callSetMinDate = (date: Date) => {
    setMindate(date);
  };

  // const [date, setDate] = React.useState('1週間');
  const [selectDate, setSelectDate] = React.useState(now);

  const callSetSelectDate = (date: Date) => {
    // なぜかエラーになるためここで日付型に変更する
    setSelectDate(new Date(date));
  };

  const [sortOrder, setSortOrder] = React.useState('デフォルト');

  const callSetSortOrder = (order: string) => {
    setSortOrder(order);
  };

  return (
    <BarChartContext.Provider
      value={{
        getBarChartList,
        loading,
        data,
        selectDate,
        callSetSelectDate,
        sortOrder,
        callSetSortOrder,
        now,
        minDate,
        callSetMinDate,
      }}
    >
      {children}
    </BarChartContext.Provider>
  );
};

export const useBarChart = () => {
  const context = useContext(BarChartContext);
  return context;
};
