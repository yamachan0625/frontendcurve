import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    radioRoot: {
      display: 'inline',
    },
    filterButton: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
      },
      fontWeight: 'bold',
      marginTop: theme.spacing(2),
    },
    carenderStyle: {
      borderRadius: '4px',
      boxShadow: `inset 0 2px 2px ${theme.palette.primary.dark}`,
      border: `1px solid ${theme.palette.primary.dark}`,
      padding: '2px 5px',
    },
  })
);
