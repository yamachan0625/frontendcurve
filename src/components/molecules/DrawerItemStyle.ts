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
    iconRoot: {
      minWidth: '0px',
      paddingRight: theme.spacing(1),
      color: '#FFFFFF',
    },
    ListItemTextRoot: {
      fontSize: theme.spacing(2),
      color: '#FFFFFF',
    },
    ListItemSelected: {
      backgroundColor: '#888 !important',
    },
    DividerRoot: {
      backgroundColor: '#FFFFFF',
    },
  })
);
