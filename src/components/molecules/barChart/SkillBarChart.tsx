import React from 'react';
import { Grid } from '@material-ui/core';

import barChartMock from '~/mock/barChartMock.json';
import { useChartDisplaySize } from '~/contexts/chartDisplaySize';
import { BarChartDetail } from '~/components/molecules/barChart/BarChartDetail';
import { ChartGrid } from '~/components/organisms/common/ChartGrid';

export type BarChartDataType = typeof barChartMock.getBarChartList.jobData;
export type Props = {
  jobData: BarChartDataType;
};

export const SkillBarChart: React.FC<Props> = React.memo(({ jobData }) => {
  const { chartDisplaySize } = useChartDisplaySize();

  return (
    <ChartGrid chartDisplaySize={chartDisplaySize}>
      {jobData.map((data, i) => (
        <Grid item xs={12} md={chartDisplaySize} key={i}>
          <BarChartDetail data={data} />
        </Grid>
      ))}
    </ChartGrid>
  );
});
