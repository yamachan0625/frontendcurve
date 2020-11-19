import React from 'react';
import dayjs from 'dayjs';

import { FilterMenu } from '~/components/organisms/common/FilterMenu';
import { BarChartFilterMenu } from '~/components/molecules/BarChartFilterMenu';
import { useAccordion } from '~/hooks/useAccordion';

export const useBarChartFilter = () => {
  const { accordionElm, toggleAccordion } = useAccordion();

  const now = new Date();
  // スクレイピングが午前3時に行われるため午前4時に日付が変わるように変更
  now.setHours(now.getHours() - 4);

  const [selectDate, setSelectDate] = React.useState(now);

  const [selectedFilter, setSelectedFilter] = React.useState([
    'デフォルト',
    String(dayjs(now).format('YYYY/MM/DD')),
  ]);

  return {
    accordionElm,
    toggleAccordion,
    selectDate,
    setSelectDate,
    now,
    selectedFilter,
    setSelectedFilter,
  } as const;
};

export const BarChartFilter = ({ getBarChartList, minDate }) => {
  const {
    accordionElm,
    toggleAccordion,
    selectDate,
    setSelectDate,
    now,
    selectedFilter,
    setSelectedFilter,
  } = useBarChartFilter();

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
