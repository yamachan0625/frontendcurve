import React from 'react';
import { Grid } from '@material-ui/core';

import barChartMock from '~/mock/barChartMock.json';
import { PlaceHolder } from '~/components/molecules/ChartPlaceHolder';
import { SkillBarChart } from '~/components/molecules/barChart/SkillBarChart';
import { ChartDisplaySizeSwitcher } from '~/components/molecules/ChartDisplaySizeSwitcher';
import { useChartDisplaySizeContext } from '~/contexts/chartDisplaySize';
import { useBarChart } from '~/contexts/page/barChartStore';

export type BarChartDataType = typeof barChartMock;

export const BarChartContent: React.FC = () => {
  const {
    chartDisplaySize,
    changeChartDisplaySize,
  } = useChartDisplaySizeContext();
  const {
    getBarChartList,
    loading,
    data,
    selectDate,
    sortOrder,
    now,
    callSetMinDate,
  } = useBarChart();

  // dataが変わるたびにuseEffectでsetMindateが走るのを制御するためのstate
  const [beforeFirstRender, setBeforeFirstRender] = React.useState(false);

  React.useEffect(() => {
    getBarChartList({
      variables: { date: now, sortOrder: 'default' },
    });
  }, []);

  React.useEffect(() => {
    if (data && data.getBarChartList.minDate && !beforeFirstRender) {
      setBeforeFirstRender(true);

      /** datepickerのminDateをapiからもらった値で書き換え */
      callSetMinDate(new Date(data.getBarChartList.minDate));
    }
  }, [data]);

  const switchChartDisplaySize = (size: number) => {
    changeChartDisplaySize(size);
    getBarChartList({
      variables: { date: selectDate, sortOrder },
    });
  };

  return (
    <>
      <ChartDisplaySizeSwitcher
        switchChartDisplaySize={switchChartDisplaySize}
        chartDisplaySize={chartDisplaySize}
      />
      <Grid container spacing={0}>
        {loading && <PlaceHolder />}
        {data && (
          <SkillBarChart
            data={data.getBarChartList.jobData}
            chartSize={chartDisplaySize}
          />
        )}
      </Grid>
    </>
  );
};
