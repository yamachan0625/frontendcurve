import React from 'react';
import { useProtectRoute } from '~/contexts/auth';
import { NextPage } from 'next';

import { MainTemplate } from '~/components/templates/MainTemplate';
import { LineChartTemplate } from '~/components/templates/lineChart/LineChartTemplate';

const LineChart: NextPage = () => {
  useProtectRoute();

  return (
    <MainTemplate>
      <LineChartTemplate />
    </MainTemplate>
  );
};

export default LineChart;
