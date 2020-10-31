import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ListItemRoot: {
      paddingLeft: '50px',
    },
    ListItemTextRoot: {
      fontSize: theme.spacing(2),
      color: theme.palette.primary.contrastText,
    },
    ListItemSelected: {
      backgroundColor: `${theme.palette.primary.main} !important`,
    },
  })
);
