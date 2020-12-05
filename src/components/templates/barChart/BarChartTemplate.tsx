import React from 'react';

import { useSideBarSelect } from '~/contexts/sideBarSelect';
import { BarChartContent } from '~/components/organisms/barChart/BarChartContent';
import { BarChartFilter } from '~/components/organisms/barChart/BarChartFilter';

export const BarChartTemplate = () => {
  const { callSetSelectedIndex } = useSideBarSelect();

  React.useEffect(() => {
    callSetSelectedIndex(1);
  }, []);

  return (
    <>
      <BarChartFilter />
      <BarChartContent />
    </>
  );
};
