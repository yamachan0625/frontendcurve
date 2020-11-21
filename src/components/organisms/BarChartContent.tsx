import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { Grid } from '@material-ui/core';

import barChartMock from '~/mock/barChartMock.json';
import { PlaceHolder } from '~/components/molecules/PlaceHolder';
import { SkillBarChart } from '~/components/molecules/barChart/SkillBarChart';

export type BarChartDataType = typeof barChartMock;

type Props = {
  loading: boolean;
  data: BarChartDataType;
};

export const BarChartContent: React.FC<Props> = ({ loading, data }) => (
  <Grid container spacing={0}>
    {loading && <PlaceHolder />}
    {data && <SkillBarChart data={data.getBarChartList.jobData} />}
  </Grid>
);
