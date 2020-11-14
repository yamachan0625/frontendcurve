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

  const now = new Date();
  // スクレイピングが午前3時に行われるため午前4時に日付が変わるように変更
  now.setHours(now.getHours() - 4);

  const [selectDate, setSelectDate] = React.useState(now);

  const [minDate, setMindate] = React.useState<null | Date>(null);

  const callGetBarChartList = React.useCallback((date) => {
    getBarChartList({
      variables: { date: date, sortOrder: 'default' },
    });
  }, []);

  React.useEffect(() => {
    callGetBarChartList(new Date());
  }, []);

  React.useEffect(() => {
    if (data && data.getBarChartList.minDate) {
      /** datepickerのminDateをapiからもらった値で書き換え */
      setMindate(new Date(data.getBarChartList.minDate));
    }
  }, [data]);

  return [
    getBarChartList,
    data,
    loading,
    selectDate,
    setSelectDate,
    minDate,
    now,
  ] as const;
};

const BarChart: NextPage = () => {
  useProtectRoute();

  const [
    getBarChartList,
    data,
    loading,
    selectDate,
    setSelectDate,
    minDate,
    now,
  ] = useBarChart();

  const barChart: JSX.Element = (() => {
    if (loading) return <p>Loading ...</p>;
    if (data) {
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
        <BarChartFilterMenu
          getBarChartList={getBarChartList}
          selectDate={selectDate}
          setSelectDate={setSelectDate}
          minDate={minDate}
          maxDate={now}
        />
      </FilterMenu>
      <Grid container spacing={0}>
        {barChart}
      </Grid>
    </MainTemplate>
  );
};

export default BarChart;
