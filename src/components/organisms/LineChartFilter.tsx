import React from 'react';

import { skillOptionObj } from '~/helpers/define';
import { FilterMenu } from '~/components/organisms/common/FilterMenu';
import { LineChartFilterMenu } from '~/components/molecules/lineChart/LineChartFilterMenu';
import { useAccordion } from '~/hooks/useAccordion';
import { useDateRange } from '~/contexts/page/lineChart/dateRange';
import { useSelectSkill } from '~/contexts/page/lineChart/selectSkill';

export const LineChartFilter: React.FC = () => {
  const { accordionElm, toggleAccordion } = useAccordion();
  const { selectedDateRange } = useDateRange();
  const { selectedSkills } = useSelectSkill();

  // VueJs ⇨ Vue.jsのような形に変換
  const convertSkillName = React.useMemo(
    () => selectedSkills.map((skill) => skillOptionObj[skill]['name']),
    [selectedSkills]
  );

  const chipList = React.useMemo(
    () => [selectedDateRange, ...convertSkillName],
    [selectedDateRange, convertSkillName]
  );

  return (
    <FilterMenu ref={accordionElm} chipList={chipList}>
      <LineChartFilterMenu toggleAccordion={toggleAccordion} />
    </FilterMenu>
  );
};
