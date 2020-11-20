import React from 'react';
import dayjs from 'dayjs';

import { FilterMenu } from '~/components/organisms/common/FilterMenu';
import { BarChartFilterMenu } from '~/components/molecules/BarChartFilterMenu';
import { useAccordion } from '~/hooks/useAccordion';

export const useBarChartFilter = () => {
  const now = new Date();
  // スクレイピングが午前3時に行われるため午前4時に日付が変わるように変更
  now.setHours(now.getHours() - 4);

  const [selectDate, setSelectDate] = React.useState(now);

  // dataが変わるたびにuseEffectでsetMindateが走るのを制御するためのstate
  const [beforeFirstRender, setBeforeFirstRender] = React.useState(false);

  const [minDate, setMindate] = React.useState<null | Date>(null);

  const [selectedFilter, setSelectedFilter] = React.useState([
    'デフォルト',
    String(dayjs(now).format('YYYY/MM/DD')),
  ]);

  return {
    selectDate,
    setSelectDate,
    now,
    selectedFilter,
    setSelectedFilter,
    beforeFirstRender,
    setBeforeFirstRender,
    minDate,
    setMindate,
  } as const;
};

export const BarChartFilter = ({ getBarChartList, data }) => {
  const { accordionElm, toggleAccordion } = useAccordion();
  const {
    selectDate,
    setSelectDate,
    now,
    selectedFilter,
    setSelectedFilter,
    beforeFirstRender,
    setBeforeFirstRender,
    minDate,
    setMindate,
  } = useBarChartFilter();

  React.useEffect(() => {
    getBarChartList({
      variables: { date: now, sortOrder: 'default' },
    });
  }, []);

  React.useEffect(() => {
    if (data && data.getBarChartList.minDate && !beforeFirstRender) {
      setBeforeFirstRender(true);
      /** datepickerのminDateをapiからもらった値で書き換え */
      setMindate(new Date(data.getBarChartList.minDate));
    }
  }, [data]);

  return (
    <FilterMenu selectedFilter={selectedFilter} ref={accordionElm}>
      <BarChartFilterMenu
        getBarChartList={getBarChartList}
        selectDate={selectDate}
        setSelectDate={setSelectDate}
        minDate={minDate}
        maxDate={now}
        toggleAccordion={toggleAccordion}
        setSelectedFilter={setSelectedFilter}
      />
    </FilterMenu>
  );
};
