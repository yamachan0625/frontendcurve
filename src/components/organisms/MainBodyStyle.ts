import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 200;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: '#000',
      padding: '0 10px',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);
