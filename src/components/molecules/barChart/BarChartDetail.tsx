import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

import { useTheme } from '~/contexts/theme';

type Props = {
  data: {
    siteName: string;
    skillName: string[];
    jobVacancies: number[];
    chartColor: string[];
    chartBorderColor: string[];
  };
};

export const BarChartDetail: React.FC<Props> = ({ data }) => {
  const { theme } = useTheme();

  return (
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
  );
};
