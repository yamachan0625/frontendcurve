import React from 'react';
import { NextPage } from 'next';

import { useProtectRoute } from '~/contexts/auth';
import { MainTemplate } from '~/components/templates/MainTemplate';
import { BarChartTemplate } from '~/components/templates/barChart/BarChartTemplate';
import { WithTheme } from '~/components/templates/WithTheme';

const BarChart: NextPage = () => {
  useProtectRoute();
  return (
    <WithTheme>
      <MainTemplate>
        <BarChartTemplate />
      </MainTemplate>
    </WithTheme>
  );
};

export default BarChart;
