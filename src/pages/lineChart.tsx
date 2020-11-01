import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CHANGE_PASSWORD } from '~/queries/queries';
import useAuth, { useProtectRoute } from '~/contexts/auth';
import { HorizontalBar, Line } from 'react-chartjs-2';
import { Grid } from '@material-ui/core';

import { MainTemplate } from '~/components/templates/MainTemplate';

import { NextPage } from 'next';

const Home: NextPage = () => {
  useProtectRoute();
  const {
    register: changePasswordRegister,
    handleSubmit: changePasswordHandleSubmit,
  } = useForm();

  const [chengePassword] = useMutation(CHANGE_PASSWORD);

  const onChangePassword = async (
    { currentPassword, newPassword, confirmNewPassword },
    e
  ) => {
    const { data } = await chengePassword({
      variables: { currentPassword, newPassword, confirmNewPassword },
    });
    e.target.reset();
  };

  const dummyLabel = [
    'Node.js',
    'React',
    'Angular',
    'Vue.js',
    'Next.js',
    'Nuxt.js',
    'TypeScript',
    'JavaScript',
    'ReactNative',
    'Flutter',
    'Electron',
    'Graphql',
    'Redux',
    'VueX',
    'Jest',
    'Cypress',
    'Webpack',
  ];

  const dummyNum = [62, 89, 66, 73, 0, 2, 40, 489, 3, 5, 3, 2, 12, 1, 0, 1, 13];
  const dummyNum2 = [
    722,
    1145,
    627,
    1022,
    41,
    147,
    756,
    2946,
    52,
    135,
    52,
    80,
    176,
    27,
    64,
    18,
    197,
  ];
  const dummyNum3 = [
    959,
    984,
    989,
    875,
    308,
    545,
    990,
    985,
    232,
    258,
    42,
    196,
    695,
    1339,
    278,
    38,
    1666,
  ];

  const dummyColor = [
    'rgba(62, 134, 61, 0.5)',
    'rgba(97, 219, 251, 0.5)',
    'rgba(221, 0, 49, 0.5)',
    'rgba(65, 184, 131, 0.5)',
    'rgba(0, 0, 0, 0.5)',
    'rgba(63,115,102,0.5)',
    'rgba(49, 120, 198, 0.5)',
    'rgba(253, 216, 60, 0.5)',
    'rgba(0, 164, 211, 0.5)',
    'rgba(97, 202, 250, 0.5)',
    'rgba(59, 126, 138, 0.5)',
    'rgba(229, 53, 171, 0.5)',
    'rgba(118, 74, 188, 0.5)',
    'rgba(93, 183, 133, 0.35)',
    'rgba(153, 66, 91, 0.5)',
    'rgba(71, 71, 75, 0.8)',
    'rgba(142, 214, 251, 0.5)',
  ];
  const dummyColorBorder = [
    'rgba(62, 134, 61, 1)',
    'rgba(97, 219, 251, 1)',
    'rgba(221, 0, 49, 1)',
    'rgba(65, 184, 131, 1)',
    'rgba(0, 0, 0, 1)',
    'rgba(63,115,102,1)',
    'rgba(49, 120, 198, 1)',
    'rgba(253, 216, 60, 1)',
    'rgba(0, 164, 211, 1)',
    'rgba(97, 202, 250, 1)',
    'rgba(59, 126, 138, 1)',
    'rgba(229, 53, 171, 1)',
    'rgba(118, 74, 188, 1)',
    'rgba(93, 183, 133, 1)',
    'rgba(153, 66, 91, 1)',
    'rgba(71, 71, 75, 1)',
    'rgba(142, 214, 251, 1)',
  ];

  return (
    <MainTemplate>
      {/* <form onSubmit={changePasswordHandleSubmit(onChangePassword)}>
        <input
          name="currentPassword"
          type="text"
          placeholder="現在のパスワード"
          ref={changePasswordRegister}
        />
        <input
          name="newPassword"
          type="text"
          placeholder="新しいパスワード"
          ref={changePasswordRegister}
        />
        <input
          name="confirmNewPassword"
          type="text"
          placeholder="新しいパスワード再入力"
          ref={changePasswordRegister}
        />
        <button type="submit">パスワード変更</button>
      </form> */}
      <Grid item xs={12} md={6}>
        <Line
          data={{
            labels: ['10/01', '10/02', '10/03', '10/04', '10/05'],
            datasets: [
              {
                data: [100, 110, 120, 130, 140, 150],
                label: 'Node.js',
                borderColor: 'rgba(62, 134, 61, 1)',
                fill: true,
              },
              {
                data: [15, 25, 35, 46, 566],
                label: 'React',
                borderColor: 'rgba(97, 219, 251, 1)',
                fill: true,
              },
              {
                data: [123, 234, 345, 456, 678],
                label: 'Angular',
                borderColor: 'rgba(221, 0, 49, 1)',
                fill: true,
              },
              {
                data: [45, 50, 34, 56, 67],
                label: 'Vue.js',
                borderColor: 'rgba(65, 184, 131, 1)',
                fill: true,
              },
              {
                data: [43, 56, 34, 56, 67],
                label: 'Next.js',
                borderColor: 'rgba(0, 0, 0, 1)',
                fill: true,
              },
              {
                data: [345, 356, 367, 345, 358],
                label: 'Nuxt.js',
                borderColor: 'rgba(63,115,102,1)',
                fill: true,
              },
              {
                data: [980, 987, 956, 987, 987],
                label: 'TypeScript',
                borderColor: 'rgba(49, 120, 198, 1)',
                fill: true,
              },
              {
                data: [3451, 3513, 3156, 3567, 3589],
                label: 'JavaScript',
                borderColor: 'rgba(253, 216, 60, 1)',
                fill: true,
              },
              {
                data: [53, 56, 59, 51, 54],
                label: 'ReactNative',
                borderColor: 'rgba(0, 164, 211, 1)',
                fill: true,
              },
              {
                data: [135, 148, 141, 123, 136],
                label: 'Flutter',
                borderColor: 'rgba(97, 202, 250, 1)',
                fill: true,
              },
              {
                data: [56, 58, 56, 51, 46],
                label: 'Electron',
                borderColor: 'rgba(59, 126, 138, 1)',
                fill: true,
              },
              {
                data: [80, 87, 89, 87, 79],
                label: 'Graphql',
                borderColor: 'rgba(229, 53, 171, 1)',
                fill: true,
              },
              {
                data: [178, 176, 168, 189, 178],
                label: 'Redux',
                borderColor: 'rgba(118, 74, 188, 1)',
                fill: true,
              },
              {
                data: [26, 26, 27, 27, 30],
                label: 'VueX',
                borderColor: 'rgba(118, 74, 188, 1)',
                fill: true,
              },
              {
                data: [67, 68, 69, 63, 65],
                label: 'Jest',
                borderColor: 'rgba(153, 66, 91, 1)',
                fill: true,
              },
              {
                data: [14, 16, 13, 15, 16],
                label: 'Cypress',
                borderColor: 'rgba(71, 71, 75, 1)',
                fill: true,
              },
              {
                data: [198, 201, 104, 190, 205],
                label: 'Webpack',
                borderColor: 'rgba(142, 214, 251, 1)',
                fill: true,
              },
            ],
          }}
          options={{
            title: {
              display: true,
              text: `GREEN`,
              fontColor: '#fff',
            },
            scales: {
              xAxes: [
                {
                  ticks: {
                    // 目盛り
                    fontColor: '#fff', // 目盛りの色
                    beginAtZero: true,
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    // 目盛り
                    fontColor: '#fff', // 目盛りの色
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        ></Line>
      </Grid>
    </MainTemplate>
  );
};

export default Home;
