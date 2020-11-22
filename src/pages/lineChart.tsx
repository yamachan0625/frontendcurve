import React from 'react';
import { useProtectRoute } from '~/contexts/auth';
import { NextPage } from 'next';

import { MainTemplate } from '~/components/templates/MainTemplate';
import { LineChartTemplate } from '~/components/templates/lineChart/LineChartTemplate';
import { LineChartProvider } from '~/contexts/page/lineChartStore';

const LineChart: NextPage = () => {
  useProtectRoute();

  return (
    <MainTemplate>
      <LineChartProvider>
        <LineChartTemplate />
      </LineChartProvider>
    </MainTemplate>
  );
};

export default LineChart;
