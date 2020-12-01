import React from 'react';
import dayjs from 'dayjs';

import { FilterMenu } from '~/components/organisms/common/FilterMenu';
import { BarChartFilterMenu } from '~/components/molecules/barChart/BarChartFilterMenu';
import { useAccordion } from '~/hooks/useAccordion';
import { useSortOrder } from '~/contexts/page/barChart/sortOrder';
import { useSelectDatepicker } from '~/contexts/page/barChart/selectDatepicker';

export const BarChartFilter: React.FC = () => {
  const { accordionElm, toggleAccordion } = useAccordion();
  const { sortOrder } = useSortOrder();
  const { selectDate } = useSelectDatepicker();

  const chipList = React.useMemo(
    () => [sortOrder, String(dayjs(selectDate).format('YYYY/MM/DD'))],
    [sortOrder, selectDate]
  );

  return (
    <FilterMenu ref={accordionElm} chipList={chipList}>
      <BarChartFilterMenu toggleAccordion={toggleAccordion} />
    </FilterMenu>
  );
};
