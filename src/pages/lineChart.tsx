import React from 'react';
import { useProtectRoute } from '~/contexts/auth';
import { Line } from 'react-chartjs-2';
import { Grid } from '@material-ui/core';
import { useLazyQuery } from '@apollo/client';

import { GET_LINE_CHART_LIST } from '~/queries/queries';
import { FilterMenu } from '~/components/organisms/common/FilterMenu';
import { MainTemplate } from '~/components/templates/MainTemplate';
import { LineChartFilterMenu } from '~/components/molecules/LineChartFilterMenu';

import { NextPage } from 'next';

const LineChart: NextPage = () => {
  useProtectRoute();

  const [getLineChartList, { loading, data }] = useLazyQuery(
    GET_LINE_CHART_LIST
  );

  React.useEffect(() => {
    getLineChartList({
      variables: { dateRange: '1週間', skills: ['React', 'Angular', 'VueJs'] },
    });
  }, []);

  const lineChart: JSX.Element = (() => {
    if (loading) return <p>Loading ...</p>;
    if (data) {
      return data.getLineChartList.jobData.map((lineChartData, i) => {
        console.log();
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
    <MainTemplate>
      <FilterMenu>
        <LineChartFilterMenu getLineChartList={getLineChartList} />
      </FilterMenu>
      <Grid container spacing={1}>
        {lineChart}
      </Grid>
    </MainTemplate>
  );
};

export default LineChart;
