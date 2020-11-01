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
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <HorizontalBar
            data={{
              labels: dummyLabel,
              datasets: [
                {
                  label: '求人数',
                  backgroundColor: dummyColor,
                  data: dummyNum,
                  borderColor: dummyColorBorder,
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: {
                display: true,
                text: `レバテック フリーランス`,
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
                      // fontSize: 14, // フォントサイズ
                    },
                    gridLines: {
                      // color: 'rgba(255, 0, 0, 0.2)', // 補助線の色
                    },
                    ticks: {
                      // 目盛り
                      fontColor: '#fff', // 目盛りの色
                      beginAtZero: true,
                      // fontSize: 14, // フォントサイズ
                    },
                  },
                ],
                yAxes: [
                  {
                    scaleLabel: {
                      // 軸ラベル
                      display: true, // 表示設定
                      fontColor: '#fff', // 文字の色
                      // fontSize: 16, // フォントサイズ
                    },
                    gridLines: {
                      // 補助線
                      // color: 'rgba(255, 0, 0, 0.2)', // 補助線の色
                    },
                    ticks: {
                      // 目盛り
                      fontColor: '#fff', // 目盛りの色
                      beginAtZero: true,
                      // fontSize: 14, // フォントサイズ
                    },
                  },
                ],
              },
            }}
          ></HorizontalBar>
        </Grid>
        <Grid item xs={12} md={6}>
          <HorizontalBar
            data={{
              labels: dummyLabel,
              datasets: [
                {
                  label: '求人数',
                  backgroundColor: dummyColor,
                  data: dummyNum2,
                  borderColor: dummyColorBorder,
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: {
                display: true,
                text: `レバテック キャリア`,
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
                      // fontSize: 14, // フォントサイズ
                    },
                    gridLines: {
                      // color: 'rgba(255, 0, 0, 0.2)', // 補助線の色
                    },
                    ticks: {
                      // 目盛り
                      fontColor: '#fff', // 目盛りの色
                      beginAtZero: true,
                      // fontSize: 14, // フォントサイズ
                    },
                  },
                ],
                yAxes: [
                  {
                    scaleLabel: {
                      // 軸ラベル
                      display: true, // 表示設定
                      fontColor: '#fff', // 文字の色
                      // fontSize: 16, // フォントサイズ
                    },
                    gridLines: {
                      // 補助線
                      // color: 'rgba(255, 0, 0, 0.2)', // 補助線の色
                    },
                    ticks: {
                      // 目盛り
                      fontColor: '#fff', // 目盛りの色
                      beginAtZero: true,
                      // fontSize: 14, // フォントサイズ
                    },
                  },
                ],
              },
            }}
          ></HorizontalBar>
        </Grid>
        <Grid item xs={12} md={6}>
          <HorizontalBar
            data={{
              labels: dummyLabel,
              datasets: [
                {
                  label: '求人数',
                  backgroundColor: dummyColor,
                  data: dummyNum3,
                  borderColor: dummyColorBorder,
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: {
                display: true,
                text: `GREEN`,
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
                      // fontSize: 14, // フォントサイズ
                    },
                    gridLines: {
                      // color: 'rgba(255, 0, 0, 0.2)', // 補助線の色
                    },
                    ticks: {
                      // 目盛り
                      fontColor: '#fff', // 目盛りの色
                      beginAtZero: true,
                      // fontSize: 14, // フォントサイズ
                    },
                  },
                ],
                yAxes: [
                  {
                    scaleLabel: {
                      // 軸ラベル
                      display: true, // 表示設定
                      fontColor: '#fff', // 文字の色
                      // fontSize: 16, // フォントサイズ
                    },
                    gridLines: {
                      // 補助線
                      // color: 'rgba(255, 0, 0, 0.2)', // 補助線の色
                    },
                    ticks: {
                      // 目盛り
                      fontColor: '#fff', // 目盛りの色
                      beginAtZero: true,
                      // fontSize: 14, // フォントサイズ
                    },
                  },
                ],
              },
            }}
          ></HorizontalBar>
        </Grid>
        <Grid item xs={12} md={6}>
          <HorizontalBar
            data={{
              labels: dummyLabel,
              datasets: [
                {
                  label: '求人数',
                  backgroundColor: dummyColor,
                  data: dummyNum2,
                  borderColor: dummyColorBorder,
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: {
                display: true,
                text: `Geek Out`,
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
                      // fontSize: 14, // フォントサイズ
                    },
                    gridLines: {
                      // color: 'rgba(255, 0, 0, 0.2)', // 補助線の色
                    },
                    ticks: {
                      // 目盛り
                      fontColor: '#fff', // 目盛りの色
                      beginAtZero: true,
                      // fontSize: 14, // フォントサイズ
                    },
                  },
                ],
                yAxes: [
                  {
                    scaleLabel: {
                      // 軸ラベル
                      display: true, // 表示設定
                      fontColor: '#fff', // 文字の色
                      // fontSize: 16, // フォントサイズ
                    },
                    gridLines: {
                      // 補助線
                      // color: 'rgba(255, 0, 0, 0.2)', // 補助線の色
                    },
                    ticks: {
                      // 目盛り
                      fontColor: '#fff', // 目盛りの色
                      beginAtZero: true,
                      // fontSize: 14, // フォントサイズ
                    },
                  },
                ],
              },
            }}
          ></HorizontalBar>
        </Grid>
      </Grid>
    </MainTemplate>
  );
};

export default Home;
