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
