import React from 'react';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import Hidden from '@material-ui/core/Hidden';

import { useTheme } from '~/contexts/theme';
import { useStyles } from './ChartDisplaySizeSwitcherStyle';
import { useChartDisplaySize } from '~/contexts/chartDisplaySize';

export const ChartDisplaySizeSwitcher: React.FC = React.memo(() => {
  const classes = useStyles();
  const { theme } = useTheme();
  const { chartDisplaySize, changeChartDisplaySize } = useChartDisplaySize();

  React.useEffect(() => {
    changeChartDisplaySize(
      Number(window.localStorage.getItem('chartDisplaySize')) || 6
    );
  }, []);

  return (
    <Hidden smDown>
      <div className={classes.swither}>
        <ViewModuleIcon
          onClick={
            chartDisplaySize === 12 ? () => changeChartDisplaySize(6) : () => {}
          }
          style={{
            color:
              chartDisplaySize === 6
                ? theme.palette.primary.dark
                : theme.palette.primary.contrastText,
            cursor: chartDisplaySize === 12 && 'pointer',
          }}
          fontSize="large"
          className={classes.icon}
          data-testid="single-display-switcher"
        />
        <div className={classes.separator} />
        <ViewColumnIcon
          onClick={
            chartDisplaySize === 6 ? () => changeChartDisplaySize(12) : () => {}
          }
          style={{
            color:
              chartDisplaySize === 12
                ? theme.palette.primary.dark
                : theme.palette.primary.contrastText,
            cursor: chartDisplaySize === 6 && 'pointer',
          }}
          fontSize="large"
          className={classes.icon}
          data-testid="double-display-switcher"
        />
      </div>
    </Hidden>
  );
});
