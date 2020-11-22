import React from 'react';
import { NextPage } from 'next';

import { useProtectRoute } from '~/contexts/auth';
import { MainTemplate } from '~/components/templates/MainTemplate';
import { BarChartTemplate } from '~/components/templates/barChart/BarChartTemplate';
import { BarChartProvider } from '~/contexts/page/barChartStore';

const BarChart: NextPage = () => {
  useProtectRoute();

  return (
    <MainTemplate>
      <BarChartProvider>
        <BarChartTemplate />
      </BarChartProvider>
    </MainTemplate>
  );
};

export default BarChart;
