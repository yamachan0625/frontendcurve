import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { Grid } from '@material-ui/core';

import barChartMock from '~/mock/barChartMock.json';

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

export const SkillBarChart: React.FC<Props> = ({ data, chartSize }) => (
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
              fontColor: '#fff',
            },
            scales: {
              xAxes: [
                {
                  scaleLabel: {
                    // 軸ラベル
                    display: true, // 表示設定
                    labelString: '求人数', // ラベル
                    fontColor: '#fff', // 文字の色
                  },
                  ticks: {
                    // 目盛り
                    fontColor: '#fff', // 目盛りの色
                    beginAtZero: true,
                  },
                },
              ],
              yAxes: [
                {
                  scaleLabel: {
                    // 軸ラベル
                    display: true, // 表示設定
                    fontColor: '#fff', // 文字の色
                  },
                  ticks: {
                    // 目盛り
                    fontColor: '#fff', // 目盛りの色
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
