import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    accordionRoot: {
      backgroundColor: theme.palette.primary.main,
      boxShadow: 'none',
      borderBottom: `2px solid ${theme.palette.primary.dark}`,
      '&:before': {
        height: '0px',
      },
    },
    filterTitle: {
      display: 'flex',
      alignItems: 'center',
    },
    span: {
      marginLeft: theme.spacing(1),
    },
  })
);
