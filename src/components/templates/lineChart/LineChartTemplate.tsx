import React from 'react';

import { useSideBarSelect } from '~/contexts/sideBarSelect';
import { LineChartContent } from '~/components/organisms/LineChartContent';
import { LineChartFilter } from '~/components/organisms/LineChartFilter';

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
