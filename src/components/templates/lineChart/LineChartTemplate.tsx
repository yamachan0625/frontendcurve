import React from 'react';
import { useLazyQuery } from '@apollo/client';

import { FilterMenu } from '~/components/organisms/common/FilterMenu';
import { LineChartFilterMenu } from '~/components/molecules/LineChartFilterMenu';
import { LineChartContent } from '~/components/organisms/LineChartContent';
import { GET_LINE_CHART_LIST } from '~/queries/queries';

export const useLineChart = () => {
  const [getLineChartList, { loading, data }] = useLazyQuery(
    GET_LINE_CHART_LIST
  );

  React.useEffect(() => {
    getLineChartList({
      variables: { dateRange: '1週間', skills: ['React', 'Angular', 'VueJs'] },
    });
  }, []);

  return { getLineChartList, loading, data };
};

export const LineChartTemplate = () => {
  const { getLineChartList, loading, data } = useLineChart();

  return (
    <>
      <FilterMenu>
        <LineChartFilterMenu getLineChartList={getLineChartList} />
      </FilterMenu>
      <LineChartContent loading={loading} data={data} />
    </>
  );
};

export default LineChartTemplate;
