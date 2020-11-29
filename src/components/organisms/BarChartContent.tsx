import React from 'react';
import { Grid } from '@material-ui/core';

import barChartMock from '~/mock/barChartMock.json';
import { PlaceHolder } from '~/components/molecules/ChartPlaceHolder';
import { SkillBarChart } from '~/components/molecules/barChart/SkillBarChart';
import { ChartDisplaySizeSwitcher } from '~/components/molecules/ChartDisplaySizeSwitcher';
import { chartMaxDate } from '~/helpers/date';
import { useChartDisplaySize } from '~/contexts/chartDisplaySize';
import { useMinDate } from '~/contexts/page/barChart/minDate';
import { useBarChartData } from '~/contexts/page/barChart/barChartData';
import { useSelectDatepicker } from '~/contexts/page/barChart/selectDatepicker';
import { useSortOrder } from '~/contexts/page/barChart/sortOrder';

export type BarChartDataType = typeof barChartMock;

export const BarChartContent: React.FC = () => {
  const { changeChartDisplaySize } = useChartDisplaySize();
  const { callSetMinDate } = useMinDate();
  const { getBarChartList, loading, data } = useBarChartData();
  const { selectDate } = useSelectDatepicker();
  const { sortOrder } = useSortOrder();

  // dataが変わるたびにuseEffectでsetMindateが走るのを制御するためのstate
  const [beforeFirstRender, setBeforeFirstRender] = React.useState(false);

  React.useEffect(() => {
    getBarChartList({
      variables: { date: chartMaxDate(), sortOrder: 'default' },
    });
  }, []);

  React.useEffect(() => {
    if (data && data.getBarChartList.minDate && !beforeFirstRender) {
      setBeforeFirstRender(true);

      /** datepickerのminDateをapiからもらった値で書き換え */
      callSetMinDate(new Date(data.getBarChartList.minDate));
    }
  }, [data]);

  const switchChartDisplaySize = React.useCallback(
    (size: number) => {
      changeChartDisplaySize(size);
      getBarChartList({
        variables: { date: selectDate, sortOrder },
      });
    },
    [changeChartDisplaySize, getBarChartList, selectDate, sortOrder]
  );

  return (
    <>
      <ChartDisplaySizeSwitcher
        switchChartDisplaySize={switchChartDisplaySize}
      />
      <Grid container spacing={0}>
        {loading && <PlaceHolder />}
        {data && <SkillBarChart data={data.getBarChartList.jobData} />}
      </Grid>
    </>
  );
};
