import React from 'react';
import { Line } from 'react-chartjs-2';
import { Grid } from '@material-ui/core';

import LineChartMock from '~/mock/lineChartMock.json';
import { useTheme } from '~/contexts/theme';
import { useChartDisplaySize } from '~/contexts/chartDisplaySize';

type LineChartDataType = typeof LineChartMock;
type Props = {
  data: LineChartDataType;
};

export const SkillLineChart: React.FC<Props> = ({ data }) => {
  const { theme } = useTheme();
  const { chartDisplaySize } = useChartDisplaySize();

  return (
    <>
      {chartDisplaySize === 6 &&
        data.getLineChartList.jobData.map((lineChartData, i) => (
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
      {chartDisplaySize === 12 &&
        data.getLineChartList.jobData.map((lineChartData, i) => (
          <Grid item xs={12} md={12} key={i}>
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
