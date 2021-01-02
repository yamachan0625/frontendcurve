import { createMuiTheme } from '@material-ui/core/styles';

export const darkTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#f5f5f5',
      main: '#3f3f3f',
      dark: '#262626',
      contrastText: '#fff',
    },
    secondary: {
      light: '#8B83BE',
      main: '#fdd83c',
      dark: '#c6a102',
      contrastText: '#fff',
    },
    type: 'dark',
  },
  typography: {
    h1: {
      fontSize: '32px',
    },
    h2: {
      fontSize: '24px',
    },
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: 'italic',
    },
  },
});
