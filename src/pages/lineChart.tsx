import React from 'react';
import { NextPage } from 'next';

import { useProtectRoute } from '~/contexts/auth';
import { MainTemplate } from '~/components/templates/MainTemplate';
import { LineChartTemplate } from '~/components/templates/lineChart/LineChartTemplate';
import { WithTheme } from '~/components/templates/WithTheme';

const LineChart: NextPage = () => {
  useProtectRoute();

  return (
    <WithTheme>
      <MainTemplate>
        <LineChartTemplate />
      </MainTemplate>
    </WithTheme>
  );
};

export default LineChart;
