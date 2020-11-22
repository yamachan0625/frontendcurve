import React from 'react';

import { LineChartContent } from '~/components/organisms/LineChartContent';
import { LineChartFilter } from '~/components/organisms/LineChartFilter';

export const LineChartTemplate = () => {
  return (
    <>
      <LineChartFilter />
      <LineChartContent />
    </>
  );
};
