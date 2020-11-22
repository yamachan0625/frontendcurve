import React from 'react';

import { FilterMenu } from '~/components/organisms/common/FilterMenu';
import { LineChartFilterMenu } from '~/components/molecules/lineChart/LineChartFilterMenu';
import { useAccordion } from '~/hooks/useAccordion';

export const LineChartFilter: React.FC = () => {
  const { accordionElm, toggleAccordion } = useAccordion();

  const [selectedFilter, setSelectedFilter] = React.useState([
    '1週間',
    'React',
    'Vue.js',
    'Angular',
  ]);

  return (
    <FilterMenu selectedFilter={selectedFilter} ref={accordionElm}>
      <LineChartFilterMenu
        toggleAccordion={toggleAccordion}
        setSelectedFilter={setSelectedFilter}
      />
    </FilterMenu>
  );
};
