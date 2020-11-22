import React from 'react';
import { Grid } from '@material-ui/core';

import { PlaceHolder } from '~/components/molecules/PlaceHolder';
import { SkillLineChart } from '~/components/molecules/lineChart/SkillLineChart';
import { ChartDisplaySizeSwitcher } from '~/components/molecules/ChartDisplaySizeSwitcher';
import { useRootStore } from '~/contexts/rootStore';
import { useLineChart } from '~/contexts/page/lineChartStore';

export const LineChartContent: React.FC = () => {
  const { chartDisplaySize, changeChartDisplaySize } = useRootStore();
  const {
    getLineChartList,
    loading,
    data,
    selectedDateRange,
    selectedSkills,
  } = useLineChart();

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
        chartDisplaySize={chartDisplaySize}
      />
      <Grid container spacing={1}>
        {loading && <PlaceHolder />}
        {data && <SkillLineChart data={data} chartSize={chartDisplaySize} />}
      </Grid>
    </>
  );
};
