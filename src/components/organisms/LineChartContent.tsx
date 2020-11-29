import React from 'react';
import { Grid } from '@material-ui/core';

import { PlaceHolder } from '~/components/molecules/ChartPlaceHolder';
import { SkillLineChart } from '~/components/molecules/lineChart/SkillLineChart';
import { ChartDisplaySizeSwitcher } from '~/components/molecules/ChartDisplaySizeSwitcher';
import { useChartDisplaySize } from '~/contexts/chartDisplaySize';
import { useLineChartData } from '~/contexts/page/lineChart/lineChartData';
import { useDateRange } from '~/contexts/page/lineChart/dateRange';
import { useSelectSkill } from '~/contexts/page/lineChart/selectSkill';

export const LineChartContent: React.FC = () => {
  const { changeChartDisplaySize } = useChartDisplaySize();
  const { getLineChartList, loading, data } = useLineChartData();
  const { selectedSkills } = useSelectSkill();
  const { selectedDateRange } = useDateRange();

  React.useEffect(() => {
    getLineChartList({
      variables: { dateRange: '1週間', skills: ['React', 'Angular', 'VueJs'] },
    });
  }, []);

  const switchChartDisplaySize = (size: number) => {
    changeChartDisplaySize(size);
    getLineChartList({
      variables: { dateRange: selectedDateRange, skills: selectedSkills },
    });
  };

  return (
    <>
      <ChartDisplaySizeSwitcher
        switchChartDisplaySize={switchChartDisplaySize}
      />
      <Grid container spacing={0}>
        {loading && <PlaceHolder />}
        {data && <SkillLineChart data={data} />}
      </Grid>
    </>
  );
};
