import React from 'react';
import { Grid } from '@material-ui/core';

import { ChartPlaceHolder } from '~/components/molecules/ChartPlaceHolder';
import { SkillBarChart } from '~/components/molecules/barChart/SkillBarChart';
import { ChartDisplaySizeSwitcher } from '~/components/molecules/ChartDisplaySizeSwitcher';
import { useMinDate } from '~/contexts/page/barChart/minDate';
import { useBarChartData } from '~/contexts/page/barChart/barChartData';
import { useSelectDatepicker } from '~/contexts/page/barChart/selectDatepicker';
import { useSortOrder } from '~/contexts/page/barChart/sortOrder';

export const BarChartContent: React.FC = React.memo(() => {
  const { callSetMinDate } = useMinDate();
  const { getBarChartList, loading, data } = useBarChartData();
  const { selectDate } = useSelectDatepicker();
  const { sortOrder } = useSortOrder();

  // dataが変わるたびにuseEffectでsetMindateが走るのを制御するためのstate
  const [beforeFirstRender, setBeforeFirstRender] = React.useState(false);

  React.useEffect(() => {
    getBarChartList({
      variables: { date: selectDate, sortOrder: sortOrder },
    });
  }, []);

  React.useEffect(() => {
    if (data && data.getBarChartList.minDate && !beforeFirstRender) {
      setBeforeFirstRender(true);
      /** datepickerのminDateをapiからもらった値で書き換え */
      callSetMinDate(new Date(data.getBarChartList.minDate));
    }
  }, [data]);

  return (
    <>
      <ChartDisplaySizeSwitcher />
      <Grid container spacing={0}>
        {loading && <ChartPlaceHolder />}
        {data && <SkillBarChart jobData={data.getBarChartList.jobData} />}
      </Grid>
    </>
  );
});
