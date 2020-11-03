import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    radioRoot: {
      display: 'inline',
    },
    filterButton: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: purple[500],
      '&:hover': {
        backgroundColor: purple[700],
      },
      fontWeight: 'bold',
      marginTop: theme.spacing(2),
    },
  })
);
