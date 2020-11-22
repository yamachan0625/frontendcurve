import React from 'react';

import { BarChartContent } from '~/components/organisms/BarChartContent';
import { BarChartFilter } from '~/components/organisms/BarChartFilter';

export const BarChartTemplate = () => {
  return (
    <>
      <BarChartFilter />
      <BarChartContent />
    </>
  );
};
