import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(20),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4, 2),
  },
  sepalater: {
    display: 'flex',
    alignItems: 'center',
    '&:before': {
      content: '""',
      height: '1px',
      flexGrow: 1,
      borderTop: `1px solid ${theme.palette.primary.contrastText}`,
      marginRight: '10px',
      width: '50px',
    },
    '&:after': {
      content: '""',
      height: '1px',
      flexGrow: 1,
      borderTop: `1px solid ${theme.palette.primary.contrastText}`,
      marginLeft: '10px',
      width: '50px',
    },
  },
  title: {
    fontSize: '24px',
  },
}));
