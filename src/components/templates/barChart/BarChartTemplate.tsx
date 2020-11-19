import React from 'react';
import { useLazyQuery } from '@apollo/client';

import { GET_BAR_CHART_LIST } from '~/queries/queries';
import { BarChartContent } from '~/components/organisms/BarChartContent';
import { BarChartFilter } from '~/components/organisms/BarChartFilter';

export const useBarChart = () => {
  const [getBarChartList, { loading, data }] = useLazyQuery(GET_BAR_CHART_LIST);

  // dataが変わるたびにuseEffectでsetMindateが走るのを制御するためのstate
  const [beforeFirstRender, setBeforeFirstRender] = React.useState(false);

  const [minDate, setMindate] = React.useState<null | Date>(null);

  const callGetBarChartList = React.useCallback((date) => {
    getBarChartList({
      variables: { date: date, sortOrder: 'default' },
    });
  }, []);

  React.useEffect(() => {
    callGetBarChartList(new Date());
  }, []);

  React.useEffect(() => {
    if (data && data.getBarChartList.minDate && !beforeFirstRender) {
      setBeforeFirstRender(true);
      /** datepickerのminDateをapiからもらった値で書き換え */
      setMindate(new Date(data.getBarChartList.minDate));
    }
  }, [data]);

  return {
    getBarChartList,
    data,
    loading,
    minDate,
  } as const;
};

export const BarChartTemplate = () => {
  const { getBarChartList, data, loading, minDate } = useBarChart();

  return (
    <>
      <BarChartFilter getBarChartList={getBarChartList} minDate={minDate} />
      <BarChartContent loading={loading} data={data} />
    </>
  );
};
