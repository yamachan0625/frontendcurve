import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ListItemRootChild: {
      paddingLeft: '50px',
    },
    ListItemTextRoot: {
      fontSize: theme.spacing(2),
    },
  })
);
