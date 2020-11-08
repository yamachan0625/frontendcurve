import React from 'react';
import { NextPage } from 'next';
import { useLazyQuery } from '@apollo/client';
import { HorizontalBar } from 'react-chartjs-2';
import { Grid } from '@material-ui/core';
import { GET_BAR_CHART_LIST } from '~/queries/queries';

import { useProtectRoute } from '~/contexts/auth';
import { FilterMenu } from '~/components/organisms/common/FilterMenu';
import { MainTemplate } from '~/components/templates/MainTemplate';
import { BarChartFilterMenu } from '~/components/molecules/BarChartFilterMenu';

export const useBarChart = () => {
  const [getBarChartList, { loading, data }] = useLazyQuery(GET_BAR_CHART_LIST);

  const callGetBarChartList = (date) => {
    getBarChartList({
      variables: { date: date, sortOrder: 'default' },
    });
  };

  return [getBarChartList, data, loading, callGetBarChartList] as const;
};

const BarChart: NextPage = () => {
  useProtectRoute();
  const [getBarChartList, data, loading, callGetBarChartList] = useBarChart();

  const now = new Date();
  const yesterday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 1
  );

  React.useEffect(() => {
    callGetBarChartList(now);
  }, []);

  const barChart = (() => {
    if (loading) return <p>Loading ...</p>;
    if (data) {
      if (!data.getBarChartList.jobData.length) {
        callGetBarChartList(yesterday);
      }
      return data.getBarChartList.jobData.map((data, i) => {
        return (
          <Grid item xs={12} md={6} key={i}>
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
        );
      });
    }
  })();

  return (
    <MainTemplate>
      <FilterMenu>
        <BarChartFilterMenu getBarChartList={getBarChartList} />
      </FilterMenu>
      <Grid container spacing={3}>
        {barChart}
      </Grid>
    </MainTemplate>
  );
};

export default BarChart;
