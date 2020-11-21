import React from 'react';
import { Line } from 'react-chartjs-2';
import { Grid } from '@material-ui/core';

import type { LineChartDataType } from '~/components/organisms/LineChartContent';

type Props = {
  data: LineChartDataType;
};

export const SkillLineChart: React.FC<Props> = ({ data }) => (
  <>
    {data.getLineChartList.jobData.map((lineChartData, i) => (
      <Grid item xs={12} md={6} key={i}>
        <Line
          data={{
            labels: data.getLineChartList.rangeDate,
            datasets: JSON.parse(JSON.stringify(lineChartData.skillData)),
          }}
          options={{
            title: {
              display: true,
              text: lineChartData.siteName,
              fontColor: '#fff',
            },
            scales: {
              xAxes: [
                {
                  ticks: {
                    // 目盛り
                    fontColor: '#fff', // 目盛りの色
                    // beginAtZero: true,
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    // 目盛り
                    fontColor: '#fff', // 目盛りの色
                    // beginAtZero: true,
                  },
                },
              ],
            },
          }}
        ></Line>
      </Grid>
    ))}
  </>
);
