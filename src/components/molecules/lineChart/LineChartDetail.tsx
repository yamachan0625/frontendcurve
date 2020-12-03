import React from 'react';
import { Line } from 'react-chartjs-2';

import { useTheme } from '~/contexts/theme';
import type { LineChartDataType } from '~/components/molecules/lineChart/SkillLineChart';

type jobDataProps = {
  siteName: string;
  skillData: {
    label: string;
    data: number[];
    borderColor: string;
  }[];
};

type Props = {
  data: LineChartDataType;
  jobData: jobDataProps;
};

export const LineChartDetail: React.FC<Props> = ({ data, jobData }) => {
  const { theme } = useTheme();

  return (
    <Line
      data={{
        labels: data.getLineChartList.rangeDate,
        datasets: JSON.parse(JSON.stringify(jobData.skillData)),
      }}
      options={{
        title: {
          display: true,
          text: jobData.siteName,
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
  );
};
