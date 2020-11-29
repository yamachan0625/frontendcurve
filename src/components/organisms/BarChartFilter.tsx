import React from 'react';
import dayjs from 'dayjs';

import { FilterMenu } from '~/components/organisms/common/FilterMenu';
import { BarChartFilterMenu } from '~/components/molecules/barChart/BarChartFilterMenu';
import { useAccordion } from '~/hooks/useAccordion';
import { chartMaxDate } from '~/helpers/date';

export const BarChartFilter: React.FC = () => {
  const { accordionElm, toggleAccordion } = useAccordion();

  const [selectedFilter, setSelectedFilter] = React.useState([
    'デフォルト',
    String(dayjs(chartMaxDate()).format('YYYY/MM/DD')),
  ]);

  const callSetSelectedFilter = React.useCallback(
    (selectedFilter: string[]) => {
      setSelectedFilter(selectedFilter);
    },
    [setSelectedFilter]
  );

  return (
    <FilterMenu selectedFilter={selectedFilter} ref={accordionElm}>
      <BarChartFilterMenu
        toggleAccordion={toggleAccordion}
        setSelectedFilter={callSetSelectedFilter}
      />
    </FilterMenu>
  );
};
