import React from 'react';
import { Line } from 'react-chartjs-2';
import { Grid } from '@material-ui/core';

import lineChartMock from '~/mock/lineChartMock.json';

export type LineChartDataType = typeof lineChartMock;

type Props = {
  loading: boolean;
  data: LineChartDataType;
};

export const LineChartContent: React.FC<Props> = ({ loading, data }) => {
  const lineChart: JSX.Element | JSX.Element[] = (() => {
    if (loading) return <p>Loading ...</p>;
    if (data) {
      return data.getLineChartList.jobData.map((lineChartData, i) => {
        return (
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
        );
      });
    }
  })();

  return (
    <Grid container spacing={1}>
      {lineChart}
    </Grid>
  );
};
