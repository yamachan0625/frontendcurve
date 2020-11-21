import React from 'react';
import { useLazyQuery } from '@apollo/client';

import { GET_BAR_CHART_LIST } from '~/queries/queries';
import { BarChartContent } from '~/components/organisms/BarChartContent';
import { BarChartFilter } from '~/components/organisms/BarChartFilter';

export const useBarChart = () => {
  const [getBarChartList, { loading, data }] = useLazyQuery(GET_BAR_CHART_LIST);

  return {
    getBarChartList,
    data,
    loading,
  } as const;
};

export const BarChartTemplate = () => {
  const { getBarChartList, data, loading } = useBarChart();

  return (
    <>
      <BarChartFilter getBarChartList={getBarChartList} data={data} />
      <BarChartContent loading={loading} data={data} />
    </>
  );
};
