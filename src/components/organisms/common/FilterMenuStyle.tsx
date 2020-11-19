import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    accordionRoot: {
      backgroundColor: '#3f3f3f',
      color: theme.palette.primary.contrastText,
      boxShadow: 'none',
      borderBottom: `2px solid ${theme.palette.primary.dark}`,
      '&:before': {
        height: '0px',
      },
    },
    filterTitle: {
      display: 'flex',
      alignItems: 'center',
    },
    filterIcon: { color: theme.palette.primary.contrastText },
    span: {
      marginLeft: theme.spacing(1),
    },
  })
);
