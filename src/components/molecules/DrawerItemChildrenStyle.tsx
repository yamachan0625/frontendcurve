import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ListItemRootChild: {
      paddingLeft: '50px',
      '&:hover': {
        background: theme.palette.primary.main,
      },
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
