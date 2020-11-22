import React from 'react';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    swither: {
      display: 'inline-flex',
      paddingTop: '10px',
      float: 'right',
    },
    icon: {
      transform: 'rotate(90deg)',
      margin: '0 10px',
    },
    separator: {
      borderRight: `1px solid ${theme.palette.primary.contrastText}`,
    },
  })
);

type Props = {
  switchChartDisplaySize: (size: number) => void;
  chartDisplaySize: any;
};

export const ChartDisplaySizeSwitcher: React.FC<Props> = ({
  switchChartDisplaySize,
  chartDisplaySize,
}) => {
  const classes = useStyles();

  React.useEffect(() => {
    switchChartDisplaySize(
      Number(window.localStorage.getItem('chartDisplaySize')) || 6
    );
  }, []);

  return (
    <div className={classes.swither}>
      <ViewModuleIcon
        onClick={
          chartDisplaySize === 12 ? () => switchChartDisplaySize(6) : () => {}
        }
        style={{
          color: chartDisplaySize === 6 ? '#fff' : 'rgba(255,255,255, 0.3)',
          cursor: chartDisplaySize === 12 && 'pointer',
        }}
        fontSize="large"
        className={classes.icon}
      />
      <div className={classes.separator} />
      <ViewColumnIcon
        onClick={
          chartDisplaySize === 6 ? () => switchChartDisplaySize(12) : () => {}
        }
        style={{
          color: chartDisplaySize === 12 ? '#fff' : 'rgba(255,255,255, 0.3)',
          cursor: chartDisplaySize === 6 && 'pointer',
        }}
        fontSize="large"
        className={classes.icon}
      />
    </div>
  );
};
