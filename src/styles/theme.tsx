import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#f5f5f5',
      main: '#3f3f3f',
      dark: '#262626',
      contrastText: '#fff',
    },
    secondary: {
      light: '#6b48ff',
      main: '#f2f4f6',
      dark: '#1ee3cf',
      contrastText: '#000',
    },
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

export default theme;
