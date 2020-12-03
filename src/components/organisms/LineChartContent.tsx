import React from 'react';
import { Grid } from '@material-ui/core';

import { PlaceHolder } from '~/components/molecules/ChartPlaceHolder';
import { SkillLineChart } from '~/components/molecules/lineChart/SkillLineChart';
import { ChartDisplaySizeSwitcher } from '~/components/molecules/ChartDisplaySizeSwitcher';
import { useLineChartData } from '~/contexts/page/lineChart/lineChartData';
import { useDateRange } from '~/contexts/page/lineChart/dateRange';
import { useSelectSkill } from '~/contexts/page/lineChart/selectSkill';

export const LineChartContent: React.FC = React.memo(() => {
  const { getLineChartList, loading, data } = useLineChartData();
  const { selectedSkills } = useSelectSkill();
  const { selectedDateRange } = useDateRange();

  React.useEffect(() => {
    getLineChartList({
      variables: { dateRange: selectedDateRange, skills: selectedSkills },
    });
  }, []);

  return (
    <>
      <ChartDisplaySizeSwitcher />
      <Grid container spacing={0}>
        {loading && <PlaceHolder />}
        {data && <SkillLineChart data={data} />}
      </Grid>
    </>
  );
});
