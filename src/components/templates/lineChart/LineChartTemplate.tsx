import React from 'react';

import { useSideBarSelect } from '~/contexts/sideBarSelect';
import { LineChartContent } from '~/components/organisms/lineChart/LineChartContent';
import { LineChartFilter } from '~/components/organisms/lineChart/LineChartFilter';

export const LineChartTemplate = () => {
  const { callSetSelectedIndex } = useSideBarSelect();

  React.useEffect(() => {
    callSetSelectedIndex(2);
  }, []);

  return (
    <>
      <LineChartFilter />
      <LineChartContent />
    </>
  );
};
