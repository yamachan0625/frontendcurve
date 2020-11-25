import React from 'react';
import { Line } from 'react-chartjs-2';
import { Grid } from '@material-ui/core';

import LineChartMock from '~/mock/lineChartMock.json';
import { useTheme } from '~/contexts/theme';

type LineChartDataType = typeof LineChartMock;
type Props = {
  data: LineChartDataType;
  chartSize:
    | boolean
    | 'auto'
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12;
};

export const SkillLineChart: React.FC<Props> = ({ data, chartSize }) => {
  const { theme } = useTheme();

  return (
    <>
      {data.getLineChartList.jobData.map((lineChartData, i) => (
        <Grid item xs={12} md={chartSize} key={i}>
          <Line
            data={{
              labels: data.getLineChartList.rangeDate,
              datasets: JSON.parse(JSON.stringify(lineChartData.skillData)),
            }}
            options={{
              title: {
                display: true,
                text: lineChartData.siteName,
                fontColor: theme.palette.primary.contrastText,
              },
              scales: {
                xAxes: [
                  {
                    ticks: {
                      // 目盛り
                      fontColor: theme.palette.primary.contrastText, // 目盛りの色
                      // beginAtZero: true,
                    },
                  },
                ],
                yAxes: [
                  {
                    ticks: {
                      // 目盛り
                      fontColor: theme.palette.primary.contrastText, // 目盛りの色
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
};
