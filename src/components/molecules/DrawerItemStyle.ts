import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 200;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: '#000',
      padding: '0 10px',
    },
    iconRoot: {
      minWidth: '0px',
      paddingRight: theme.spacing(1),
    },
    iconStyle: {
      transform: 'rotate(90deg)',
    },
    ListItemTextRoot: {
      fontSize: theme.spacing(2),
    },
  })
);
