import React from 'react';
import { Grid } from '@material-ui/core';

import LineChartMock from '~/mock/lineChartMock.json';
import { useChartDisplaySize } from '~/contexts/chartDisplaySize';
import { LineChartDetail } from '~/components/molecules/lineChart/LineChartDetail';

export type LineChartDataType = typeof LineChartMock;
type Props = {
  data: LineChartDataType;
};

export const SkillLineChart: React.FC<Props> = ({ data }) => {
  const { chartDisplaySize } = useChartDisplaySize();

  return (
    <>
      {chartDisplaySize === 6 &&
        data.getLineChartList.jobData.map((jobData, i) => (
          <Grid item xs={12} md={6} key={i}>
            <LineChartDetail data={data} jobData={jobData} />
          </Grid>
        ))}
      {chartDisplaySize === 12 &&
        data.getLineChartList.jobData.map((jobData, i) => (
          <Grid item xs={12} md={12} key={i}>
            <LineChartDetail data={data} jobData={jobData} />
          </Grid>
        ))}
    </>
  );
};
