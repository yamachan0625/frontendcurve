import React from 'react';
import { Grid } from '@material-ui/core';

import lineChartMock from '~/mock/lineChartMock.json';
import { PlaceHolder } from '~/components/molecules/PlaceHolder';
import { SkillLineChart } from '~/components/molecules/lineChart/SkillLineChart';

export type LineChartDataType = typeof lineChartMock;

type Props = {
  loading: boolean;
  data: LineChartDataType;
};

export const LineChartContent: React.FC<Props> = ({ loading, data }) => (
  <Grid container spacing={1}>
    {loading && <PlaceHolder />}
    {data && <SkillLineChart data={data} />}
  </Grid>
);
