import React from 'react';
import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { HorizontalBar } from 'react-chartjs-2';
import { Grid } from '@material-ui/core';

import useAuth, { useProtectRoute } from '~/contexts/auth';
import { FilterMenu } from '~/components/organisms/common/FilterMenu';
import { MainTemplate } from '~/components/templates/MainTemplate';
import { BarChartFilterMenu } from '~/components/molecules/BarChartFilterMenu';
import dummyAPI from './barChartMock.json';

const Home: NextPage = () => {
  useProtectRoute();

  return (
    <MainTemplate>
      <FilterMenu>
        <BarChartFilterMenu />
      </FilterMenu>
      <Grid container spacing={3}>
        {dummyAPI.jobData.map((data, i) => {
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
        })}
      </Grid>
    </MainTemplate>
  );
};

export default Home;
