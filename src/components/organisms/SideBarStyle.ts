import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 200;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: theme.palette.primary.dark,
    },
    drawerList: {
      paddingTop: '0px',
    },
    imageWrapper: {
      display: 'block',
      minHeight: '64px',
      paddingLeft: theme.spacing(2),
      position: 'relative',
    },
    logoIcon: {
      position: 'absolute',
      top: '0',
      bottom: '0',
      margin: 'auto',
    },
  })
);
