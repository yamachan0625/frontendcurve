import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chipRoot: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
    chip: {
      border: `1px solid ${theme.palette.primary.contrastText}`,
      padding: '0 10px',
      borderRadius: '20px',
      color: theme.palette.primary.contrastText,
    },
  })
);
