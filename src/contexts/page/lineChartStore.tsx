import React, { createContext, useContext } from 'react';
import { useLazyQuery } from '@apollo/client';

import { GET_LINE_CHART_LIST } from '~/queries/queries';

const LineChartContext = createContext({
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
  callSetRangeDate: (date) => {},
  callSetSelectedSkills: (skills) => {},
  selectedDateRange: '1週間',
  selectedSkills: ['React', 'VueJs', 'Angular'],
});

/** LineChartページで使用する */
export const LineChartProvider = ({ children }) => {
  const [
    getLineChartList,
    { loading, data },
  ] = useLazyQuery(GET_LINE_CHART_LIST, { fetchPolicy: 'no-cache' });

  const [selectedDateRange, setSelectedDateRange] = React.useState('1週間');

  const callSetRangeDate = (date) => {
    setSelectedDateRange(date);
  };

  const [selectedSkills, setSelectedSkills] = React.useState([
    'React',
    'VueJs',
    'Angular',
  ]);

  const callSetSelectedSkills = (skills: string[]) => {
    setSelectedSkills(skills);
  };

  return (
    <LineChartContext.Provider
      value={{
        getLineChartList,
        loading,
        data,
        callSetRangeDate,
        callSetSelectedSkills,
        selectedDateRange,
        selectedSkills,
      }}
    >
      {children}
    </LineChartContext.Provider>
  );
};

export const useLineChart = () => {
  const context = useContext(LineChartContext);
  return context;
};
