import React from 'react';
import dayjs from 'dayjs';

import { FilterMenu } from '~/components/organisms/common/FilterMenu';
import { BarChartFilterMenu } from '~/components/molecules/barChart/BarChartFilterMenu';
import { useAccordion } from '~/hooks/useAccordion';
import { useBarChart } from '~/contexts/page/barChartStore';

export const BarChartFilter: React.FC = () => {
  const { accordionElm, toggleAccordion } = useAccordion();
  const { now, minDate } = useBarChart();

  const [selectedFilter, setSelectedFilter] = React.useState([
    'デフォルト',
    String(dayjs(now).format('YYYY/MM/DD')),
  ]);

  return (
    <FilterMenu selectedFilter={selectedFilter} ref={accordionElm}>
      <BarChartFilterMenu
        minDate={minDate}
        maxDate={now}
        toggleAccordion={toggleAccordion}
        setSelectedFilter={setSelectedFilter}
      />
    </FilterMenu>
  );
};
