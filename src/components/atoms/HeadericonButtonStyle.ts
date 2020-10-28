import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconButtonRoot: {
      color: theme.palette.primary.contrastText,
    },
  })
);
