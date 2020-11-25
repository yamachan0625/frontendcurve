import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chipRoot: {
      fontSize: '12px',
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
    chip: {
      border:
        theme.palette.type === 'dark'
          ? `1px solid ${theme.palette.primary.contrastText}`
          : '1px solid black',
      padding: `${theme.spacing(0.5)}px ${theme.spacing(1.5)}px`,
      borderRadius: '20px',
    },
  })
);
