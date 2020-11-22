import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  placeHolder: {
    backgroundColor: theme.palette.primary.main,
    height: 'auto',
    paddingTop: '50%',
    position: 'relative',
    margin: '10px 0',
  },
  circle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));
