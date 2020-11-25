import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { Grid } from '@material-ui/core';

import barChartMock from '~/mock/barChartMock.json';
import { useTheme } from '~/contexts/theme';

export type BarChartDataType = typeof barChartMock.getBarChartList.jobData;
type Props = {
  data: typeof barChartMock.getBarChartList.jobData;
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

export const SkillBarChart: React.FC<Props> = ({ data, chartSize }) => {
  const { theme } = useTheme();

  return (
    <>
      {data.map((data, i) => (
        <Grid item xs={12} md={chartSize} key={i}>
          <HorizontalBar
            data={{
              labels: data.skillName,
              datasets: [
                {
                  label: '求人数',
                  backgroundColor: data.chartColor,
                  data: data.jobVacancies,
                  borderColor: data.chartBorderColor,
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: {
                display: true,
                text: data.siteName,
                fontColor: theme.palette.primary.contrastText,
              },
              scales: {
                xAxes: [
                  {
                    scaleLabel: {
                      // 軸ラベル
                      display: true, // 表示設定
                      labelString: '求人数', // ラベル
                      fontColor: theme.palette.primary.contrastText, // 文字の色
                    },
                    ticks: {
                      // 目盛り
                      fontColor: theme.palette.primary.contrastText, // 目盛りの色
                      beginAtZero: true,
                    },
                  },
                ],
                yAxes: [
                  {
                    scaleLabel: {
                      // 軸ラベル
                      display: true, // 表示設定
                      fontColor: theme.palette.primary.contrastText, // 文字の色
                    },
                    ticks: {
                      // 目盛り
                      fontColor: theme.palette.primary.contrastText, // 目盛りの色
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
          ></HorizontalBar>
        </Grid>
      ))}
    </>
  );
};
