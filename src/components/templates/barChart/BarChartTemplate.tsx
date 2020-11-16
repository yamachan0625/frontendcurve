import React from 'react';
import { useLazyQuery } from '@apollo/client';

import { GET_BAR_CHART_LIST } from '~/queries/queries';
import { FilterMenu } from '~/components/organisms/common/FilterMenu';
import { BarChartFilterMenu } from '~/components/molecules/BarChartFilterMenu';
import { BarChartContent } from '~/components/organisms/BarChartContent';
import { useAccordion } from '~/hooks/useAccordion';

export const useBarChart = () => {
  const { accordionElm, toggleAccordion } = useAccordion();

  const [getBarChartList, { loading, data }] = useLazyQuery(GET_BAR_CHART_LIST);

  const now = new Date();
  // スクレイピングが午前3時に行われるため午前4時に日付が変わるように変更
  now.setHours(now.getHours() - 4);

  const [selectDate, setSelectDate] = React.useState(now);

  const [minDate, setMindate] = React.useState<null | Date>(null);

  // dataが変わるたびにuseEffectでsetMindateが走るのを制御するためのstate
  const [beforeFirstRender, setBeforeFirstRender] = React.useState(false);

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
    accordionElm,
    toggleAccordion,
    getBarChartList,
    data,
    loading,
    selectDate,
    setSelectDate,
    minDate,
    now,
  } as const;
};

export const BarChartTemplate = () => {
  const {
    accordionElm,
    toggleAccordion,
    getBarChartList,
    data,
    loading,
    selectDate,
    setSelectDate,
    minDate,
    now,
  } = useBarChart();

  return (
    <>
      <FilterMenu ref={accordionElm}>
        <BarChartFilterMenu
          getBarChartList={getBarChartList}
          selectDate={selectDate}
          setSelectDate={setSelectDate}
          minDate={minDate}
          maxDate={now}
          toggleAccordion={toggleAccordion}
        />
      </FilterMenu>
      <BarChartContent loading={loading} data={data} />
    </>
  );
};
