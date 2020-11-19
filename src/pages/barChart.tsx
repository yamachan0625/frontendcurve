import React from 'react';
import { NextPage } from 'next';

import { useProtectRoute } from '~/contexts/auth';
import { MainTemplate } from '~/components/templates/MainTemplate';
import { BarChartTemplate } from '~/components/templates/barChart/BarChartTemplate';

const BarChart: NextPage = () => {
  useProtectRoute();

  return (
    <MainTemplate>
      <BarChartTemplate />
    </MainTemplate>
  );
};

export default BarChart;
