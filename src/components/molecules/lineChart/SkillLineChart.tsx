import React from 'react';
import { Grid } from '@material-ui/core';

import LineChartMock from '~/mock/lineChartMock.json';
import { useChartDisplaySize } from '~/contexts/chartDisplaySize';
import { LineChartDetail } from '~/components/molecules/lineChart/LineChartDetail';
import { ChartGrid } from '~/components/organisms/common/ChartGrid';

export type LineChartDataType = typeof LineChartMock;
type Props = {
  data: LineChartDataType;
};

export const SkillLineChart: React.FC<Props> = ({ data }) => {
  const { chartDisplaySize } = useChartDisplaySize();

  return (
    <ChartGrid chartDisplaySize={chartDisplaySize}>
      {data.getLineChartList.jobData.map((jobData, i) => (
        <Grid item xs={12} md={chartDisplaySize} key={i}>
          <LineChartDetail data={data} jobData={jobData} />
        </Grid>
      ))}
    </ChartGrid>
  );
};
